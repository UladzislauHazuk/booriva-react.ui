import style from './Products.module.css'
import ProductItem from './ProductItem';
import products from '../../storage/products';

function Products() {

    return(
        <div className={style['wrapper']}>
            <div className={style['category-header']}></div>
            <div className={style['list']}>
                {products.map(el => <ProductItem path={el.path} line={el.line} name={el.name} price={el.price} dislike={el.dislike} />)}
            </div>
        </div>
    )
}

export default Products