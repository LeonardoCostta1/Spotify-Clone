import {createStore,combineReducers} from 'redux';

import rootReducer from './reducers/rootReducer'

export default createStore(combineReducers({
    rootReducer
}))