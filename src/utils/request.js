import axios,{ Cancel} from 'axios';
import store from '@/store';
import router from '@/router';
import {INVALID_TOKEN, TIME_OUT} from '@/utils/constant'
import { ElMessage } from 'element-plus'
import {OK} from "./constant";

/*let reaptTimeOut = null
const pending = {};*/
/*const removePending = (key, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key]("取消重复请求!")
  }
  if (pending[key]) {
    delete pending[key]
  }

  if (reaptTimeOut) {
    clearTimeout(reaptTimeOut)
  }

  // reaptTimeOut = setTimeout(() =>{
  //   Object.keys(pending).forEach(item =>{
  //     delete pending[item]
  //   })
  // },500)
}*/



axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

axios.defaults.timeout = TIME_OUT;

axios.interceptors.request.use(
  config => {


    // const key = config.url + '&' + config.method;
    // removePending(key, true);
    // config.cancelToken = new CancelToken((cancel) => {
    //   pending[key] = cancel;
    // })


    // 每次发送请求之前判断vuex中是否存在token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = store.state.token;
      token && (config.headers.token = token);
      return config;
  },
  error => {
      return Promise.error(error);
})

let timeout = null
 // 响应拦截器
 axios.interceptors.response.use(
  response => {


    // const key = response.config.url + '&' + response.config.method;
    // removePending(key)

      // 如果返回的状态码为200，说明接口请求成功
      // 否则的话抛出错误
      if (response.status === 200) {
        const {code, msg} = response.data

        if (code === INVALID_TOKEN) {

          if (timeout) {
            clearTimeout(timeout)
          }


          timeout = setTimeout(() => {
            store.commit('SET_TOKEN', '')
            ElMessage.warning('登录已过期，请重新登录！')
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });

          }, 1000)


          return
        }
        if (code !== OK && code !== 0 && response.config.url !== "/sacw/things/export") {
          if (timeout) {
            clearTimeout(timeout)
          }
          timeout = setTimeout(() => {
            ElMessage.error(msg || '请求出错了，请稍后再试！')

          }, 1000)
        }
          return Promise.resolve(response.data);
      } else {
          return Promise.reject(response.data);
      }
  },

  // 服务器状态码

  error => {

    if (error.response && error.response.status) {
          switch (error.response.status) {
              // 401: 未登录
              // 未登录则跳转登录页面，并携带当前页面的路径
              // 在登录成功后返回当前页面，这一步需要在登录页操作。
              case 401:
                store.commit('SET_TOKEN','')
                ElMessage.warning('登录已过期，请重新登录！')
                  router.replace({
                      path: '/login',
                      query: {
                          redirect: router.currentRoute.fullPath
                      }
                  });
                  break;
              // 403 token过期
              // 登录过期对用户进行提示
              // 清除本地token和清空vuex中token对象
              // 跳转登录页面
              case 403:

                  ElMessage.warning('登录过期，请重新登录')
                  // 清除token
                  localStorage.removeItem('token');
                  store.commit('loginSuccess', null);
                  // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                  setTimeout(() => {
                      router.replace({
                          path: '/login',
                          query: {
                              redirect: router.currentRoute.fullPath
                          }
                      });
                  }, 1000);
                  break;
              // 404请求不存在
              case 404:
                  ElMessage.error('网络请求不存在')
                  break;
              // 其他错误，直接抛出错误提示
              default:
                if (timeout) {
                  clearTimeout(timeout)
                }
                timeout = setTimeout(() =>{
                  ElMessage.error(error.response.data.msg || '出错了，请稍后再试！')
                },1000)

          }
          return Promise.reject(error.response);
      }else {

      if (error instanceof Cancel) {
        return
      }
      if (timeout) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(() =>{
          ElMessage.error('服务超时，请稍后再试！')
        },1000)
      }
  }
);



export const get = (url,param)=> {
  return axios.get(url,param)
}

export const post = (url,param) => {
  return axios.post(url,param)
}


export default axios
