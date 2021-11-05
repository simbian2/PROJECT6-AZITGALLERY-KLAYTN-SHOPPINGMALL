const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = class Category extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            category_idx:{
                type:Sequelize.INTEGER,
                allowNull:false,
                unique:true
            },
            main_category_code:{
                type:Sequelize.INTEGER,
            },
            item_classification:{
                type:Sequelize.STRING(30),
            },
            category_name:{
                type:Sequelize.STRING(20),
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Category',
            tableName:'category',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){

    }
}