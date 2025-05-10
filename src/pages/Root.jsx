import { Outlet } from 'react-router-dom';
import Appbar from 'MUI-Components/Appbar';
import Drawerr from './Drawerr';

const drawerWidth = 240;

const Root = () => {
  return (
    <div>

      <Appbar drawerWidth={drawerWidth}/>
      <Drawerr drawerWidth={drawerWidth}/>


      <Outlet/>
    </div>
  )
}

export default Root