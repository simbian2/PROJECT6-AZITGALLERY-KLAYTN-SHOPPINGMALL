const Sequelize = require('sequelize')
const moment = require('moment')

// 추후 상품id 추가할 것
module.exports = class Item extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            itemId:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            creator:{
                type:Sequelize.TEXT,
                allowNull:false
            },
            title:{
                type:Sequelize.STRING(100),
            },
            price:{
                type:Sequelize.INTEGER(30),
                allowNull:false,
            },
            dueDate:{
                type:Sequelize.DATE,
                allowNull:false,
            },
            registeredAt:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get(){
                    return moment(this.getDataValue('date')).format('Y-M-D')
                }
            },
            itemImg:{
                type:Sequelize.TEXT,
            },
            description:{
                type:Sequelize.TEXT,
            },
            itemNft:{
                type:Sequelize.STRING(100),
            },
            count:{
                type:Sequelize.INTEGER
            },
            likeCount:{
                type:Sequelize.INTEGER
            },
            sellType:{
                type:Sequelize.BOOLEAN,
                defaultValue:false,
                comment:'판매경매여부 false->판매 true->경매'
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Item',
            tableName:'Item',
            charset:'utf8',
            collate:'utf8_general_ci'
        }) 
    }
    static associate(db){
        db.Item.belongsTo(db.User,{foreignKey:'itemId',targetKey:'id'})
    }

}
