import axios from 'axios';
import {all,put,takeLatest,fork,call} from "redux-saga/effects";
import {url} from './url'

async function itemAPI(data){
    console.log(data)
    // let fileArray = new Array
    let thisarray = new Array
    let fileArray = data[1].map(async (items)=>{
        // get secure url form the server
        const response = await fetch(`${url}/item/uploadpics`)
        const { link } = await response.json()
        //post the image directly to the s3 bucket
        await fetch(link, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: items
        })
        const imageURL = link.split('?')[0];
        // console.log(imageURL)
        //fileArray.push(imageURL)
        return imageURL
        // return await axios.post(`${url}/item/uploadpics`,{data:imageURL})
    })
    console.log(thisarray)

    let result = await axios.post(`${url}/item/uploaddata`,fileArray)
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
