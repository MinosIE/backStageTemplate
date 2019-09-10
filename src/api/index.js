import { axios } from '@/utils/request';

// GET
export function getApi(params) {
    return axios.get('/getApi', params);
}

// POST
export function getApi(params) {
    return axios.post('/postApi', params);
}