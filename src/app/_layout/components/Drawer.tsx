/** @jsxImportSource @emotion/react */

import { AppDrawer } from '@/_ui';

//atoms
import { useRecoilState } from 'recoil';
import { appDrawerAtom } from '../atoms/app-atom';

//components
import Menus from './Menus';

//
const Drawer = () => {
  const [isDrawer, setIsDrawer] = useRecoilState<boolean>(appDrawerAtom);

  return (
    <AppDrawer open={isDrawer} onCancel={() => setIsDrawer(false)}>
      <Menus />
    </AppDrawer>
  );
};

export default Drawer;

