import { Home, AccountCircle } from '@material-ui/icons';
import Landing from './../landing/Landing'
import ProjectsComponent from './../projects/ProjectsComponent'
import SvgIcon from '@material-ui/core/SvgIcon';

type SvgIconComponent = typeof SvgIcon;

type MenuRoute = {
  path: string,
  sidebarName: string,
  navbarName: string,
  icon: SvgIconComponent,
  component: React.FC,
  type: 'main' | 'sub';
}

const Routes: MenuRoute[] = [
  {
    path: '/',
    sidebarName: 'New',
    navbarName: 'New',
    icon: Home,
    component: Landing,
    type: 'main'
  },
  {
    path: '/projects',
    sidebarName: 'Projects',
    navbarName: 'Projects',
    icon: AccountCircle,
    component: ProjectsComponent,
    type: 'main'
  }
]

export default Routes
