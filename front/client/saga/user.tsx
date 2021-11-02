import axios from 'axios';
import {all,put,takeEvery,takeLatest,fork,call} from "redux-saga/effects";

function loginAPI(data){
    return axios.post(``,data,{ withCredentials: true })
    
}

function* login(action){

    let result = yield call(loginAPI,action)

    if (result.login_info == undefined) {
                yield put({
                    type: 'USER_LOGIN_SUCCESS',
                    data:result,
                    test:result,
                    user_info:result,
                    UserAddress:result
                })
            } else {
                yield put({
                    type: 'USER_LOGIN_ERROR',
                    data: '아이디와 비밀번호를 확인해주세요',
                    result
                })
            }
    
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
