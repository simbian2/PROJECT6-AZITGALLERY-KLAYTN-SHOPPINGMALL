import axios from 'axios';
import {all,put,takeLatest,fork,call} from "redux-saga/effects";
import {url} from './url'

function shipAPI(data){
    return axios.post (`${url}/ship/shipinfo`,data)
}

function* shipInfo(action){
    // console.log(action.data);
    
    const result = yield call(shipAPI, action.data)

    // yield put({
    //     type:'MINT_NFT_RETURN',
    //     verify:5000
    // })  
}

function* reqShip(){
    yield takeLatest('SHIPINFO_INSERT_REQUEST',shipInfo)
}

export default function* shipSaga(){
    yield all([
        fork(reqShip)
    ])
}
