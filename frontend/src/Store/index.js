import {createStore,combineReducers,applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import isplaying from './reducers/playing'

import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

export default createStore(combineReducers({
    rootReducer,
    isplaying,
    
}),
applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);
