import basket from "../../context/basket"

function getCount() {
    let count = 0
    if (basket.length === 1) {
        count = `${basket.length} товар`
    } else if (basket.length === 2 || basket.length === 3 || basket.length === 4) {
        count = `${basket.length} товара`
    } else {
        count = `${basket.length} товаров`
    }
    return count
}

function getSumma() {
    let sum = basket.reduce(function (sum, elem) {
        return sum + elem.price
    }, 0)
    return sum
}

export {
    getCount,
    getSumma
};