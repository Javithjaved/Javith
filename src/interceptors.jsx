import axios from "axios";
const interceptor = () => {
    axios.interceptors.request.use(
        (config) => {
            const accessToken = localStorage.getItem("Accesstoken")
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
                config.headers['ngrok-skip-browser-warning'] = 'true ';
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
    );
}
export default interceptor;