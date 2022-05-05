import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { courseSaga } from '@src/modules/Course/sagas/CourseSaga';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, sagaMiddleware),
		composeEnhancers()
	)
);

sagaMiddleware.run(courseSaga);

export default store;
