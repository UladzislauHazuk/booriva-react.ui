import style from './Basket.module.css'

function Basket() {
    return(
        <div className={style['wrapper']}>
            <div className={style['basket-header']}></div>
            <div className={style['basket']}>
                <div className={style['block']}>
                    <div className={style['model']}></div>
                    <div className={style['description']}>
                        <h3>Бомбер Gone Crazy хаки</h3>
                        <p className={style['size']}>S — M</p>
                        <p className={style['price']}>2 499 ₴</p>
                    </div>
                    <div className={style['delete']}></div>
                </div>
                <div className={style['block']}>
                    <div className={style['model']}></div>
                    <div className={style['description']}>
                        <h3>Бомбер Gone Crazy хаки</h3>
                        <p className={style['size']}>S — M</p>
                        <p className={style['price']}>2 499 ₴</p>
                    </div>
                    <div className={style['delete']}></div>
                </div>
                <div className={style['block']}>
                    <div className={style['model']}></div>
                    <div className={style['description']}>
                        <h3>Бомбер Gone Crazy хаки</h3>
                        <p className={style['size']}>S — M</p>
                        <p className={style['price']}>2 499 ₴</p>
                    </div>
                    <div className={style['delete']}></div>
                </div>
                <div className={style['block']}>
                    <div className={style['model']}></div>
                    <div className={style['description']}>
                        <h3>Бомбер Gone Crazy хаки</h3>
                        <p className={style['size']}>S — M</p>
                        <p className={style['price']}>2 499 ₴</p>
                    </div>
                    <div className={style['delete']}></div>
                </div>
                <div className={style['block']}>
                    <div className={style['model']}></div>
                    <div className={style['description']}>
                        <h3>Бомбер Gone Crazy хаки</h3>
                        <p className={style['size']}>S — M</p>
                        <p className={style['price']}>2 499 ₴</p>
                    </div>
                    <div className={style['delete']}></div>
                </div>
                <div className={style['block']}>
                    <div className={style['model']}></div>
                    <div className={style['description']}>
                        <h3>Бомбер Gone Crazy хаки</h3>
                        <p className={style['size']}>S — M</p>
                        <p className={style['price']}>2 499 ₴</p>
                    </div>
                    <div className={style['delete']}></div>
                </div>
            </div>
            <div className={style['total']}>
                <p className={style['quant']}>Всего: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>6 товаров</span></p>
                <p className={style['sum']}>Сумма заказа: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>5 000 ₴</span></p>
            </div>
            <div className={style['btn']}></div>
        </div>
    )
}

export default Basket