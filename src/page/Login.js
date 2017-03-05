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
import  {login} from '../action/loginAction'
import {connect} from 'react-redux';
import TextPage from './Text';


class Login extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			name: '',
			password: ''
		};
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangePswd = this.onChangePswd.bind(this);
	}


	render() {
		return (
			<View style={styles.container}>
				<View style={styles.login}>
					<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					           onChangeText={this.onChangeName}></TextInput>
					<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					           onChangeText={this.onChangePswd}></TextInput>

					<TouchableOpacity onPress={this._onPressButton.bind(this)}>
						<Text>登录</Text>
					</TouchableOpacity>

				</View>
			</View>
		);
	}


	onChangeName(text) {
		this.setState({name: text});
	}

	onChangePswd(text) {
		this.setState({password: text});
	}

	_onPressButton() {
		let {dispatch,navigator} = this.props;
		dispatch(login(this.state.name, this.state.password));
		navigator.push({
			component: TextPage,
			params: {
				name:this.props.name,
				password:this.props.password
			}
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	login: {
		alignSelf: 'center',
		width: 200,
		alignItems: 'center'
	}
})
//用户绑定store数据
function select(store) {
	return {
		name: store.login.name,
		password: store.login.password,
	}
}

export default connect(select)(Login)