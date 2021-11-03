import React, { useEffect, useState } from 'react'
import AddItemComponent from '../../components/item/AddItemComponent'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { itemInfo_REQUEST } from '../../reducers/item'
import { itemImageInfo_REQUEST } from '../../reducers/itemimage'

const addItem = () =>{
    // 남은 NTF 등록 횟수 -> 느낌상 삭제해야 할 컴포넌트 같음
    const [n, setN] = useState<number>(10)
    // 즉판/경매 여부(하위 컴포넌트로 옮겨도 무방할 느낌)
    const [ifSell, setifSell] = useState<boolean>(true)
    // 시간 연장 여부 옵션
    const [extension, setExtension] = useState<boolean>(true)
    // 서비스 이용약관과 개인정보 보호정책 동의 여부 배열(둘 다 true여야 진행됨)
    const [agreed, setAgreed] = useState<Array<boolean>>([false,false])
    // 파일 정보가 담기는 state
    const [file, setFile] = useState<Array<string>>([])
    // 미리보기 렌더링을 위한 state
    const [fileBase, setFileBase] = useState<Array<string>>([])
    // 단위 통화 (won/ether)
    const [currency, setCurrency] = useState<string>('won')
    // 즉판 선택 시 가격 주의: string으로 들어감; input text는 string으로 받기 때문
    // 나중에 필요 시 Number()를 통해 속성 변환 가능
    const [price, setPrice] = useState<string>('')
    // 등록 상품명
    const [name, setName] = useState<string>('')
    // 상품 설명란
    const [desc, setDesc] = useState<string>('')
    // 경매 옵션 선택 시 경매 시작가
    const [aucPrice, setAucPrice] = useState<string>('')
    // 경매 마감 시간
    const [aucTime, setAucTime] = useState<any>('')
    // 성별 및 아동에 따른 카테고리 분류
    const [itemType, setItemType] = useState<string>('female')
    
    //디스패치 선언
    const dispatch = useDispatch()
    
    
    // input에 대한 handlechange(각 컴포넌트에서 텍스트를 인자값으로 받아
    // 각 컴포넌트마다 인자값에 따라 다르게 응답한다
    function handleTxtChange(e:any, item:string){
        let {value} = e.target
        if(item == "file"){
            setFile(value)
        } else if(item == "price"){
            // isNaN의 결과값이 false인 경우는 숫자, true는 문자열 포함
            // 입력값에 따라 달라지는 것이지 string/integer와는 관계 없음. 
            if(isNaN(value)!==false){
                alert('숫자만 입력해주세요.')
                // 이유는 모르지만 value로 적으면 작동하지 않음(이하 나오는 경우도 동일)
                e.target.value=price
            }else {
            setPrice(value)
            }
        } else if(item == "name"){
            setName(value)
        } else if(item == "desc"){
            setDesc(value)
        } else if(item == "aucPrice"){
            if(isNaN(value)!==false){
                alert('숫자만 입력해주세요.')
                e.target.value=price
            }
            setAucPrice(value)
        } else if(item == "aucTime"){
            if(new Date(value)>new Date()){
                setAucTime(value)
            } else{
                alert('현재보다 과거의 시간으로 설정할 수 없습니다.')
                e.target.value = aucTime
            }
        }
    }

    // 파일 업로드 핸들링+미리보기 핸들링
    const fileChange = (e) => {
        let {files} = e.target
        if(files.length+file.length>10){ //추후 수정
            alert('한 번에 올릴 수 있는 파일 갯수는 최대 10개입니다.')
        } else{
            for(let i=0;i<files.length;i++){
                if (files[i]) {
                    setFile(newFile => [...newFile, files[i]])
                    let reader = new FileReader()
                    reader.readAsDataURL(files[i])
                    reader.onloadend = () => {
                        const base64 = reader.result
                        if (base64) {
                            let base64Sub = base64.toString()
                            setFileBase(imgBase64 => [...imgBase64, base64Sub])
                        }
                    }
                }
            }
        }
    }

    function deleteFile(key){
        if(confirm('정말 삭제하시겠습니까?')){
            let newFileArray = [...file]
            let newFileBaseArray = [...fileBase]
            newFileArray.splice(key,1)
            newFileBaseArray.splice(key,1)
            setFile(newFileArray)
            setFileBase(newFileBaseArray)
        } else{
            console.log('취소')
        }
    }

    const sellToggle = (value:boolean) => {
        setifSell(value)
    }

    const extensionToggle = (value:boolean) => {
        setExtension(value)
    }

    const ifAgreed = (value:number) => {
        if(value === 1){
            setAgreed([!agreed[0],agreed[1]])
        } else if(value === 2){
            setAgreed([agreed[0],!agreed[1]])
        }
    }

    const handleCurrency = (e) => {
        let {value} = e.target
            setCurrency(value)
    }

    const handleItemType = (e) => {
        let {value} = e.target
        console.log(value)
            setItemType(value)
    }

    const handleConfirm = () => {
        if(agreed[0] !== true || agreed[1] !== true){ //미동의시
            alert('모든 항목에 동의해주세요.')
            return false
        }
        else if((ifSell === true &&
                (name=='' || desc=='' || price == '' || itemType == '')) ||
                (ifSell === false &&
                (name=='' ||desc=='' ||aucPrice=='' ||aucTime=='' || itemType == ''))){
                alert('모든 칸을 입력해주세요.')
                return false
        } else if(file.length == 0 ){
                alert('파일을 첨부해주세요.')
                return false
        }else{
                return true
        }
    }

    const handleSubmit = async () => { 
        let data = {}
        if(ifSell == true){
            data = {price, currency, name, desc, itemType}
            // console.log(data,file)
            dispatch(itemInfo_REQUEST([data, file]))
            // dispatch(itemImageInfo_REQUEST(file))
        } else{
            data = {name, desc, aucPrice, currency, aucTime, extension, itemType}
            // console.log(data,file)
            dispatch(itemInfo_REQUEST([data, file]))
            // dispatch(itemImageInfo_REQUEST(file))
        }
    }


    const resetState = () => {
        window.location.reload() 
    }


    return(
        <AddItemComponent 
        // 상품 등록 페이지
        n = {n}
        // 판매/경매 컴포넌트용
        ifSell = {ifSell} 
        extension = {extension}
        sellToggle = {sellToggle}
        extensionToggle = {extensionToggle}
        // 동의란 컴포넌트용
        ifAgreed = {ifAgreed}
        //input onChange 위함
        handleTxtChange = {handleTxtChange}
        handleSubmit = {handleSubmit}
        handleConfirm = {handleConfirm}
        handleItemType = {handleItemType}
        fileChange = {fileChange}
        fileBase = {fileBase}
        handleCurrency = {handleCurrency}
        deleteFile = {deleteFile}
        // 발행 후 초기화
        resetState = {resetState}
        />

    )
}

export default addItem
