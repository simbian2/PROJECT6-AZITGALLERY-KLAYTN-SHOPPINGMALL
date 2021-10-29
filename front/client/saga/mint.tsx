import axios from 'axios';
import {all,put,takeEvery,takeLatest,fork,call} from "redux-saga/effects";


function* MintNftSaga(){
    const result = yield call(axios.post,`http://localhost:4000/mint/mintnft`)

    
}

function* watchUser(){
    yield takeLatest('MINT_NFT_SUCCESS',MintNftSaga)
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}
