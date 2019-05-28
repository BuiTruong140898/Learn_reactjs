import * as types from './../constants/ActionTypes'

var innitialState = false;//close form
var myReducer = ( state = innitialState, action ) => {
	switch(action.type){
		case types.TOGGLE_FORM:
			return !state;
		case types.OPEN_FORM:
		    state = true;
			return state;
		case types.CLOSE_FORM:
		    state = false;
			return state;
			
		default : return state;

	}
	return state;
};


export default myReducer;