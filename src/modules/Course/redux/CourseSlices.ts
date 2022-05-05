//1. Описываем интерфейс стейта
//2. Пишем дефолтный стейт
//3. Пишем редьюсер

import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { CourseDTO } from '../dataContext/CourseDTO.dto';

export type CourseState = {
	courses: {
		entity: CourseDTO.ICourse | undefined;
		isLoading: boolean;
		error: string | SerializedError | undefined;
	};
};

const initialState: CourseState = {
	courses: {
		entity: undefined,
		isLoading: false,
		error: undefined
	}
};

const courseSlice = createSlice({
	name: 'courses',
	initialState: initialState,
	reducers: {
		getCourseByIdPending: (state, action) => {
			state.courses.isLoading = true;
		},
		getCourseByIdSuccess: (state, action) => {
			state.courses.entity = action.payload;
			state.courses.isLoading = false;
		},
		getCourseByIdError: (state, action) => {
			state.courses.isLoading = false;
			state.courses.error = action.payload.error;
		},
	},
});

export const courseActions = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
