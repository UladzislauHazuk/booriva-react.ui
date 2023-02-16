import style from './Products.module.css'
import basket from '../../context/basket'

function ProductItem({path, line, name, price}) {
    function addToBasket() {
        basket.push({name, price, path})
    }

    return(
        <div className={style['block']}>
            <img alt={name} className={style['image']} src={require(`../../storage/assets/${path}`)}></img>
            <div className={style[line]}></div>
            <div className={style['description']}>
                <p className={style['name']}>{name}</p>
                <p className={style['price']}>{price} ₴</p>
            </div>
            <div onClick={addToBasket} className={style['dislike']}></div>
        </div>
    )
}

export default ProductItem