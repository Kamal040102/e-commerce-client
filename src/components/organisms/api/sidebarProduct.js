import axios from "../../../axios"

export const getAllProducts = async (search) => {
    try {
        let params = {};

        if (search) {
            params.query = search
        }

        const products = await axios.get("/product", {
            params
        });

        if (products.data.responseCode === 1) {
            return products.data.responseData
        }
    }
    catch (err) {
        console.log(err.response.data.responseMessage)
    }
}