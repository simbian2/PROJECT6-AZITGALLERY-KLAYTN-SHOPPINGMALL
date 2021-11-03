import axios from 'axios';
import {all,put,takeLatest,fork,call} from "redux-saga/effects";
import {url} from './url'

async function itemAPI(data){
    // s3에서 리턴받은 주소를 넣을 배열
    let fileArr = []
    // 이미지를 배열에 넣는 함수
    async function putImagesLink(){
        // data[1]의 파일들을 s3에 각각 올리고 업로드 주소값을 받아 배열에 넣는다
        let fileArray = data[1].map(async (items)=>{
            const response = await fetch(`${url}/item/uploadpics`)
            const { link } = await response.json()
            await fetch(link, {
                method: "PUT",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: items
            })
            const imageURL = link.split('?')[0];
            fileArr.push(imageURL)
        })
        // 모든 파일에 대해 값을 받아온 뒤 시행한다
        await Promise.all(fileArray)
    }
    
    // then으로 강제로 await을 시켜 전송
    putImagesLink().then(x=>{
        let result =  axios.post(`${url}/item/uploaddata`,[data[0],fileArr])
    })

}

function* itemInfo(action){
    const result = yield call(itemAPI, action.data)
}

function* reqItem(){
    yield takeLatest('ITEMINFO_INSERT_REQUEST',itemInfo)
}

export default function* itemSaga(){
    yield all([
        fork(reqItem)
    ])
}
