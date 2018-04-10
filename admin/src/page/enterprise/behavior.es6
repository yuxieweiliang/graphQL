export default {
<<<<<<< HEAD
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
=======
  // 组件状态
  state: {},

  // 组件数据
  defaultProps: {},

  // 组件数据检查
  propTypes: {},

  // 组件渲染之前调用
  componentWillMount() {},

  // render ...

  // 组件渲染之后调用
  componentDidMount() {},

  // props 改变时调用，可以在这里修改 state
  componentWillReceiveProps() {},


  // 组件即将更新
  componentWillUpdate() {},
  // 组件已经更新
  componentDidUpdate() {},

  // 判断是否需要更新 如果返回true 则更新， 否则不更新
  // shouldComponentUpdate(nextProps, nextState) {},

  // 组件将要被卸载
  componentWillUnmount() {},

>>>>>>> bc90f470b6fe40a654e99bdca2ced3b351127673
};
