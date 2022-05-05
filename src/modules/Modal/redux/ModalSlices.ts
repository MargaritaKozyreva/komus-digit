import { createSlice } from '@reduxjs/toolkit';
import { ModalKey, ModalKeyToPayload } from '../components/ModalController';

export type ModalState = {
	isShow: boolean;
	key: ModalKey;
	payload?: any;
	withBackground?: boolean
};

const initialState: ModalState = {
	isShow: false,
	key: ModalKey.Default,
	payload: {},
	withBackground: true
};

const modalSlices = createSlice({
	name: 'modalSlice',
	initialState,
	reducers: {
		showModal: <K extends ModalKey>(
			state: ModalState,
			action: {
				payload: { key: ModalKey; payload: ModalKeyToPayload[K]; withBackground?: ModalState['withBackground'] };
			}
		) => {
			state.isShow = true;
			state.key = action.payload.key;
			state.payload = action.payload.payload;
			state.withBackground = action.payload.withBackground;
		},
		hideModal: (state) => {
			state.isShow = false;
			state.key = ModalKey.Default;
			state.payload = {};
		}
	}
});

export const modalActions = modalSlices.actions;
export const modalReducers = modalSlices.reducer;
