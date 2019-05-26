import React,{Component} from 'react';

class SizeSeting extends Component {

  changeSize(value){
    this.props.onChangeSize(value)
  }
  
  render() {
    return(
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <h4>Fontsize = {this.props.fontSize}px</h4>
        <button type="button" className="btn btn-default" onClick={() => this.changeSize(-5)}>Giam</button>
        <button type="button" className="btn btn-default" onClick={() => this.changeSize(5)}>Tang</button>
      </div>
    ); 
  }
}

export default SizeSeting;
