const {
    getProductsDB,
    getProductByIdDB,
    createProductDB,
    updateProductDB
} = require('../repository/products.repository');

const getProducts = async () => {
    const products = await getProductsDB();
    if (!products.length) throw new Error('Products is empty');
    return products;
}

const getProductById = async (id) => {
    const product = await getProductByIdDB(id);
    if (!product.length) throw new Error('Product is empty');
    return product;
}

const createProduct = async (title, price) => {
    const product = await createProductDB(title, price);
    if (!product.length) throw new Error('Products is empty');
    return product;
}

const updateProduct = async (id, title, price) => {
    const product = await updateProductDB(id, title, price);
    if (!product.length) throw new Error('Products is empty');
    return product;
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct
};