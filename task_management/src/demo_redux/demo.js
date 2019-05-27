import { createStore } from 'redux';
import { status, sort } from './actions/index'
import myReducer from './reducers/index'


const store = createStore(myReducer);
console.log('default : ', store.getState());

//Thuc hien cong viec thay doi status
store.dispatch(status());
console.log('TOGGLE_STATUS : ', store.getState());
//Thuc hien cong viec sap xep tu z->a 

store.dispatch(sort({
	by : 'name',
	value : -1
}));
console.log('SORT: ', store.getState());

