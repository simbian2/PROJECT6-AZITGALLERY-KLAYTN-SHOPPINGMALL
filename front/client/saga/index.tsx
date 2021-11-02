import {all, fork} from 'redux-saga/effects'
import userSaga from './user'
import itemSaga from './item'
import mintSaga from './mint'
import shipSaga from './ship'
import typeSaga from './type'

export default function* rootSaga(){
    yield all([
       fork(userSaga),
       fork(itemSaga),
       fork(mintSaga),
       fork(shipSaga),
       fork(typeSaga)
    ])
}