import { getCart } from "../utils/localStorage/get"

export const getQuantityOfItem = (id) => {
    const cart = getCart();
    let count = 0;

    cart?.map((item) => item === id ? count += 1 : null)
    return count
}