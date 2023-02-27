import style from './Preview.module.css'

function AdvantagesItem({image, logo, paragraph}) {
    return(
        <div className={style['block']}>
            <div className={style[image]}></div>
            <div className={style['content']}>
                <h3>{logo}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default AdvantagesItem