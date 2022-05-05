import { courseReducer } from './redux/CourseSlices';
import { courseSaga } from './sagas/CourseSaga';
import thunkMiddleware from 'redux-thunk'

class CourseModule {
	readonly name = 'course';

	getMiddlewares() {
		return [thunkMiddleware];
	}

	getReducers() {
		return {
			courses: courseReducer
		};
	}

	getSagas() {
		return [courseSaga()];
	}

	getRoutes() {
		return [];
	}
}

export const courseModule = new CourseModule();
