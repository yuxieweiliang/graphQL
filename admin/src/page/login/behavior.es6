export default {
  state: {
    username: null,
    password: null

  },
  componentWillMount() {
    // console.log()
    this.method.local.remove('token')
  },
  changeUsername: function(e) {
    this.setState({ username: e.target.value });
  },
  changePassword: function(e) {
    this.setState({ password: e.target.value });
  },
  login: function() {

    this.api.login(this.state).then(this.afterLogin)

  },
  afterLogin: function(res) {
    if(res.error) {
      console.error(res.error)
    } else {
      this.method.local.set('token', res.token)
      window.location.href = '/'
      // this.props.history.push('/')
    }
  }
};
