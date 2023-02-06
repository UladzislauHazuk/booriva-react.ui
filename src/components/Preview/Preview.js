import style from './Preview.module.css'

function Preview() {
    return(
        <>
            <div className={style['img-news']}></div>
            <div className={style['price-wrapper']}>
                <div className={style['block-price-wrapper']}>
                    <div className={style['img-clothes-1']}></div>
                    <p className={style['price']}>1 099 ₴</p>
                    <p className={style['title']}>Cвитшот вставка клетка</p>
                </div>
                <div className={style['block-price-wrapper']}>
                    <div className={style['img-clothes-2']}></div>
                    <p className={style['price']}>1 299 ₴</p>
                    <p className={style['title']}>Платье прозрачное в цветочек черное</p>
                </div>
                <div className={style['block-price-wrapper']}>
                    <div className={style['img-clothes-3']}></div>
                    <p className={style['price']}>2 499 ₴</p>
                    <p className={style['title']}>Бомбер Gone Crazy хаки</p>
                </div>
                <div className={style['block-price-wrapper']}>
                    <div className={style['img-clothes-4']}></div>
                    <p className={style['price']}>899 ₴</p>
                    <p className={style['title']}>Платье-футболка рыбы в аквариуме</p>
                </div>
            </div>
            <div className={style['img-new-collection']}></div>
            <div className={style['img-map']}></div>
            <div className={style['benefits']}>
                <div className={style['block']}>
                    <div className={style['img-block-1']}></div>
                    <div className={style['content']}>
                        <h3>Отправка день в день</h3>
                        <p>При заказе до 18<sup>00</sup></p>
                    </div>
                    
                </div>
                <div className={style['block']}>
                    <div className={style['img-block-2']}></div>
                    <div className={style['content']}>
                        <h3>Легкий возврат/обмен</h3>
                        <p>В течении 14 дней</p>
                    </div>
                </div>
                <div className={style['block']}>
                    <div className={style['img-block-3']}></div>
                    <div className={style['content']}>
                        <h3>Сделано в Украине</h3>
                        <p>Прям в Киеве</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview