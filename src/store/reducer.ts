import { mainMenuReducer } from '@modules/MenuModule/redux/MenuModuleSlices';
import { modalReducers } from '@modules/Modal/redux/ModalSlices';
import { combineReducers } from '@reduxjs/toolkit';
import { courseReducer } from '@src/modules/Course/redux/CourseSlices';
import { userReducer } from '@src/modules/User/redux/UserSlices';

const initialState = {
	currentNews: null
};

const initialReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'changeCurrentNews':
			return { ...state, currentNews: action.payload };
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	default: initialReducer,
	user: userReducer,
	mainMenu: mainMenuReducer,
	modal: modalReducers,
	courses: courseReducer,
});

export default rootReducer;
