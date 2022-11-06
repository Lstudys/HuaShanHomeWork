/**
 * 封装axios类
 */
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://106.75.16.42:8082',
    timeout: 5000
});

export default service;