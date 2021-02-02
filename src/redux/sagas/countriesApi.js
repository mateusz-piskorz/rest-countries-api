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
    const usedState = payload.case === 'all' ? [ 'allCountriesLoading', 'allCountriesError', 'allCountries'] : [ 'selectedCountryLoading', 'selectedConutryError', 'selectedConutry']
    try{
        const allCountries = yield call(()=>fetchCountry(payload))
        yield put({ type: types.FETCH_COUNTRY_SUCCESS, payload: {value: allCountries, loadingState: usedState[0], errorState: usedState[1], dataState: usedState[2]} })
    } catch(e){
        yield put({ type: types.FETCH_COUNTRY_FAILURE, payload: {value: e.message, loadingState: usedState[0], errorState: usedState[1]} })
    }
}

function* rootSaga() {
    yield takeEvery(types.ALL_COUNTRIES_REQUEST, GetCountry)
    yield takeLatest(types.SELECTED_COUNTRY_REQUEST, GetCountry)
}

export default rootSaga