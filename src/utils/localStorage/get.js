export const getCart = () => {
    const data = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_PROJECT_TITLE))
    if (data) return data.cart
    else return []
}