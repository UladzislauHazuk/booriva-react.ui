import axios from 'axios';
import style from './Basket.module.css'

function ProductItem({id, title, price, setArrayBasket}) {

    async function deleteFromBasket() {
        try {
            const response = await axios.delete(`/basket/${id}`)
            setArrayBasket(response.data)
        } catch (error) {
            alert(error.message);
        }
    }

    return(
        <>
            <div className={style['block']}>
                
                <div className={style['model']}>
                    <div className={style['model']}></div>
                </div>
                <div className={style['description']}>
                    <h3>{title}</h3>
                    <p className={style['size']}>S — M</p>
                    <p className={style['price']}>{price}</p>
                </div>
                <div onClick={deleteFromBasket} className={style['delete']}></div>
            </div>
        </>
    )
}

export default ProductItem