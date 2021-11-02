import axios from 'axios';
import {all,put,takeEvery,takeLatest,fork,call} from "redux-saga/effects";

function loginAPI(action){
    return axios.post(`http://localhost:4000/user/addressdbcheck`,action.data)
    
}

function* login(action){

    let result = yield call(loginAPI,action)

}

function* SellerAdminSaga(){
    const result = yield call(axios.post,`http://localhost:4000/user/selleradmin`)

        yield put({
            type:'SELLER_ADMIN_BACK',
            verify:true
        })        

    
}

function SignupAPI(action):any {
    return axios.post(`http://localhost:4000/user/signup`,JSON.stringify(action.data))
}

function* SignupSaga(action){
    const result = yield call(SignupAPI(action))

}

function* watchUser(){
    yield takeLatest('USER_LOGIN_REQUEST',login)
    yield takeLatest('SELLER_ADMIN_SUCCESS',SellerAdminSaga)
    yield takeLatest('SIGNUP_POST_SUCCESS',SignupSaga)
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}
