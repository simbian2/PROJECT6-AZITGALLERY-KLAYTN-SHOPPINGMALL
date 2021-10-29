import axios from 'axios';
import {all,put,takeEvery,takeLatest,fork,call} from "redux-saga/effects";


function* MintNftSaga(){
    const result = yield call(axios.post,`http://localhost:4000/mint/mintnft`)

    yield put({
        type:'MINT_NFT_RETURN',
        verify:5000
    })  
}

function* watchMint(){
    yield takeLatest('MINT_NFT_SUCCESS',MintNftSaga)
}

export default function* MintSaga(){
    yield all([
        fork(watchMint)
    ])
}
