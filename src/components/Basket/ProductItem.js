import style from './Basket.module.css'

function ProductItem({name, price,path}) {
    return(
        <>
            <div className={style['block']}>
                
                <div className={style['model']}>
                    <img alt={name} className={style['model']} src={require(`../../storage/assets/${path}`)}></img>
                </div>
                <div className={style['description']}>
                    <h3>{name}</h3>
                    <p className={style['size']}>S — M</p>
                    <p className={style['price']}>{price}</p>
                </div>
                <div className={style['delete']}></div>
            </div>
        </>
    )
}

export default ProductItem