/**
 * Created by yugai on 17/2/18.
 */
'use strict';
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';
import  {addText, deleteText} from '../action/textAction'
import {connect} from 'react-redux';

class TextPage extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.name}</Text>
				<Text>{this.props.password}</Text>
				<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				           onChangeText={this.addText.bind(this)}></TextInput>
				<Text>{this.props.text}</Text>

				<TouchableOpacity onPress={this._onPressButton.bind(this)}>
					<Text>清空</Text>
				</TouchableOpacity>
			</View>
		);
	}

	addText(text) {
		let {dispatch} = this.props;
		dispatch(addText(text))
	}

	_onPressButton() {
		let {dispatch} = this.props;
		dispatch(deleteText());
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ff0'
	},
});


function select(store) {
	return {
		text:store.text.text
	}
}

export default connect(select)(TextPage)