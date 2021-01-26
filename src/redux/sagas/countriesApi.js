import * as types from '../ducks/app'
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
//'https://restcountries.eu/rest/v2/all')
//'https://restcountries.eu/rest/v2/name/{name}'
//'https://restcountries.eu/rest/v2/region/${region}'

function getAllCountries(){
    const apiUrl = 'https://restcountries.eu/rest/v2/region/Oceania'
    return axios.get(apiUrl)
    .then(res=>res.data)
    .catch(error=>{throw error})
}

function* fetchAllCountries() {
    try{
        const allCountries = yield call(getAllCountries)
        yield put({ type: types.ALL_COUNTRIES_SUCCESS, payload: allCountries })
    } catch(e){
        yield put({ type: types.ALL_COUNTRIES_FAILURE, payload: e.message })
    }
}

function* rootSaga() {
    yield takeEvery(types.ALL_COUNTRIES_REQUEST, fetchAllCountries)
    // yield takeEvery('CREATE_USER', fetchOnlyOneCountry)
}

export default rootSaga