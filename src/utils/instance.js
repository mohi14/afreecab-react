import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
export default apiInstance;
