import axios from 'axios';
import {all,put,takeLatest,fork,call} from "redux-saga/effects";
import {url} from './url'

function itemImageAPI(data){
    data.map(async (items)=>{
        // get secure url form the server
        const response = await fetch(`${url}/item/uploadpics`)
        const { link } = await response.json()
        //post the image directly to the s3 bucket
        let result = await fetch(link, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: items
        })
        const imageURL = link.split('?')[0];
        console.log(imageURL)
        return await axios.post(`${url}/item/uploadpics`,{data:imageURL})
    })

}

function* itemImageInfo(action){
    // console.log(action.data);
    
    const result = yield call(itemImageAPI, action.data)

    // yield put({
    //     type:'MINT_NFT_RETURN',
    //     verify:5000
    // })  
}

function* reqItemImage(){
    yield takeLatest('ITEMIMAGEINFO_INSERT_REQUEST',itemImageInfo)
}

export default function* itemSaga(){
    yield all([
        fork(reqItemImage)
    ])
}
