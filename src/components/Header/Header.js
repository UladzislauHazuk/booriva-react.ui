import style from './Header.module.css'

function Header() {
    return(
        <div className={style['wrapper']}>
            <div className={style['header-wrapper']}>
                <div className={style['logo']}></div>
                <div className={style['basket']}></div>
            </div>
            <nav>
                <p>НОВИНКИ</p>
                <p>ПЛАТЬЯ</p>
                <p>ВЕРХ</p>
                <p>НИЗ</p>
                <p>КУРТКИ</p>
                <p>МЕЛОЧИ</p>
                <p>КОСТЮМЫ</p>
                <p>#BOORIVAGIRLS</p>
            </nav>
        </div>
    )
}

export default Header