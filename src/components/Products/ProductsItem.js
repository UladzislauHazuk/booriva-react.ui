import style from './Products.module.css'

function ProductsItem({image, line, title, price, dislike}) {
    return(
        <div className={style['block']}>
            <div className={style[image]}></div>
            <div className={style[line]}></div>
            <div className={style['description']}>
                <p className={style['title']}>{title}</p>
                <p className={style['price']}>{price}</p>
            </div>
            <div className={style[dislike]}></div>
        </div>
    )
}

export default ProductsItem