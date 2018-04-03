export default {
  state: {
    username: null,
    password: null

  },
  changeUsername: function(e) {
    this.setState({ username: e.target.value });
  },
  changePassword: function(e) {
    this.setState({ password: e.target.value });
  },
  login: function() {

    this.api.login(this.state).then(res => console.log(res))

  },
};
