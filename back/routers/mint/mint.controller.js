
  //https://baobab.scope.klaytn.com/account/0xdfaf037869bb807239e8c46d3b3472ac72adbaef?tabId=txList
const option = {
    headers: [
      {
        name: "Authorization",
        //https://console.klaytnapi.com/ko/security/credential 여기서 발급
        value: "Basic " + Buffer.from("KASKO8L5YVANYDCJCCJQTP9O" + ":" + "1AWRoCVSrAOo7yem0Iasw6HVdAezIryaSyb5Nx6q").toString("base64"),
      },
      { name: "x-krn", value: "krn:1001:node" },
    ],
  };
  
  const Caver = require("caver-js");
  const caver = new Caver(
    new Caver.providers.HttpProvider(
      "https://node-api.klaytnapi.com/v1/klaytn",
      option
    )
  );

let mint_nft_post = async (req,res) => {
    console.log('NFT')

  // 개인키를 바탕으로 keyring을 생성합니다.
  // https://baobab.wallet.klaytn.com/access/0xdfaf037869bb807239e8c46d3b3472ac72adbaef 여기서 
  // keyring에 대한 자세한 내용은 https://ko.docs.klaytn.com/bapp/sdk/Caver-js/api-references/Caver.wallet/keyring 를 참고하세요.
  // https://baobab.wallet.klaytn.com/access/0xdfaf037869bb807239e8c46d3b3472ac72adbaef  개인키
  const keyring = caver.wallet.keyring.createFromPrivateKey(
    "0xe6a9e4196395649db04d4691700e0e20a9bd9f1c162d1bbb230c4e0b7383674f"
  );
  // wallet에 keyring이 추가되지 않은 경우에만 keyring을 추가합니다.
  if (!caver.wallet.getKeyring(keyring.address)) {
    const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
        "0xe6a9e4196395649db04d4691700e0e20a9bd9f1c162d1bbb230c4e0b7383674f"
    );
    caver.wallet.add(singleKeyRing);
  }
  // 넘어온 데이터를 바탕으로 새로운 KIP-17을 배포(=새로운 명품 등록)합니다. 
  const kip17 = await caver.kct.kip17.deploy(
    {
      name: 'DJDJDJ',
      symbol: 'dd',
    },
    keyring.address
  );
//   console.log(kip17)
  console.log(kip17.options.address);

   // 컨트랙트 주소 기반으로 KIP-17 오브젝트를 생성합니다.
   const kip_17 = new caver.kct.kip17(kip17.options.address);
   // 새로 발행하는 토큰에 임의의 tokenId를 할당하기 위해 Math.random 사용 및 중복 여부를 체크합니다.

     randomTokenID = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

     try {
       owner = await kip_17.ownerOf(randomTokenID);
     } catch (e) {
       // owner가 존재하지 않는 경우(=존재하지 않는 tokenID) 에러가 리턴됩니다.
       // 에러를 받으면 해당 tokenID로 토큰 생성이 가능합니다.
       console.log("we can mint");
       // tokenURI에는 임의의 정보를 넣어줄 수 있습니다.
       // 본 예제에서는 임의의 sellerID와 productID를 json 형태로 저장합니다.
       // 토큰 이미지 URL이나 기타 정보를 tokenURI에 저장할 수 있습니다.
       tokenURI = JSON.stringify({
         sellerID: 0,
         productID: 'dafdsfdsf',
       });
       // KIP-17.mintWithTokenURI를 이용해서 새로운 토큰을 발행합니다.
       // 자세한 내용은 https://ko.docs.klaytn.com/bapp/sdk/caver-js/api-references/caver.kct/KIP-17#KIP-17-mintwithtokenuri 를 참고하세요.
       mintResult = await kip_17.mintWithTokenURI(
        // https://baobab.wallet.klaytn.com/access/0xdfaf037869bb807239e8c46d3b3472ac72adbaef  account주소를 넣는다
         "0xf2e88e4a35bbca55d5d47d2357defc3ed16ca830",
         randomTokenID,
         tokenURI,
         { from: keyring.address }
       );
       console.log(mintResult)
     }

}



let KIP7Token_transfer = () => {


  const kip7Instance = new caver.klay.KIP7(0x686a97f78cd29b0a6f3e23d4dcd41604ff4e2913)
  kip7Instance.transfer('0xF2e88e4A35bBCa55d5d47D2357DefC3eD16CA830', 10000, { from: '0x04c8A80f860dB5F84dC6e8a3c0cFae516c80e4DF' }).then(console.log)
  console.log(kip7Instance)
  console.log('transfer')
  
}
module.exports = {
    mint_nft_post,
    KIP7Token_transfer
}