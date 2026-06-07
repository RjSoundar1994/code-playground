// import api from "./AxiosInstance";
import axios from 'axios';
const ipaddress ="http://localhost:5173";
export const userService = {
    post: async (payload, url) => {
        console.log('payload', payload)
        const { data } = await axios.post(`${ipaddress}url`, payload);
        return data;
    },
    put: async (payload, url) => {
        console.log('payload', payload)
        const { data } = await axios.put(`${ipaddress}url`, payload);
        return data;
    },
    get: async (payload, url) => {
        console.log('payload', payload)
        const { data } = await axios.get(`${ipaddress}url`);
        return data;
    },
    delete: async (payload, url) => {
        console.log('payload', payload)
        const { data } = await axios.delete(`${ipaddress}url`);
        return data;
    }
}
