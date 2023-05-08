// export const products = [
//     {
//         _id: 1,
//         product_name: "Product 1",
//         product_price: 123,
//         product_category: "Sample"
//     },
//     {
//         _id: 2,
//         product_name: "Product 2",
//         product_price: 1234,
//         product_category: "Sample"
//     },
//     {
//         _id: 3,
//         product_name: "Product 3",
//         product_price: 12,
//         product_category: "Sample"
//     },
//     {
//         _id: 4,
//         product_name: "Product 4",
//         product_price: 1234,
//         product_category: "Sample"
//     },
//     {
//         _id: 5,
//         product_name: "Product 5",
//         product_price: 1234,
//         product_category: "Sample"
//     },
//     {
//         _id: 6,
//         product_name: "Product 6",
//         product_price: 1234,
//         product_category: "Sample"
//     },
//     {
//         _id: 7,
//         product_name: "Product 7",
//         product_price: 1234,
//         product_category: "Sample"
//     },
//     {
//         _id: 8,
//         product_name: "Product 8",
//         product_price: 1234,
//         product_category: "Sample"
//     }
// ]

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