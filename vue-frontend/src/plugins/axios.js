import axios from "axios";
import { useRouter } from 'vue-router';

// Initialize the router instance
const router = useRouter();

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// Request Interceptor
axios.interceptors.request.use(
    (config) => {
        console.log('Request:', config.url);
        return config;
    }
)

// Response Interceptor
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401){
            console.log('Unauthenticated');
            router.push('/login');
        }

        if(error.response?.status === 403){
            console.log('403 error');
        }

        if(error.response?.status === 419){
            console.log('419 error - CSRF Token Expired');
        }

        return Promise.reject(error);
    }
)

export default axios;
