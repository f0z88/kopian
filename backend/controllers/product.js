const Product = require('../models/product');

const allProducts = async(req, res) => {
    try {
        const products =await Product.find({})
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    allProducts
};
