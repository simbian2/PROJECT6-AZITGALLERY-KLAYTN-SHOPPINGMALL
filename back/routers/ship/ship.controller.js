const {Orders} = require('../../models')

let get_shipinfo = async (req,res)=>{
    console.log(req)
    let result 
    const {orderer,receiver,phoneNum,address,postNumber,addressDetail,memo,inputStatus} = req.body
    let buyerAddress = address+addressDetail
    try{
        await Orders.create({
            total_price:55500,buyer:orderer,receiver:receiver,receiver_address:address,receiver_contact:phoneNum,order_num:1,final_order_state:true,memo:memo
        })
 
        // result = {
        //     result:'OK',
        //     msg:'배송정보입력 성공',
        //     shipdata
        // }
        // console.log(result.shipdata)
        // res.json(result)
    }catch(e){
        // console.log(e)
        // result = {
        //     result:'FAIL',
        //     mas:'배송정보입력 실패'
        // }
        // res.json(result)
    }   
}

let send_shipinfo = async (req,res)=>{
    
}


let get_deliveryinfo = async (req,res)=>{
    // item id 도 필요함
    const {selectDeliveryCompany, deliveryNum} = req.body
    console.log(req.body);
}

module.exports = {
    get_shipinfo,
    send_shipinfo,
    get_deliveryinfo
}