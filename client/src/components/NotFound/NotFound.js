import { Link } from 'react-router-dom'
import style from './NotFound.module.css'

function NotFound() {
    return(
        <div className={style['wrapper']}>
            <div className={style['main-page']}></div>
            <p>Страница не найдена, но у нас есть еще много всего интересного</p>
            <Link to={'/'}><div className={style['btn']}></div></Link>
        </div>
    )
}

export default NotFound