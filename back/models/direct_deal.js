const Sequelize = require('sequelize')

module.exports = class DirectDeal extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            direct_deal_idx:{
                type:Sequelize.INTEGER,
            },
            item_code : {
                type:Sequelize.STRING(100),
            },
            bid_price:{
                type:Sequelize.STRING(20),
            },
            start_date:{
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
                get:function(){
                    return moment(this.getDataValue('date')).format('YYYY-MM-DD-hh-mm-dd')
                }     
            }               
        },{
            sequelize,
            timestamps:true,
            modelName:'DirectDeal',
            tableName:'directdeal',
            paranoid:true,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){

    }
}