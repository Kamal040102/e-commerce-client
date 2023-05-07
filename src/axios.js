import axios from 'axios';


const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// instance.interceptors.request.use(
//     (config) => {
//         const token = getToken()
//         const companyId = getCompanyId()

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         if (companyId) {
//             config.headers.companyId = companyId;
//         }


//         return config;
//     },
//     (err) => {
//         Promise.reject(err);
//     },
// );

// instance.interceptors.response.use(
//     function (response) {
//         // Any status code that lie within the range of 2xx cause this function to trigger
//         // Do something with response data

//         return response;
//     },
//     function (error) {
//         if (error?.response?.status === 401) {
//             if (typeof window !== 'undefined') {
//                 localStorage.clear();
//                 window.location.href = '/';
//             }
//         } else if (error?.response?.status === 403) {
//             // show toast message
//         }

//         return Promise.reject(error);
//     },
// );

export default instance;
