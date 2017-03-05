/**
 * Created by yugai on 17/2/18.
 */
import thunk from 'redux-thunk';
import {
	createStore,
	applyMiddleware,
} from 'redux'
import rootReducer from '../reducer/rootReducer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;