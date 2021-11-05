import axios from 'axios';
import {all,put,takeEvery,takeLatest,fork,call} from "redux-saga/effects";

function listitemAPI() {
    return axios.get(`http://localhost:4000/list/alllist`)
}

function* listitemSaga(){
    const result = yield call(listitemAPI)
   
    yield put({
        type:'ITEM_LIST_SUCCESS',
        data:result.data.ARR
    })
}

function* reqlistitem(){
    yield takeLatest('ITEM_LIST_REQUEST',listitemSaga)
}


function pluslistitemAPI() {
    return axios.get(`http://localhost:4000/list/pluslist`)
}

function* pluslistitemSaga(){
    const result = yield call(pluslistitemAPI)
   
    yield put({
        type:'PLUS_ITEM_LIST_SUCCESS',
        data:result.data.ARR
    })
}

function* reqpluslistitem(){
    yield takeLatest('PLUS_ITEM_LIST_REQUEST',pluslistitemSaga)
}
export default function* MintSaga(){
        yield all([
            fork(reqlistitem),
            fork(reqpluslistitem),
        ])

}
