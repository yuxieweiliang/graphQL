import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog } from 'react-weui';
import func from './behavior'
import './style.less'

class DialogDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIOS1: false,
      showIOS2: false,
      showAndroid1: false,
      showAndroid2: false,
      style1: {
        buttons: [
          {
            label: 'Ok',
            onClick: this.hideDialog.bind(this, '1')
          }
        ]
      },
      style2: {
        title: 'Heading',
        buttons: [
          {
            type: 'default',
            label: 'Cancel',
            onClick: this.hideDialog.bind(this, '2')
          },
          {
            type: 'primary',
            label: 'Ok',
            onClick: this.hideDialog.bind(this, '3')
          }
        ]
      }
    };
  }
  hideDialog(params) {
    console.log(params);
    this.setState({
      showIOS1: false,
      showIOS2: false,
      showAndroid1: false,
      showAndroid2: false,
    });
  }

  render() {

    return (
      <div className="dialog">
        <Button type="default" onClick={ e=> this.setState({ showIOS1: true}) } >iOS Style1</Button>
        <Button type="default" onClick={ e=> this.setState({ showIOS2: true}) }>iOS Style2</Button>
        <Button type="default" onClick={ e=> this.setState({ showAndroid1: true}) } >Android Style1</Button>
        <Button type="default" onClick={ e=> this.setState({ showAndroid2: true}) }>Android Style2</Button>

        <Dialog type="ios" title={this.state.style1.title}
                buttons={this.state.style1.buttons}
                show={this.state.showIOS1}>
          This is iOS Style 1
        </Dialog>
        <Dialog type="ios" title={this.state.style2.title}
                buttons={this.state.style2.buttons}
                show={this.state.showIOS2}>
          This is iOS Style 2
        </Dialog>

        <Dialog type="android" title={this.state.style1.title}
                buttons={this.state.style1.buttons}
                show={this.state.showAndroid1}>
          This is Android Style 1
        </Dialog>
        <Dialog type="android" title={this.state.style2.title}
                buttons={this.state.style2.buttons}
                show={this.state.showAndroid2}>
          This is Android Style 2
        </Dialog>
      </div>
    );
  }
}


if(typeof document !== 'undefined') {
  ReactDOM.render(<DialogDemo/>, document.getElementById('root'));
}

export default DialogDemo;