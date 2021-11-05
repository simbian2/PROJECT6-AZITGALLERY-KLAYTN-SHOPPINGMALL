const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class ShipInfo extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            delivery_company:{
                type:Sequelize.STRING(30),
            },
            post_num:{
                type:Sequelize.STRING(30),      
                // 운송장 번호에서 - 같은게 들어있을 수도 있어서 이렇게 처리합니다.
            },
            order_num:{
                type:Sequelize.STRING(100),
            },
            item_delivery_state:{
                type:Sequelize.STRING(20),      // 배송준비중, 배송중, 배송완료
            },
        },{
            sequelize,
            timestamps:false,
            modelName:'ShipInfo',
            tableName:'shipinfo',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){

    }
}