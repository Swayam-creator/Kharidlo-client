import axios from "axios";
const instance = axios.create({
    baseURL:import.meta.mode==="development"?import.meta.env.VITE_BASE_URL:'/api',
    withCredentials:true
});
export default instance;