import React,{Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtName: 'abc',
      txtPassword: '',
      txtNote: '',
      sltSex: 1,
      rdLang: 'anh',
      checktrangthai: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  
  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    //kiem tra checkbox tra ve gia tri boolean
    var value = target.type === 'checkbox' ? target.checked : target.value;
    //value = typeof Number(value) == 'number' ? Number(value) : value;
    this.setState({
      [name] : value
    })
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
            <h3>Form</h3>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <legend>Form title</legend>
                
                  <div className="form-group">
                    <label >Ten</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="txtName" 
                        placeholder="Input field"
                        value={this.state.txtName}
                        onChange = { this.onHandleChange }
                   />
                  </div>
                  <div className="form-group">
                   <label >password</label>
                   <input
                        className="form-control" 
                        type="password"
                        value={this.state.txtPassword}
                        name='txtPassword'
                        onChange = { this.onHandleChange }
                   />
                  </div>
                  <div className="form-group">
                   <label >note</label>
                   <textarea
                        name="txtNote" 
                        className="form-control" 
                        rows="3"
                        onChange = { this.onHandleChange }
                   ></textarea>
                  </div>
                  <div className="form-group">
                   <label >Sex</label>
                   <select name="sltSex" id="input" className="form-control" value={this.state.sltSex} onChange = { this.onHandleChange }>
                      <option value={0} defaultValue={ this.state.sltSex===0 }>Male</option>
                      <option value={1} defaultValue={ this.state.sltSex===1 }>Female</option>
                   </select>
                  </div>
                  <div className="form-group">
                   <label >Ngon ngu</label><br/>
                   <input type="radio" name="rdLang" checked={this.state.rdLang==='anh'}
                   onChange={ this.onHandleChange } value="anh"  title=""/>anh<br/>
                   <input type="radio" name="rdLang" checked={this.state.rdLang==='viet'} 
                   onChange={ this.onHandleChange } value="viet"  title=""/>viet                   
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" checked={this.state.checktrangthai === true} name="checktrangthai" value={true} onChange = { this.onHandleChange }/>
                      Trạng thái
                    </label>
                  </div>
                  
                  <button type="reset" className="btn btn-default">Reset</button>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      
    ); 
  }
}

export default App;
