import React,{Component} from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '', 
            name: '',
            status: false
        }
    }

    onCloseForm = () => {
    this.props.onCloseForm();
    }

    componentWillMount() {
        if(this.props.task){
            this.setState({
                id : this.props.task.id,
                name : this.props.task.name,
                status : this.props.task.status
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps &&  nextProps.task){
            this.setState({
                id : nextProps.task.id,
                name : nextProps.task.name,
                status : nextProps.task.status
            })
        }
        else if(nextProps && nextProps.task === null){
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false; 
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        //xoa cac gia tri 
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name:'',
            status: false
        })
    }


    render() {
        var { id } = this.state;
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-titlem">
                    <a><span  
                        className="fa fa-times-circle"
                        onClick={this.onCloseForm}
                    ></span></a>

                    <span className="text-right">{ id !== '' ? 'Sua cong viec':'Thêm Công Việc'}</span>
                </h3>
            </div>

            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            className="form-control"
                            onChange={this.onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select 
                        className="form-control" 
                        name="status" 
                        required="required"
                        value={this.state.status}
                        onChange={this.onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">{ id !== '' ? 'luu' :'Thêm'}</button>&nbsp;
                        <button type="button" onClick={this.onClear} className="btn btn-danger">Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    ); 
    }
    }
export default TaskForm;
