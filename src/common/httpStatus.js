const HttpStatus = {
    noPermission: {
      code: 401,
      message: '您无此功能访问权限！'
    },
    tokenExpired: {
      code: 402,
      message: 'Token 已过期，您需要重新登录！'
    }
  }
  export { HttpStatus }