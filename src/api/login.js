import request from '@/utils/request'

export const login = (params)=> request.post('/login', params);

export const queryUserInfo =()=>request.get('/user/detail')

export const logout = ()=> request.get('/logout');

export const getTableList = (params)=> request.post('/list',params)

export const ssoLogin = (params)=> request.get('/sso/perm', {params});

export const PKILogin =()=> request.get('/sys/config/pki');
