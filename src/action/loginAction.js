/**
 * Created by yugai on 17/2/18.
 */
import * as types from './actionType'


export function login(name,password){
	return {
		type: types.LOGIN,
		name,
		password
	}
}