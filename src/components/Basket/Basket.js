import basket from '../../context/basket'
import style from './Basket.module.css'
import ProductItem from './ProductItem'
import { getCount, getSumma } from './CalculateBasket'

function Basket() {
    return(
        <div className={style['wrapper']}>
            <div className={style['basket-header']}></div>
            <div className={style['basket']}>
                {basket.map(el => <ProductItem name={el.name} price={el.price} path={el.path}/>)}
            </div>
            <div className={style['total']}>
                <p className={style['quant']}>Всего: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>{getCount()}</span></p>
                <p className={style['sum']}>Сумма заказа: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>{getSumma()} ₴</span></p>
            </div>
            <div className={style['btn']}></div>
        </div>
    )
}

export default Basket