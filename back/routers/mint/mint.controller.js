const { kasKip17Mint } = require('../../kas/kip17');

let mint_nft_post = async (req,res) => {

    var r = await kasKip17Mint('sellerid', 'sellerIMG', 'sellerBrand')

}

module.exports = {
    mint_nft_post
}