import { all } from 'redux-saga/effects'
import countriesApi from './countriesApi'

export default function* rootSaga(){
    yield all(([
        countriesApi()
    ]))
}