import { createAsyncThunk } from '@reduxjs/toolkit';

// import searchIcon from '@icons/search-icon.svg';
// import helpIcon from '@icons/help-icon.svg';
// import calendarIcon from '@icons/calendar-icon.svg';
// import glossariyIcon from '@icons/glossariy-icon.svg';

export const getMainMenuData = createAsyncThunk(
	'mainMenu/getMainMenuData',
	async() => {
		const data = await {
			data: {
				userInfo: {
					username: 'Михаил',
					userPhoto: 'http://172.16.3.123:81/download_file.html?file_id=7057155147796458950',
					cabinetLink: '/_wt/cabinet/dashboard'
				},
				menuItems: [
					{
						id: 1,
						title: 'Поиск',
						link: '/_wt/doc_type/custom_web_template_id/6938386428212565893/doc_id/6935391300372799202',
						img: 'http://172.16.3.123:81/download_file.html?file_id=7057156632958498960'
					},
					{
						id: 2,
						title: 'Помощь',
						link: '/_wt/doc_type/custom_web_template_id/6938386428212565893/doc_id/6935391300372799202',
						img: 'http://172.16.3.123:81/download_file.html?file_id=7057156632958498960'
					},
					{
						id: 3,
						title: 'Календарь',
						link: '/_wt/doc_type/custom_web_template_id/6938386428212565893/doc_id/6935391300372799202',
						img: 'http://172.16.3.123:81/download_file.html?file_id=7057156632958498960'
					},
					{
						id: 4,
						title: 'Глоссарий',
						link: '/_wt/doc_type/custom_web_template_id/6938386428212565893/doc_id/6935391300372799202',
						img: 'http://172.16.3.123:81/download_file.html?file_id=7057156632958498960'
					}
				]
			}
		};

		return data;
	}
);
