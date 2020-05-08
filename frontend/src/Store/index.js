import {createStore,combineReducers,applyMiddleware} from 'redux';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()


const persistConfig = {
    key: 'root',
    storage,
    blacklist:['playing']
  }

const spotify = persistReducer(persistConfig, rootReducer)

const store = createStore(combineReducers({
    spotify,
}),
applyMiddleware(sagaMiddleware)
)

const  persistor = persistStore(store)


sagaMiddleware.run(rootSaga);


export {store,persistor}
