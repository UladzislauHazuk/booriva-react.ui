import { Link } from 'react-router-dom';
import style from './Footer.module.css'
import NavItem from './NavItem';

function Footer() {
    const arr = ['Контакты', 'Система лояльности', 'Обмен и возврат', 'Доставка и оплата'];

    return(
        <div className={style['wrapper']}>
            <Link to={'/'}><div className={style['logo']}></div></Link>
            <nav>
                {arr.map((el, index) => <NavItem key={index} name={el} />)}
            </nav>
        </div>
    )
}

export default Footer