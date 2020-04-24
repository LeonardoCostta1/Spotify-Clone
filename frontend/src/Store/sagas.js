
 import {takeEvery,put} from "redux-saga/effects";


function* asyncAddTrack(action){
  
    yield put({type:'ADD_TRACK',payload:action.payload})
    console.log(action.payload)

}


export default function* root() {
    yield takeEvery ('ASYNC_ADD_TRACK', asyncAddTrack)

  }

  