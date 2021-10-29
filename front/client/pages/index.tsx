import React, { useState } from "react";
import Head from "next/head";
import ItemList from '../components/list/ItemList'
import Link from 'next/link'

export default function Home() {

  const TOKEN = ()=> {
    window.caver.klay.KIP7.deploy({
      name: 'HONGDAE',
      symbol: 'HONG',
      decimals: 18,
      initialSupply: '10000000000000000000000',
    }, '0xF2e88e4A35bBCa55d5d47D2357DefC3eD16CA830')
    .on('error', function(error) { console.log(error) })
    .on('transactionHash', function(transactionHash) { console.log(transactionHash)})
    .on('receipt', function(receipt) {
        console.log(receipt.contractAddress) // contains the new token contract address
    })
    .then(function(newKIP7Instance) {
        console.log(newKIP7Instance.options.address) // instance with the new token contract address
    })
  }

  return (
    <>
    <div className="container">
      <div>
        <div onClick = {TOKEN}>토큰 임시</div>
        <div><ItemList /></div>
      </div>
    </div>
    </>
  );
}