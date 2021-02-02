import * as types from '../ducks/app'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function fetchCountry(payload){
    let apiUrl = payload.case === 'all' ? `https://restcountries.eu/rest/v2/region/${payload.parameters}` : `https://restcountries.eu/rest/v2/name/${payload.parameters}`
    return axios.get(apiUrl)
    .then(res=>{
        const returnData = payload.case === 'all' ? res.data : res.data[0]
        return returnData
    })
    .catch(error=>{throw error})
}

function* GetCountry({payload}) {
    const usedTypes = payload.case === 'all' ? [ types.ALL_COUNTRIES_SUCCESS, types.ALL_COUNTRIES_FAILURE ] : [ types.SELECTED_COUNTRY_SUCCESS, types.SELECTED_COUNTRY_FAILURE ]
    try{
        const allCountries = yield call(()=>fetchCountry(payload))
        yield put({ type: usedTypes[0], payload: allCountries })
    } catch(e){
        yield put({ type: usedTypes[1], payload: e.message })
    }
}

function* rootSaga() {
    yield takeEvery(types.ALL_COUNTRIES_REQUEST, GetCountry)
    yield takeLatest(types.SELECTED_COUNTRY_REQUEST, GetCountry)
}

export default rootSaga