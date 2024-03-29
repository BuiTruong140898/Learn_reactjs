import React,{Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList'
import { connect } from 'react-redux'
import * as actions from './actions/Index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing : null,
      filter :{
        name: '',
        status: -1
      },
      keyword : '',
      sortBy : 'name',
      sortValue: 1
    }
  }

  

  themData = ()=>{
    var tasks=[
    { 
      id: this.genarateID(),
      name : "Bui",
      status : true
    },
    {
      id: this.genarateID(),
      name: 'Van',
      status:true
    },
    {
      id: this.genarateID(),
      name: 'Truong',
      status: false
    }
    ]
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  

  

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if(task.id === id) {
        result = index;
      }
    })
    return result;
  }

  

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onUpdate = (id) =>{
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index]
    this.setState({
      taskEditing: taskEditing
    })
    this.onShowForm();    
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus);
    this.setState({
      filter : {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  } 

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue      
    })
    console.log(this.state);
  }

  onToggleForm = () =>{
    this.props.onToggleForm();
  }
  render() {
    var { taskEditing, filter, keyword, sortBy, sortValue} = this.state;// var tasks = this.state.tasks;
    
    var { isDisplayForm } = this.props;

    var elmTaskForm = isDisplayForm ? 
            <TaskForm 
                task={taskEditing}
            /> 
        : "";

    
    return(
     <div className="container">
        <div className="text-center"> <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>

               {/*TaskForm*/}
               {elmTaskForm}
               {/* #TaskForm*/}
            </div>
            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={this.onToggleForm}
                >
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                
                <button type="button" className="btn btn-danger ml-5" onClick={this.themData}>
                    <span className="fa fa-plus mr-5"></span>Thêm data
                </button>
                {/*TaskControl*/}
                    <TaskControl 
                      onSearch={ this.onSearch }
                      onSort={ this.onSort }
                      sortBy={ sortBy }
                      sortValue={ sortValue }
                    />

                {/*#TaskControl*/}
                
                <div className="row mt-15">
                    {/*TaskList*/}
                    <TaskList 
                      onFilter={this.onFilter}
                    />
                    {/*TaskList*/}

                </div>
            </div>
        </div>
    </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm : state.isDisplayForm
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm : () => {
      dispatch(actions.toggleForm())
    }

  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
