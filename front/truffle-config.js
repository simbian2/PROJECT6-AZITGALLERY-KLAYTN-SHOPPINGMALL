module.exports = {
    networks: {
        baobab: {
            host: '127.0.0.1',
            port: 8651,
            from: '0x5865EEE986Aa06deA32907ED4Ac05A654b9a3eEd', // 계정 주소를 입력하세요
            network_id: '1001', // Baobab 네트워크 id
            gas: 20000000, // 트랜잭션 가스 한도
            gasPrice: 25000000000, // Baobab의 gasPrice는 25 Gpeb입니다
        },
    },
    compilers: {
      solc: {
        version: "0.5.6"    // 컴파일러 버전을 0.5.6로 설정합니다
      }
  }
};