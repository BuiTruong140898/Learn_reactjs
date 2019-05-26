import React,{Component} from 'react';

class Reset extends Component {

  onClickReset = () =>{
    this.props.onResetDefault();
  }
  
  render() {
    return(
      
        <button type="button" className="btn btn-default" onClick={this.onClickReset}>Reset</button>
      
    ); 
  }
}

export default Reset;
