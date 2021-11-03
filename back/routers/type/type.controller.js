/*
    @ 전체 값 다 보내는 이유?
    판매에서 여성복 선택하는 경우
    판매에서 남성복 선택하는 경우
    두 가지 검색 조건이 있기 때문.
*/

/* 판매 경매 선택 */
let get_selltype = async (req,res)=>{
    // tabBtn = 1 : 판매 
    // tabBtn = 2 : 경매
    const{ tabBtn, genderSelect, select, search} = req.body

}

/* 카테고리 선택 */
let get_category = async (req,res)=>{
    // genderSelect = 0 미선택 1 여성복 2 남성복 3 아동복

    const{ tabBtn, genderSelect, select, search} = req.body

}

/* 상품 검색 */
let get_search = async (req,res)=>{
    const{ tabBtn, genderSelect, select, search} = req.body

}

/* 상품 정렬 - 최근발행 | 인기 많은 순 */
let get_sort = async (req,res)=>{
    // select = 최근 발행순 좋아요 순 선택
    // 4가지 경우의 수가 있음 
    // sell_likes, sell_recent, auction_likes, auciton_recent

    const{ tabBtn, genderSelect, select, search} = req.body
}

module.exports = {
    get_selltype,
    get_category,
    get_search,
    get_sort
}