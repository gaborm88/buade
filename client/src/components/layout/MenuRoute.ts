import SvgIcon from '@material-ui/core/SvgIcon';

type MenuRoute = {
  path: string,
  sidebarName: string,
  icon: typeof SvgIcon,
  component: React.FC,
  type: 'main' | 'sub';
}

export default MenuRoute
