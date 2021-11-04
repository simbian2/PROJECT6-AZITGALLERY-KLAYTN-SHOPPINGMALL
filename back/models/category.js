const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            category_idx:{
                type:Sequelize.INTEGER,
                allowNull:false,
                unique:true
            },
            item_code:{
                type:Sequelize.STRING(50),
                unique:true,
            },
            gender:{
                type:Sequelize.TEXT,
                allowNull:false,
            },
            season:{
                type:Sequelize.BOOLEAN,
                defaultValue:false
            },
            age:{
                type:Sequelize.BOOLEAN,
                defaultValue:false
            },
            item_classification:{
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

    }
}