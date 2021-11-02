import axios from 'axios';
import {all,put,takeLatest,fork,call} from "redux-saga/effects";
import {url} from './url'

function itemAPI(data){
    return axios.post (`${url}/item/uploaddata`,data)
}

function* itemInfo(action){
    // console.log(action.data);
    
    const result = yield call(itemAPI, action.data)

    // yield put({
    //     type:'MINT_NFT_RETURN',
    //     verify:5000
    // })  
}

function* reqItem(){
    yield takeLatest('ITEMINFO_INSERT_REQUEST',itemInfo)
}

export default function* itemSaga(){
    yield all([
        fork(reqItem)
    ])
}
