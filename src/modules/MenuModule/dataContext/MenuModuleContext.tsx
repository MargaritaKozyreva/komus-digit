import { httpService } from '@core/service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMainMenuData = createAsyncThunk(
	'mainMenu/getMainMenuData',
	async() => {
		const data = await httpService<any>('POST', 'get_header', undefined);
		return data;
	}
);
