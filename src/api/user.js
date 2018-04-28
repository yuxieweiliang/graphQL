import { common } from './type/type'

export default {
  getUser: function (option) {
    var _this = this;

    return this.Ajax.get({
      url: common.getHISUserInfo,
      option
    })
      .then(function(res) {
        var data = res.Data,
          userName = _this.method.b64Encode(data.USER_NAME),
          deptCode = data.DEPT_CODE,
          deptName = _this.method.b64Encode(data.DEPT_NAME)
        // loginTime =
        _this.cookie.set('username', userName, 1)
        _this.cookie.set('deptCode', deptCode, 1)
        _this.cookie.set('deptName', deptName, 1)
        return res
      })
  }
}

