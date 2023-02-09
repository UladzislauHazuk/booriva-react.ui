import style from './Header.module.css'
import NavItem from './NavItem';

function Header() {
    const arr = ['НОВИНКИ', 'ПЛАТЬЯ', 'ВЕРХ', 'НИЗ', 'КУРТКИ', 'МЕЛОЧИ', 'КОСТЮМЫ', '#BOORIVAGIRLS'];

    return(
        <div className={style['wrapper']}>
            <div className={style['header-wrapper']}>
                <div className={style['logo']}></div>
                <div className={style['basket']}></div>
            </div>
            <nav>
                {arr.map((el, index) => <NavItem key={index} name={el} />)}
            </nav>
        </div>
    )
}

export default Header