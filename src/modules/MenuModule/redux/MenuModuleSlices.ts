import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { getMainMenuData } from '../dataContext/mockApi/MenuModuleContext';
import { MenuModuleDTO } from '../dataContext/MenuModuleDTO.dto';

export type MainMenuState = {
	entity: MenuModuleDTO.IMenu | null;
	isLoading: boolean;
	error: string | SerializedError | undefined;
};

const initialState: MainMenuState = {
	entity: null,
	isLoading: false,
	error: undefined
};

const mainMenuSlice = createSlice({
	name: 'mainMenu',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMainMenuData.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getMainMenuData.fulfilled, (state, action) => {
			state.entity = action.payload.data;
			state.isLoading = false;
		});
		builder.addCase(getMainMenuData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
	}
});

export const mainMenuActions = mainMenuSlice.actions;
export const mainMenuReducer = mainMenuSlice.reducer;
