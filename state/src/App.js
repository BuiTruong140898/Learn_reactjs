import React,{Component} from 'react';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products : [
      {
        id: 1,
        name: 'oppo',
        price: 100,
        status: true
      },
      {
        id: 2,
        name: 'apple',
        price: 150,
        status: true
      }

    ],
    isActive : true
    }

  }


  onSetState = ()=>{
    // if(this.state.isActive === true){
    //   this.setState({
    //     isActive : false
    //   })
    // }
    // else{
    //   this.setState({
    //     isActive : true
    //   })
    // }
    this.setState({
      isActive : !this.state.isActive
    })
  }
  
  render() {
  
    let elements = this.state.products.map((product,index)=>{
      let result = '';
      if(product.status){
            result =  <tr key = {index}>

                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
      }
      return result;
    });

     

    return(
      <div className="container">
        <div><h1>App.js</h1></div>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>Ten san pham</th>
                <th>giá</th>
              </tr>
            </thead>
            <tbody>
              {elements}
            </tbody>
          </table>
          <button type="button" className="btn btn-default" onClick={this.onSetState}>
            Active: {this.state.isActive === true? 'true':'false' }
          </button>
        </div>
      </div>
    ); 
  }
}

export default App;
