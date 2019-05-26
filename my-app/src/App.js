import React,{Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker.js'
import Reset from './components/Reset.js'
import Result from './components/Result.js'
import SizeSeting from './components/SizeSeting.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 30
    };

    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onResetDefault = this.onResetDefault.bind(this);

  }

  onSetColor(param) {
    this.setState({
      color: param
    })
  }

  onChangeSize(value) {
      this.setState({
        fontSize: (this.state.fontSize + value >= 15 && this.state.fontSize + value <=45)?
         this.state.fontSize + value : this.state.fontSize
      })
  }

  onResetDefault() {
     this.setState({
      color: 'red',
      fontSize: 30
    })

  }
  
  render() {
    return(
      <div id="app" className="container">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <SizeSeting 
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize} 
          />
        </div>
        <br/><br/>
        <Result color={this.state.color}
                fontSize={this.state.fontSize}
        />
        <br/>
        <Reset onResetDefault={this.onResetDefault}/>
      </div>

    ); 
  }
}

export default App;
