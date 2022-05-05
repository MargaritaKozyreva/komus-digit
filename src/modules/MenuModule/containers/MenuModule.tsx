import Button from '@ui/Button';
import { Logo } from '@ui/Logo';
import { MenuLink } from '@ui/MenuLink';
import { MenuLinks } from '@ui/MenuLinks';
import { WithSkeleton } from '@ui/WithSkeleton';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuWrapper } from '../components/MenuWrapper';
import { UserBar } from '../components/UserBar';
import { getMainMenuData } from '../dataContext/MenuModuleContext';
import { mainMenuActions, MainMenuState } from '../redux/MenuModuleSlices';

const MenuModule = () => {
	const dispatch = useDispatch();
	const MainMenuState = useSelector((state: { mainMenu: MainMenuState }) => state.mainMenu);

	useEffect(() => {
		dispatch(getMainMenuData());
	}, [dispatch]);

	return (
		<WithSkeleton
			isLoading={MainMenuState.isLoading}
			isEmpty={MainMenuState.entity === null}
		>
			<MenuWrapper>
				<Logo href={`/komus_digital`} />
				<MenuLinks>
					{MainMenuState.entity?.menuItems.map((item, i) => (
						<MenuLink
							key={i}
							text={item.title}
							iconSrc={item.img}
							href={item.link}
						/>
					))}
						
				</MenuLinks>
				<UserBar
					userImage={MainMenuState.entity?.userInfo.userPhoto || ''}
					userName={MainMenuState.entity?.userInfo.username || ''}
					link={MainMenuState.entity?.userInfo.cabinetLink || ''}
				/>
			</MenuWrapper>
		</WithSkeleton>
	);
};

export default MenuModule;
