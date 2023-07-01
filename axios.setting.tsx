import { getCookie } from './hooks/useCookie';
import axios from 'axios';

export default function createClientHttpInstance() {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
    });

    instance.defaults.headers.post['Content-Type'] = 'application/json';

    instance.interceptors.response.use(
        function (response) {
            return response
        },
        async function (error) {
            if (error.response && error.response.status === 401) {
                const accessToken = getCookie("mohmind-accessToken");
                if (accessToken) {
                    instance.defaults.headers.common['authorization'] = accessToken;
                    return await instance.request(error.config);
                } else {
                    window.location.href = "/login";
                    return Promise.reject(error)
                }
            }
        }
    )
    return instance;
}