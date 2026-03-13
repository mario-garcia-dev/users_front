import axios from 'axios';

const localApi = axios.create({
    baseURL: 'http://localhost:5070/api',
});

export default localApi;
