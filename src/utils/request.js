import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

//配置基础路径
const baseURL = '/api';
//设置响应拦截
axios.interceptors.response.use(res => {
    console.group('本次响应路径为:' + res.config.url)
    console.log(res);
    if (res.data.code !== 200) {
        Toast.fail(res.data.msg);
        return;
    }

    return res;
})

//轮播图
export const getBanner = () => {
    return axios({
        method: 'get',
        url: baseURL + '/api/getbanner'
    })
}

//首页商品
export const getIndexGoods = () => {
    return axios({
        method: "get",
        url: baseURL + '/api/getindexgoods'
    })
}

//分类树
export const getCate = () => {
    return axios({
        method: "get",
        url: baseURL + '/api/getcatetree'
    })
}

//分类商品
export const getGoods = (params) => {
    return axios({
        method: "get",
        url: baseURL + '/api/getgoods',
        params
    })
}

//会员注册
export const register = (data) => {
    return axios({
        method: 'post',
        url: baseURL + '/api/register',
        data: qs.stringify(data)
    })
}