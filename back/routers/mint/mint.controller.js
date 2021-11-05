
  //https://baobab.scope.klaytn.com/account/0xdfaf037869bb807239e8c46d3b3472ac72adbaef?tabId=txList
const option = {
    headers: [
      {
        name: "Authorization",
        //https://console.klaytnapi.com/ko/security/credential 여기서 발급
        value: "Basic " + Buffer.from("KASKIQX7OFKY5O7JUNTN9FOK" + ":" + "7rpDsRRxYvHYIeS42bNtT2TAtfAQ9tRBC9mf6bst").toString("base64"),
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
    "0xc9d0a75a731352903d580324f06328e1d1e2fe5366874babfeccd9b4ca2b7c39"
  );
  // wallet에 keyring이 추가되지 않은 경우에만 keyring을 추가합니다.
  if (!caver.wallet.getKeyring(keyring.address)) {
    const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
      "0xc9d0a75a731352903d580324f06328e1d1e2fe5366874babfeccd9b4ca2b7c39"
    );
    caver.wallet.add(singleKeyRing);
  }
  // 넘어온 데이터를 바탕으로 새로운 KIP-17을 배포(=새로운 명품 등록)합니다. 
  const kip17 = await caver.kct.kip17.deploy(
    {
      name: 'LOLOJOUAI',
      symbol: 'FEV',
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
         "0x16608291c8073c259f09a847d60ccb5cd528d29c",
         randomTokenID,
         tokenURI,
         { from: keyring.address }
       );
       console.log(mintResult)
     }
}



let KIP7Token_transfer = async () => {

  // 해당 토큰으로 구매하기

  const keyring = caver.wallet.keyring.createFromPrivateKey(
    "0x05093921499b3e0c2c50e4b62d0b472ca371bd83c3769218526635ac17980080"
  );
  // wallet에 keyring이 추가되지 않은 경우에만 keyring을 추가합니다.
  // 자기 것의 개인키를 keyring 시키고
  if (!caver.wallet.getKeyring(keyring.address)) {
    const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
      "0x05093921499b3e0c2c50e4b62d0b472ca371bd83c3769218526635ac17980080"
    );
    caver.wallet.add(singleKeyRing);
  }

  const kip7Instance = new caver.kct.kip7('0x8555e430D2DAd1A720Bb198eC24a5A8aC23fA7bE')
  kip7Instance.name().then(console.log)
  const opts = { from: keyring.address }
  //보낼 account 주소를 입력 시키기
  const recipientAddress = '0xadbEC8669bbfBd1481aaD736f98De590d37b26Ce'
  const value = 10000000000
  const receipt = await kip7Instance.transfer(recipientAddress, value, opts)
  console.log(receipt)



  // 구매 완료 후 nft transfer

  let senderPrivateKey = "0xc9d0a75a731352903d580324f06328e1d1e2fe5366874babfeccd9b4ca2b7c39";
  const senderKeyring = caver.wallet.keyring.createFromPrivateKey(
    senderPrivateKey
  );
  // wallet에 keyring이 추가되지 않은 경우에만 keyring을 추가합니다.
  if (!caver.wallet.getKeyring(senderKeyring.address)) {
    const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
      senderPrivateKey
    );
    caver.wallet.add(singleKeyRing);
  }

    let contractAddr = "0x07b12b3721b9e3cc6e028051c872b62e279b92e4";

        const KIP_17 = new caver.kct.kip17(contractAddr);

        transferResult = await KIP_17.transferFrom(
          senderKeyring.address,
          "0xc80cf577fde0e03a811f841e19e082bfd53689b6",
          5271322132234717,
          { from: senderKeyring.address, gas: 200000 }
        );
        console.log(transferResult);
    

}

let kipswap_post = async () => {

  const keyring = caver.wallet.keyring.createFromPrivateKey(
    "0xd6e223fa53d08f3b9b26a914c4bfffa4e0867d74fe1fdbbdf3f5e2b45f109405"
  );
  // wallet에 keyring이 추가되지 않은 경우에만 keyring을 추가합니다.
  // 자기 것의 개인키를 keyring 시키고
  if (!caver.wallet.getKeyring(keyring.address)) {
    const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
      "0xd6e223fa53d08f3b9b26a914c4bfffa4e0867d74fe1fdbbdf3f5e2b45f109405"
    );
    caver.wallet.add(singleKeyRing);
  }

  const kip7Instance = new caver.kct.kip7('0x8555e430d2dad1a720bb198ec24a5a8ac23fa7be')
  kip7Instance.name().then(console.log)
  const opts = { from: keyring.address }
  //보낼 account 주소를 입력 시키기
  const recipientAddress = '0x7a237f4050Ae92cEd73576f4585B04c05178BdD3'
  const value = 100000000000000000000
  const receipt = await kip7Instance.transfer(recipientAddress, value, opts)
  console.log(receipt)
}
module.exports = {
    mint_nft_post,
    KIP7Token_transfer,
    kipswap_post
}