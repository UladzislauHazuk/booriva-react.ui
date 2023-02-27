import style from './Products.module.css'
import ProductItem from './ProductItem';
// import products from '../../storage/products';
import {useState, useEffect} from 'react';
import axios from 'axios';


function Products() {
    const [products, setProducts] = useState([]);

    async function getAllProducts() {
        const response = await axios.get('/products');
        console.log(response);
        setProducts(response.data);
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return(
        <div className={style['wrapper']}>
            <div className={style['category-header']}></div>
            <div className={style['list']}>
                {products ? products.map(el => <ProductItem key={el.id} id={el.id} title={el.title} price={el.price} />) : null}
            </div>
        </div>
    )
}

export default Products