/* 판매 경매 선택 */
let get_selltype = async (req,res)=>{
    // 1 : 판매 
    // 2 : 경매

    console.log("판매경매 ===",req.body);
}

/* 카테고리 선택 */
let get_category = async (req,res)=>{
    // 0 미선택 1 여성복 2 남성복 3 아동복

    console.log("카테고리 ===",req.body);

}

/* 상품 검색 */
let get_search = async (req,res)=>{
    console.log("서치 ===",req.body);

}

/* 상품 정렬 - 최근발행 | 인기 많은 순 */
let get_sort = async (req,res)=>{
    // 최근 발행순 좋아요 순 선택
    console.log("상품정렬 ===",req.body);

}

module.exports = {
    get_selltype,
    get_category,
    get_search,
    get_sort
}