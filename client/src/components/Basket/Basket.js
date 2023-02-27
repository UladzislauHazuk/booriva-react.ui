import basket from '../../context/basket'
import style from './Basket.module.css'
import ProductItem from './ProductItem'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Basket() {
    const [arrayBasket, setArrayBasket] = useState([]);

    async function getBasketProducts() {
        try {
            const response = await axios.get('/basket');
            console.log(response.data);
            setArrayBasket(response.data);
        } catch (error) {
            alert(error.message);
        }
        
    }

    useEffect(() => {
        getBasketProducts()
    }, [])

    function getCount() {
        let count = 0
        if (basket.length === 1) {
            count = `${arrayBasket.length} товар`
        } else if (basket.length === 2 || basket.length === 3 || basket.length === 4) {
            count = `${arrayBasket.length} товара`
        } else {
            count = `${arrayBasket.length} товаров`
        }
        return count
    }
    
    function getSumma() {
        let sum = arrayBasket.reduce(function (sum, elem) {
            return sum + elem.price
        }, 0)
        return sum
    }

    return(
        <div className={style['wrapper']}>
            <div className={style['basket-header']}></div>
            <div className={style['basket']}>
                {arrayBasket.map(el => <ProductItem key={Math.random()} id={el.id} title={el.title} price={el.price} setArrayBasket={setArrayBasket}/>)}
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