const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            email:{
                type:Sequelize.STRING(50),
                unique:true,
            },
            kaikasAddress:{
                type:Sequelize.TEXT,
                allowNull:false,
            },
            createdAt:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW
            },
            buyItemNft:{
                type:Sequelize.TEXT,
            },
            likedItem:{
                type:Sequelize.TEXT,               
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'User',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.User.hasMany(db.Item,{foreignKey:'itemId',sourceKey:'id'})
    }
}