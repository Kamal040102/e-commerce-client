import axios from "../../../axios"

const getProduct = async (id) => {
    try {
        const product = await axios.get(`/product/${id}`)

        if (product) {
            return product.data.responseData
        }
    } catch (err) {
        console.log(err.response)
    }
}

export default getProduct;