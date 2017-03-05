/**
 * Created by yugai on 17/2/16.
 */
'use strict';
import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Navigator,
	Text,
	View
} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/Store'
import Login from './page/Login'

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navigator
					initialRoute={{component: Login}}
					configureScene={() => Navigator.SceneConfigs.PushFromRight}
					renderScene={(route, navigator) => {
						return <route.component navigator={navigator} {...route.args}/>
					}
					}
				/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('Test', () => Root);