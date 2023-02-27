const express = require('express');
const {
    getBasket,
    getBasketById,
    createBasket,
    deleteBasket
} = require('../service/basket.service')

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const products = await getBasket();
        console.log(products);
        res.status(200).send(products);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.get('/:product_id', async (req, res) => {
    try {
        const { product_id } = req.params;
        const products = await getBasketById(product_id);
        res.status(200).send(products)
    } catch (error) {
        res.status(404).send(error.message)
    }
});

route.post('/:product_id', async (req, res) => {
    try {
        const {
            product_id
        } = req.params;
        const product = await createBasket(product_id);
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send(error.message)
    }
});

route.delete('/:product_id', async (req, res) => {
    try {
        const {
            product_id
        } = req.params;
        const product = await deleteBasket(product_id);
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send(error.message)
    }
});

module.exports = route;