import axios from 'axios';
import { logout } from './AuthApi';
// Paramétrage de base d'axios
const Axios = axios.create({
    baseURL: 'http://localhost:3001',
});

// Intercepteur pour la mise en place du token dans la requête

Axios.interceptors.request.use(
    async (config) => {
        const token = sessionStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            delete Axios.defaults.headers.common.Authorization;
        }
        return config;
    },
    (error) => Promise.reject(error),
);
// Intercepteur de réponse API pour vérification de la session
Axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            logout();
            window.location = '/register';
        } else {
            return Promise.reject(error);
        }
    },
);

export default Axios;
