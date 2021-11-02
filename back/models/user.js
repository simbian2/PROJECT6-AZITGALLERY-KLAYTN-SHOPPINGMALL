const Sequelize = require('sequelize');
const moment = require('moment');
const { get } = require('http');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(30),
                allowNull:false,
                unique:true
            },
            email:{
                type:Sequelize.STRING(50),
                unique:true,
            },
            kaikas_address:{
                type:Sequelize.TEXT,
                allowNull:false,
            },
            // createdAt:{
            //     type:Sequelize.DATE,
            //     allowNull:false,
            //     defaultValue:Sequelize.NOW,
            //     get: function(){
            //         return moment(this.getDataValue('createdAt')).format('Y-M-D')
            //     }
            // },
            kyc_authorized:{
                type:Sequelize.BOOLEAN,
                defaultValue:false
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'user',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.User.hasMany(db.Item,{foreignKey:'creator',sourceKey:'name'}),
        db.User.hasMany(db.BuyList,{foreignKey:'buy_idx',sourceKey:'id'}),
        db.User.hasMany(db.LikeList,{foreignKey:'like_idx',sourceKey:'id'})
        
    }
}