/**
 * @description: 生成UUID
 * @param {*}
 * @return {*}
 */
import {SUCCESS_CODE} from "@/utils/constant";


export function getUUID() {
  let result = ''
  const str = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  result = str.replace(/[xy]/gu, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
  return result
}

/**
 * @description: 树形数据转换
 * @param {*} data
 * @param {*} key
 * @param {*} parentKey
 * @param {*} childrenKey
 * @return {*}
 */
 export function parseData2Tree(data,key = 'id',parentKey = 'parentId',childrenKey = 'children') {
  const result = []
  const temp = {}
  for (let i = 0; i < data.length; i++) {
    temp[(data[i])[key]] = data[i]
  }
  for (let k = 0; k < data.length; k++) {
    if (temp[(data[k])[parentKey]] && (data[k])[key] !== (data[k])[parentKey]) {
      if (!temp[(data[k])[parentKey]][childrenKey]) {
        temp[(data[k])[parentKey]][childrenKey] = []
      }
      if (!temp[(data[k])[parentKey]]['_level']) {
        temp[(data[k])[parentKey]]['_level'] = 1
      }
      (data[k])['_level'] = temp[(data[k])[parentKey]]._level + 1
      temp[(data[k])[parentKey]][childrenKey].push(data[k])
    } else {
      result.push(data[k])
    }
  }
  return result
}

/**
 * sessionStorage 封装
 * 转换object、array为字符串存储
 */
export const sessionStore = {
  get(key){
    asset(!key,'[Error]:the sessionStorage key is invalid')

    let val = sessionStorage.getItem(key)
    try {
      if(val && (val.includes('{') || val.includes('['))){
        val = JSON.parse(val)
      }
      return val
    } catch (error) {
      console.warn('[Error]: sesionStorage got an error',error)
      return val
    }

  },
  set(key,value) {
    asset(!key,'[Error]:the sessionStorage key is invalid')

    if( value instanceof Object || value instanceof Array) {
      value = JSON.stringify(value)
    }

    sessionStorage.setItem(key,value)
  },
  clear(){
    sessionStorage.clear()
  }
}

/**
 * localStorage封装
 * 转换object、array为字符串存储
 *
 */
export const localStore = {
  get(key){
    asset(!key,'[Error]:the localStorage key is invalid')
    let val = localStorage.getItem(key)
    try {
      if(val && (val.includes('{') || val.includes('['))){
        val = JSON.parse(val)
      }
      return val
    } catch (error) {
      console.warn('[Error]: localStorage got an error',error)
      return val
    }

  },
  set(key,value) {
    asset(!key,'[Error]:the localStorage key is invalid')

    if( value instanceof Object || value instanceof Array) {
      value = JSON.stringify(value)
    }

    localStorage.setItem(key,value)
  },
  clear(){
    localStorage.clear()
  }
}
/**
 * cookie存储
 */
export const cookie = {
  set(name,value,expires){
    asset(!name,'[Error]:the cookie key is invalid')
    if( value instanceof Object || value instanceof Array) {
      value = JSON.stringify(value)
    }
    document.cookie =`${name}=${value};expires=${expires}`;
  },
  get(name){
    let strCookie = document.cookie;
    let arrCookie = strCookie.split("; ");

    for (let i = 0; i < arrCookie.length; i++) {
      let arr = arrCookie[i].split("=");
      if (arr[0] == name) {
        return arr[1];
      }
    }
  },
  remove(name){
    cookie.set(name, 1, -1);
  }
}

function asset(condition,msg){
  if(condition)
  throw new Error(msg)
}


export function isOk(code){
  return SUCCESS_CODE.includes(code)
}
