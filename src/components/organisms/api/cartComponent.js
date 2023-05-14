import axios from "../../../axios"
import customToast from "../../atoms/toast"

export const getCartProds = async (data) => {
    try {
        const res = await axios.post("/product/cartItems", { productIds: data })
        if (res.data.responseCode === 1) {
            return res.data.responseData
        }
    }
    catch (err) {
        customToast(err.response.data.responseMessage, "error")
    }
}