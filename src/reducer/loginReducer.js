/**
 * Created by yugai on 17/2/18.
 */
import * as types from '../action/actionType'

const initialState={
	name:'',
	password:''
};

export default function login(state = initialState, action) {
	switch (action.type){
		case types.LOGIN:
			return {
				...state,
				name:action.name,
				password:action.password
			};
		default:
			return state;
	}
}