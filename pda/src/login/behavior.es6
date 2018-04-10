
export default {
  state: {},
  componentWillMount() {},
  componentDidMount() {},
  _username(e) {
    this.setState({username: e.target.value})
  },
  _password(e) {
    this.setState({password: e.target.value})
  },
  _login() {
    this.api.login(this.state)
  },
};
