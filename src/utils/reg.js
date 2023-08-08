/**
 * @description: 邮箱
 * @param {*} input
 * @return {*}
 */
 export function isEmail(input) {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
  return reg.test(input)
}

/**
 * 手机号码
 * @param {*} input
 */
 export function isMobile(input) {
  const reg = /^1[0-9]{10}$/
  return reg.test(input)
}

/**
 * @description: 整数
 * @param {*} input
 * @return {*}
 */
 export function isInteger(input) {
  const reg = /^-?[1-9]\d*$/
  return reg.test(input)
}

/**
 * @description: 非负整数
 * @param {*} input
 * @return {*}
 */
export function isNonnegativeInteger(input) {
 const reg = /^0{1,1}$|^[1-9][0-9]*$/
 return reg.test(input)
}

/**
 * @description: 正整数
 * @param {*} input
 * @return {*}
 */
export function isPositiveInteger(input) {
 const reg = /^[1-9][0-9]*$/
 return reg.test(input)
}

/**
 * @description: 由数字、26个英文字母或者下划线组成的字符串
 * @param {*} input
 * @return {*}
 */
 export function isString(input) {
  const reg = /^[0-9a-zA-Z_]{1,20}$/
  return reg.test(input)
}

/**
 * @description: 身份证
 * @param {*} input
 * @return {*}
 */
export function isIdCard(rule,input, callback) {
  if (!input) {
     callback(new Error("请输入身份证号码"))
  } else {
    const reg = /^[1-9]\d{5}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
    if (reg.test(input)) {
      callback()
    } else {
      callback(new Error("请输入正确的身份证号码"))
    }
   }
}
/**
 * @description: 数字包含0，最多6位小数
 * @param {*} input
 * @return {*}
 */
export function isPositivenNumber0(rule,input, callback) {
    if (!input) {
        callback(new Error("请输入正确的数字"))
    } else {
        const reg = /(^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,6})?$)|(^0$)/;
        if (reg.test(input)) {
            callback()
        } else {
            callback(new Error("请输入大于/等于0的整数或小数,如为小数,仅限于小数点后6位"))
        }
    }
}
/**
 * @description: 正数字
 * @param {*} input
 * @return {*}
 */
 export function isPositivenNumber(rule,input, callback) {
  if (!input) {
     callback(new Error("请输入正确的数字"))
  } else {
    const reg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,6})?$/;
    if (reg.test(input)) {
      callback()
    } else {
      callback(new Error("请输入大于0的整数或小数,如为小数,仅限于小数点后6位"))
    }
   }
}
/**
 * 字母+数字
 * 案件编号 30以内字母加数字组合
 */
export function isCaseNumber(rule,input, callback) {
  if (!input) {
     callback(new Error("请输入案件编号"))
  } else {
    const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,30}$/;
    if (reg.test(input)) {
      callback()
    } else {
      callback(new Error("请输入支持数字+英文组合，且长度为30以内"))
    }
   }
}
/**
 * 字母+数字
 * 持有人姓名/采取措施人
 */
 export function isName(rule,input, callback) {
  if (!input) {
     callback(new Error("请输入正确的姓名"))
  } else {
    const reg = /^.{1,15}$/;
    if (reg.test(input)) {
      callback()
    } else {
      callback(new Error("请输入正确的姓名，且长度为15以内"))
    }
   }
}

/**
 * 字母+数字
 * 物品编号 32以内字母加数字组合
 */
 export function isGoodsNumber(rule,input, callback) {
  if (!input) {
     callback(new Error("请输入物品编号"))
  } else {
    const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,32}$/;
    if (reg.test(input)) {
      callback()
    } else {
      callback(new Error("请输入支持数字+英文组合，且长度为32以内"))
    }
   }
}

// IP地址验证
export function isIPNumber(rule, input, callback) {
  if (!input) {
     callback(new Error("请输入IP"))
  } else {
    const reg = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
    if (reg.test(input)) {
      callback()
    } else {
      callback(new Error("请输入正确的IP"))
    }
   }
}
//  端口号验证

export function isPortNumber(rule, input, callback) {
  if (!input) {
     callback(new Error("请输入端口号"))
  } else {
    const reg = /([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/;
    if (reg.test(input) && 1 <= 1 * input && 1 * input <= 65535) {
      callback()
    } else {
      callback(new Error("请输入正确的端口号"))
    }
   }
}
