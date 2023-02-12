import style from './Preview.module.css'
import AdvantagesItem from './AdvantagesItem';
import PriceItem from './PriceItem';

function Preview() {
    const advantages = [{
        id: 1,
        image: 'img-block-1',
        logo: 'Отправка день в день',
        paragraph: 'При заказе до 18:00'
    },
    {
        id: 2,
        image: 'img-block-2',
        logo: 'Легкий возврат/обмен',
        paragraph: 'В течении 14 дней'
    },
    {
        id: 3,
        image: 'img-block-3',
        logo: 'Сделано в Украине',
        paragraph: 'Прям в Киеве'
    }
    ];

    const price = [{
        id: 1,
        image: 'img-clothes-1',
        price: '1 099 ₴',
        title: 'Cвитшот вставка клетка0'
    },
    {
        id: 2,
        image: 'img-clothes-2',
        price: '1 299 ₴',
        title: 'Платье прозрачное в цветочек черное'
    },
    {
        id: 3,
        image: 'img-clothes-3',
        price: '2 499 ₴',
        title: 'Бомбер Gone Crazy хаки'
    },
    {
        id: 4,
        image: 'img-clothes-4',
        price: '899 ₴',
        title: 'Платье-футболка рыбы в аквариуме'
    }
    ];

    return(
        <>
            <div className={style['img-news']}></div>
            <div className={style['price-wrapper']}>
                {price.map(el => <PriceItem image={el.image} price={el.price} title={el.title} />)}
            </div>
            <div className={style['img-new-collection']}></div>
            <div className={style['img-map']}></div>
            <div className={style['benefits']}>
                {advantages.map(el => <AdvantagesItem image={el.image} logo={el.logo} paragraph={el.paragraph} />)}
            </div>
        </>
    )
}

export default Preview