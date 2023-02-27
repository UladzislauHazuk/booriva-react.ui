import style from './Preview.module.css'

function PriceItem({image, price, title}) {
    return(
        <div className={style['block-price-wrapper']}>
            <div className={style[image]}></div>
            <p className={style['price']}>{price}</p>
            <p className={style['title']}>{title}</p>
        </div>
    )
}

export default PriceItem