import style from './Products.module.css'
import ProductsItem from './ProductsItem';

function Products() {
    const products = [{
        id: 1,
        image: 'image',
        line: 'line',
        title: 'Платье прозрачное в цветочек чёрное',
        price: '1 299 ₴',
        dislike: 'dislike'
    },
    {
        id: 2,
        image: 'image',
        line: 'line',
        title: 'Платье прозрачное в цветочек чёрное',
        price: '1 299 ₴',
        dislike: 'dislike'
    },
    {
        id: 3,
        image: 'image',
        line: 'line',
        title: 'Платье прозрачное в цветочек чёрное',
        price: '1 299 ₴',
        dislike: 'dislike'
    },
    {
        id: 4,
        image: 'image',
        line: 'line',
        title: 'Платье прозрачное в цветочек чёрное',
        price: '1 299 ₴',
        dislike: 'dislike'
    },
    {
        id: 5,
        image: 'image',
        line: 'line',
        title: 'Платье прозрачное в цветочек чёрное',
        price: '1 299 ₴',
        dislike: 'dislike'
    },
    {
        id: 6,
        image: 'image',
        line: 'line',
        title: 'Платье прозрачное в цветочек чёрное',
        price: '1 299 ₴',
        dislike: 'dislike'
    }
    ];

    return(
        <div className={style['wrapper']}>
            <div className={style['category-header']}></div>
            <div className={style['list']}>
                {products.map(el => <ProductsItem image={el.image} line={el.line} title={el.title} price={el.price} dislike={el.dislike} />)}
            </div>
            
        </div>
    )
}

export default Products