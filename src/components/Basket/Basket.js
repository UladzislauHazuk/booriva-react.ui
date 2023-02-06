import style from './Basket.module.css'

function Basket() {
    return(
        <div className={style['wrapper']}>
            <div className={style['contact']}>
                <div className={style['img-contact']}></div>
                <div className={style['inputs-info']}>
                    <input type={'text'} placeholder={'Имя'}></input>
                    <input type={'text'} placeholder={'Фамилия'}></input>
                    <input type={'text'} placeholder={'+48 ___-___-___'}></input>
                    <input type={'text'} placeholder={'E-mail'}></input>
                </div>
            </div>
            <div className={style['delivery']}>
                <div className={style['img-delivery']}></div>
                <div className={style['inputs-delivery']}>
                    <label>
                        <input type={'radio'} value={'Доставка в отделение почты'} name={'delivery'} className={'real-radio'}></input>
                        Доставка в отделение почты
                    </label>
                    <label>
                        <input type={'radio'} value={'Курьерская доставка'} name={'delivery'} className={'real-radio'}></input>
                        Курьерская доставка
                    </label>
                    <label>
                        <input type={'radio'} value={'Международная доставка '} name={'delivery'} className={'real-radio'}></input>
                        Международная доставка 
                    </label>
                    <label>
                        <input type={'radio'} value={'Самовывоз'} name={'delivery'} className={'real-radio'}></input>
                        Самовывоз
                    </label>
                    <input type={'text'} placeholder={'Комментарий к заказу'}></input>
                </div>
            </div>
            <div className={'basket-btn'}></div>
        </div>
    )
}

export default Basket