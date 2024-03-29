import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.onAddProduct = this.onAddProduct.bind(this);
  // }

  onClick(){
    console.log('clicked');
  }
  onAddProduct = () => {
    alert(this.refs.noidung.value);
  }
  render() {
    var products = [
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
    ];

    let elements = products.map((product,index)=>{
      let result = '';
      if(product.status){
           result = <Product
           key = {product.id}
           price = {product.price} 
           status = { product.status}
           name = { product.name} />;
      }
      return result;
    });

     

    return(
      <div className="container">
        <div><h1>App.js</h1></div>
        <div>
          <label>Noi dung</label>
          <input type="text" ref='noidung' className="noidung"/>
          <button type="button" className="btn btn-default" onClick={this.onAddProduct}>Save</button>

         </div>
        <div className="row">
              {elements}
        </div>
        <button type="button" className="btn btn-default"
          onClick={this.onClick}
        >button</button>
      </div>
    ); 
  }
}

export default App;
