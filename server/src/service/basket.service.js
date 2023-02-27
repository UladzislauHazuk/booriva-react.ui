const {
    getBasketDB,
    getBasketByIdDB,
    createBasketDB, 
    deleteBasketDB
} = require('../repository/basket.repository');

const getBasket = async () => {
    return await getBasketDB();
}

async function getBasketById(product_id) {
    return await getBasketByIdDB(product_id);
}

const createBasket = async (product_id) => {
    return await createBasketDB(product_id);
}

const deleteBasket = async (product_id) => {
    return await deleteBasketDB(product_id);
}

module.exports = {
    getBasket,
    getBasketById,
    createBasket,
    deleteBasket
};