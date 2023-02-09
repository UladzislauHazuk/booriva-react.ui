import style from './NotFound.module.css'

function NotFound() {
    return(
        <div className={style['wrapper']}>
            <div className={style['main-page']}></div>
            <p>Страница не найдена, но у нас есть еще много всего интересного</p>
            <div className={style['btn']}></div>
        </div>
    )
}

export default NotFound