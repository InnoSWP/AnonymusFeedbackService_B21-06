import axios from "axios";
import { back_url } from "../vars";

const $api = axios.create({
    baseURL: back_url
});

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status == 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(`${API_URL}token/refresh`, {
//           withCredentials: true,
//         });
//         localStorage.setItem("token", response.data.accessToken);
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log(e);
//         console.log("НЕ АВТОРИЗОВАН");
//       }
//     }
//     throw error;
//   }
// );

export default $api;
