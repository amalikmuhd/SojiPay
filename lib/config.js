// import axios from 'axios';
// import settings from '../config/settings';
// import CONSTANT from '../constants/constant';

// const API = axios.create({
//   baseURL: settings.baseUrl,
//   headers: {
//     Accept: 'application/json',
//     apiKey: settings.apiKey,
//   },
// });

// API.interceptors.request.use(
//   async (config) => {
//     const { getItem } = useLocalStorage(CONSTANT.SOJI_PAY_LOCAL_STORAGE);
//     const details = await getItem();

//     if (details?.token) {
//       config.headers.Authorization = `Bearer ${details.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// API.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err) => {
//     throw err.response.data;
//   }
// );

// export default API;
