/**
 * Created by yugai on 17/2/18.
 */
import * as types from './actionType'


export function addText(text){
	return {
		type: types.ADD_TEXT,
		text:text
	}
}

export function deleteText(){
	return {
		type: types.DELETE_TEXT
	}
}