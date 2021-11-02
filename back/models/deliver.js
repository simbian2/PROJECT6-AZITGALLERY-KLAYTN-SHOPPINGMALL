const Sequelize = require('sequelize')

module.exports = class Deliver extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            item_nft:{
                type:Sequelize.TEXT,
            },
            orderer:{
                type:Sequelize.STRING,
                comment:'주문자'
            },
            receiver:{
                type:Sequelize.STRING,
                comment:'수령인'
            },
            receiver_address:{
                type:Sequelize.TEXT,
                comment:'수령인주소'
            },
            seller_contact:{
                type:Sequelize.STRING,
                comment:'판매자연락처'
            },
            buyer_contact:{
                type:Sequelize.INTEGER,
                comment:'구매자연락처'
            },
            post_num:{
                type:Sequelize.INTEGER,
                comment:'송장번호'
            },
            memo:{
                type:Sequelize.TEXT
            },
            input_status:{
                type:Sequelize.STRING,
                comment:'배송방법'
            },
            deliver_state:{
                type:Sequelize.STRING,
                comment:'배송상황'
            },
            deliver_company:{
                type:Sequelize.STRING,
                comment:'배송회사'
            }

        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Deliver',
            tableName:'deliver',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Deliver.belongsTo(db.Nft,{foreignKey:'nft_idx',targetKey:'id'})
    }

}