import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/Index';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    } 

    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdateTask = () => {
        this.props.onUpdate(this.props.task.id);
    }
    render() {
        var {task, index} = this.props;
        return(
             <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name }</td>
                <td className="text-center">
                    <button type="button" 
                            onClick={this.onUpdateStatus}
                            className={task.status === true ? 'btn btn-danger': 'btn btn-success'}>
                                    {task.status===true ? 'Kích Hoạt' : 'Ẩn'}
                       
                    </button>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={ this.onUpdateTask }
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button"  
                        className="btn btn-danger"
                        onClick={this.onDeleteTask}
                    >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        ); 
      }
    }

const mapStateToProps = state => {
  return {
    
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus : (id) => {
        dispatch(actions.updateStatus(id))
    },

    onDeleteTask : (id) => {
        dispatch(actions.deleteTask(id))
    },
    onCloseForm : () => {
      dispatch(actions.closeForm())

    }

  };
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);

