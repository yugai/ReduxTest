/**
 * Created by yugai on 17/2/18.
 */
import * as types from '../action/actionType'
const initialState={
	text:'test'
};

export default function text(state = initialState, action) {
	switch (action.type){
		case types.ADD_TEXT:
			return {
				...state,
				text:action.text,
			};
		case types.DELETE_TEXT:
			return {
				...state,
				text:''
			};
		default:
			return state;
	}
}