export default {
  state: {
    bool: false,
    username: null,
    password: null
  },

  /**
   * 输入用户名
   * @param e
   */
  changeUsername: function(e) {
    this.setState({
      username: e.target.value
    });
  },

  /**
   * 输入密码
   * @param e
   */
  changePassword: function(e) {
    this.setState({
      password: e.target.value
    });
  },

  /**
   * 重复密码
   * @param e
   */
  changePasswordAgain: function(e) {
    this.setState({
      bool:  e.target.value === this.state.password
    });
  },

  /**
   * 注册
   */
  register: function() {
    const { password, username } = this.state
    if(this.state.bool) {
      this.api.register({ password, username }).then(this.afterRegister)
    }

  },
  /**
   * 注册返回结果
   * @param res
   */
  afterRegister: function(res) {
    if(res.error) {
      console.error(res.error)
    } else {
      this.method.local.set('token', res.token)
      window.location.href = '/'
    }
  }
};
