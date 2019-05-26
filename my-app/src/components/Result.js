import React,{Component} from 'react';

class Result extends Component {

  setStyle() {
      return {
        fontSize: this.props.fontSize,
        color: this.props.color,
        borderColor: this.props.color
      };
    }
  
  render() {
    return(
      <div className="row">
        <h4>Ket qua</h4>
        <div className="content" style={this.setStyle()}>Noi dung</div>  
      </div>
    ); 
  }
}

export default Result;
