import { Home, AccountCircle } from '@material-ui/icons';
import Landing from './../landing/Landing'
import ProjectsComponent from './../projects/ProjectsComponent'
import MenuRoute from "./MenuRoute";

const Routes: MenuRoute[] = [
  {
    path: '/',
    sidebarName: 'New',
    icon: Home,
    component: Landing,
    type: 'main'
  },
  {
    path: '/projects',
    sidebarName: 'Projects',
    icon: AccountCircle,
    component: ProjectsComponent,
    type: 'main'
  },
  {
    path: '/',
    sidebarName: 'Settings',
    icon: Home,
    component: Landing,
    type: 'sub'
  },
  {
    path: '/',
    sidebarName: 'Log out',
    icon: Home,
    component: Landing,
    type: 'sub'
  },
]

export default Routes
