import {all, fork} from 'redux-saga/effects'
import userSaga from './user'
import itemSaga from './item'
import mintSaga from './mint'
import shipSaga from './ship'

export default function* rootSaga(){
    yield all([
       fork(userSaga),
       fork(itemSaga),
       fork(mintSaga),
       fork(shipSaga)
    ])
}