import Link from 'next/link';
import Styled from 'styled-components';
import Router from 'next/router';
import React,{useState} from 'react';
import { DonutLargeOutlined } from '@mui/icons-material';
import ModalBackground from './common/ModalBackground';



const RequireLogin = (props) => {



    return(
        <ModalBackground>
            <RequireLoginWrapper flag={props.flag}>
                <div><p>로그인이 필요합니다.</p></div>
                <div><p>계속하려면 로그인을 해주세요</p></div>
                <div>
                    <span onClick={props.openBtn}>취소</span>
                    <span onClick={props.loginOpenBtn}>로그인</span>
                </div>
            </RequireLoginWrapper>
        </ModalBackground>
    )
}

export default RequireLogin

const RequireLoginWrapper = Styled.div`
    box-sizing:border-box;
    width:350px;
    height:220px;
    border-radius:3%;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    display:${(props)=>(props.flag?"block":'none')};
    justify-content:center;
    text-align:center;
    padding-top:10px;
    position:absolute;
    align-items:center;
    background-color:white;
    margin: auto;
    top:30%;
    border: 1px solid black;
    padding: 30px;
    a{
        text-decoration:none;
        background-color:#1e73fa;
        color:white;
    }
    div:nth-child(1) p{
        font-weight:700;
        font-size:17.5px;
        padding-bottom:20px;
    }
    div:nth-child(2) p{
        font-size:14.5px;
        color:#6c757d;
        margin-bottom:35px;
    }
    div:nth-child(3){
        margin-top:15px;
        display:flex;
        justify-content:center;
    }
    div:nth-child(3)>span{
        width:110px;
        height:37px;
        margin-left:2px;
        margin-right:2px;
        border-radius:7%;
        line-height:35px;        
    }
    div:nth-child(3)>span:nth-child(1){
        background-color:#e1f0ff;
        color:#1e73fa;
        font-weight:500;

    }
    div:nth-child(3)>span:nth-child(2){
        background-color:#1e73fa;
        color:white;
        font-weight:500;
        
    }

`