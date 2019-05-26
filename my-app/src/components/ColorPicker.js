import React,{Component} from 'react';

class ColorPicker extends Component {

  constructor(props){
      super(props);
      this.state = {
        colors: ['red','green','yellow']
      }
    }
  
  showColor(color){
    return {backgroundColor : color};
  }

  setActiveColor(color){
    this.props.onReceiveColor(color)
  }

  render() {

    var elmColors = this.state.colors.map((color, index) => {
        return <button  className="btn" 
                        key={index} 
                        style={this.showColor(color)}
                        className={this.props.color === color ? 'active' : ''}
                        onClick={()=>this.setActiveColor(color)}
                        >{color}</button>
    })

    return(
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
         <h3>Doi mau chu</h3>
         {elmColors}
      </div>
    ); 
  }
}

export default ColorPicker;
