import React, { useEffect, useState } from 'react'
import AddItemComponent from '../../components/item/AddItemComponent'
import axios from 'axios'
import {url} from '../../saga/url'

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
    // 색상 배열
    const [color, setColor] = useState<Array<string>>([])
    // 색상 입력값
    const [colorVal, setColorVal] = useState<string>('')
    //사이즈 배열
    const [size, setSize] = useState<Array<string>>([])
    // 사이즈 입력값
    const [sizeVal, setSizeVal] = useState<string>('')
   
    
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
    const fileChange = (e:any) => {
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

    // 등록된 파일 삭제하는 핸들러
    function deleteFile(key:number){
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

    // 직판/경매 선택
    const sellToggle = (value:boolean) => {
        setifSell(value)
    }

    // 경매 선택 시 연장 여부 선택
    const extensionToggle = (value:boolean) => {
        setExtension(value)
    }

    // 동의 항목 관련
    const ifAgreed = (value:number) => {
        if(value === 1){
            setAgreed([!agreed[0],agreed[1]])
        } else if(value === 2){
            setAgreed([agreed[0],!agreed[1]])
        }
    }

    // 통화 선택
    const handleCurrency = (e:any) => {
        let {value} = e.target
            setCurrency(value)
    }

    // 옷 카테고리 선택
    const handleItemType = (e:any) => {
        let {value} = e.target
            setItemType(value)
    }

    // 사이즈, 컬러에 대한 onChange
    function handleTags(e:any, item:string){
        let {value} = e.target
        // 특수문자(띄어쓰기 포함) 제외
        let chkLetters = /[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
        // 입력된 값을 한자 한자 쪼개서 하나라도 특수문자가 있으면 false 리턴
        function handleChk(txt){
            let text = txt.split('')
            let arr = []
            text.forEach(x=>{
                arr.push(chkLetters.test(x))
            })
            let chk
            arr.find(ele=>{
                if(ele==false){
                    chk = false
                } else{ chk = true}
            })
            return chk
        }

        // 컬러와 사이즈에서 입력받은 각각의 경우에 대해
        // 위의 유효성검사 함수 실행, false 리턴받으면 경고메시지 표출
        // 및 해당 값 밸류를 직전 state로 회귀시킴
        if(item == 'color'){
            if(handleChk(value) === false){
                alert('특수문자와 띄어쓰기 없이 입력해 주세요.')
                e.target.value = colorVal
            } else{
                setColorVal(value)
            }
        } else if(item == 'size'){
            if(handleChk(value) === false){
                alert('특수문자와 띄어쓰기 없이 입력해 주세요.')
                e.target.value = sizeVal
            } else{
                setSizeVal(value)
            }
        }
    }

    // 엔터 누르면 등록되게 하는 함수
    function handleKeyPress(e:any, item:string){
        // 빈칸일 때 작동하지 않도록 설정
        if(colorVal !== '' && item == 'color' && e.key === 'Enter'){
            let newColor = [...color]
            newColor.push(colorVal)
            setColor(newColor)
            setColorVal('')
        } else if(sizeVal !== '' && item == 'size' && e.key === 'Enter'){
            let newSize = [...size]
            newSize.push(sizeVal)
            setSize(newSize)
            setSizeVal('')
        }
    }

    function deleteItem(key:number, item:string){
        if(item == "color"){
            let newColorArray = [...color]
            newColorArray.splice(key,1)
            setColor(newColorArray)
        } else if(item == "size"){
            let newSizeArray = [...size]
            newSizeArray.splice(key,1)
            setSize(newSizeArray)
        }
    }

    // 모든 value 최종 submit 전, 미입력 항목이 있는지 검증(nft관련 팝업 전 단계)
    const handleConfirm = () => {
        if(agreed[0] !== true || agreed[1] !== true){ //미동의시
            alert('모든 항목에 동의해주세요.')
            return false
        }
        else if((ifSell === true &&
                (name=='' || desc=='' || price == '' || itemType == '' ||
                color.length == 0 || size.length == 0)) ||
                (ifSell === false &&
                (name=='' ||desc=='' ||aucPrice=='' ||aucTime=='' || itemType == '' ||
                color.length == 0 || size.length == 0))){
                alert('모든 칸을 입력해주세요.')
                return false
        } else if(file.length == 0 ){
                alert('파일을 첨부해주세요.')
                return false
        }else{
                return true
        }
    }

    // 최종 밸류 submit, nft 팝업에서 예 누른 이후
    const handleSubmit = async () => { 
        let data = {}
        if(ifSell == true){
            data = {price, currency, name, desc, itemType, color, size}

            sendDataToServer([data,file])
        } else{
            data = {name, desc, aucPrice, currency, aucTime, extension, itemType, color, size}

            sendDataToServer([data,file])
        }
    }

    function sendDataToServer(data:Array<any>){
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
            let result = axios.post(`${url}/item/uploaddata`,[data[0],fileArr])
        })
    }

    // 새 NFT발행 시 그냥 새로고침
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
        handleTags = {handleTags}
        color = {color}
        size = {size}
        colorVal = {colorVal}
        sizeVal  = {sizeVal}
        deleteItem = {deleteItem}
        // enter key event 위함
        handleKeyPress = {handleKeyPress}
        // 파일 삭제용 핸들러
        deleteFile = {deleteFile}
        // 발행 후 초기화
        resetState = {resetState}
        />

    )
}

export default addItem
