import Vue from 'vue';
import axios from 'axios';
import { VueAxios } from './axios';
//import router from '../router';
import qs from 'qs';
import config from '../config/';

const baseURL = config.apiUrl + '/laowu/laowuCtrl';

// 创建 axios 实例
const service = axios.create({
    baseURL, // api base_url
    timeout: 60000, // 请求超时时间
    withCredentials: true,
});

['get', 'delete'].forEach(method => {
    service[method] = (...options) => {
        const [url, params, config] = options;
        return service({
            method,
            url,
            params,
            ...config,
        });
    };
});

const err = error => {
    return Promise.reject(error);
};

const businessErr = data => {
    const { status } = data;
    if (status == -99) {
        location.href = config.loginUrl + encodeURIComponent(location.href);
        return;
    }
    if (status != 1) {
        return Promise.reject(data);
    }
    return Promise.resolve(data);
};
const getParams = data => {
    const keyValueArr = data.split(';');
    let paramObj = {};
    keyValueArr.forEach(item => {
        const keyValue = item.split('=');
        paramObj[keyValue[0]] = keyValue[1];
    });
    return paramObj;
};
// request interceptor
service.interceptors.request.use(config => {
    let auth = getParams(document.cookie).s_auth;
    if (config.method === 'post') {
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            authorization: auth ? auth : '',
            ...config.headers,
        };
        config.data = qs.stringify(config.data);
    }
    return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
    const { data, config } = response;
    return businessErr(data);
}, err);

const installer = {
    vm: {},
    install(Vue, router = {}) {
        Vue.use(VueAxios, router, service);
    },
};

const CancelToken = axios.CancelToken;

export { installer as VueAxios, service as axios, CancelToken };
