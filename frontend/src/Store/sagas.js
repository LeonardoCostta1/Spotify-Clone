
 import {call,takeEvery,put} from "redux-saga/effects";
 import{ getData }from '../Services/data'


function* getApiData(action){

    const response = yield call(getData)
    console.log(response)
  
    yield put({type:'ADD_TRACK',payload:response})

}


export default function* root() {
    yield takeEvery ('ASYNC_ADD_TRACK', getApiData)

  }

  