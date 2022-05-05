export namespace MenuModuleDTO {
	export interface IMenu {
		userInfo: UserInfoType;
		menuItems: MenuItemType[];
	}

	export type UserInfoType = {
		username: string;
		userPhoto: string;
		cabinetLink: string;
	};
	export type MenuItemType = {
		id: number;
		title: string;
		link: string;
		img: string;
	};
}
