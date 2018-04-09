export default {
  state: {
    dynamic: null,
    introduction: null,
    name: null,
    _id: null,
  },

  componentWillMount() {
    this.api.getEnterpriseDynamic().then(res => this.setState({...res.data}))
  },
  _enterpriseDynamic(e) {
    this.setState({dynamic: e.target.value})
  },
  _addDynamic() {
    const { dynamic, _id } = this.state
    this.api.updateEnterpriseDynamic({dynamic, _id})
  },
};
