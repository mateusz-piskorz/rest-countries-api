import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './ducks'
import createSagaapplyMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaapplyMiddleware()

export const store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(reducer)

sagaMiddleware.run(rootSaga)