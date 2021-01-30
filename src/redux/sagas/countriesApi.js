import * as types from '../ducks/app'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
//'https://restcountries.eu/rest/v2/all')
//'https://restcountries.eu/rest/v2/name/{name}'
//'https://restcountries.eu/rest/v2/region/${region}'

function getAllCountries(regionName){
    const apiUrl = `https://restcountries.eu/rest/v2/region/${regionName}`
    return axios.get(apiUrl)
    .then(res=>res.data)
    .catch(error=>{throw error})
}

function getSelectedCountry(countryName){
    const apiUrl = `https://restcountries.eu/rest/v2/name/${countryName}`
    return axios.get(apiUrl)
    .then(res=>res.data)
    .then(data=>data[0])
    .catch(error=>{throw error})
}

function* fetchAllCountries({payload}) {
    try{
        const allCountries = yield call(()=>getAllCountries(payload))
        yield put({ type: types.ALL_COUNTRIES_SUCCESS, payload: allCountries })
    } catch(e){
        yield put({ type: types.ALL_COUNTRIES_FAILURE, payload: e.message })
    }
}

function* fetchSelectedCountry({payload}) {
    try{
        const selectedCountry = yield call(()=>getSelectedCountry(payload))
        yield put({ type: types.SELECTED_COUNTRY_SUCCESS, payload: selectedCountry })
    } catch(e){
        yield put({ type: types.SELECTED_COUNTRY_FAILURE, payload: e.message })
    }
}


function* rootSaga() {
    yield takeEvery(types.ALL_COUNTRIES_REQUEST, fetchAllCountries)
    yield takeLatest(types.SELECTED_COUNTRY_REQUEST, fetchSelectedCountry)
}

export default rootSaga