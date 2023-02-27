import style from './Products.module.css'
import axios from 'axios'

function ProductItem({id, title, price}) {

    const createNewProductToBasket = async () => {
        try {
            const response = await axios.post(`/basket/${id}`)
            console.log(response);
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <div className={style['block']}>
            <div className={style['image']}></div>
            {/* <div className={style[line]}></div> */}
            <div className={style['description']}>
                <p className={style['title']}>{title}</p>
                <p className={style['price']}>{price} ₴</p>
            </div>
            <div onClick={createNewProductToBasket} className={style['dislike']}></div>
        </div>
    )
}

export default ProductItem