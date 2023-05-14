import { getCart } from "../utils/localStorage/get"

export const getQuantityOfItem = (id) => {
    const cart = getCart();
    let count = 0;

    cart?.map((item) => item === id ? count += 1 : null)
    return count
}

export const getUniqueProductIds = () => {
    const cart = getCart()
    let ids = []

    cart?.map((id) => ids.includes(id) ? null : ids.push(id))
    return ids;
}

export const getCartTotalAmount = (data) => {
    let totalAmount = 0;
    let cart = getCart();

    cart?.map((prod) => {
        data?.map((dat) => {
            dat._id === prod ? totalAmount += dat.product_price : null
        })
    })

    return totalAmount;
}