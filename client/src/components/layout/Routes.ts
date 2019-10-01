import { Home, AccountCircle } from '@material-ui/icons';
import Landing from './../landing/Landing'
import ProjectsComponent from './../projects/ProjectsComponent'

export const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: Landing
  },
  {
    path: '/projects',
    sidebarName: 'Projects',
    navbarName: 'Projects',
    icon: AccountCircle,
    component: ProjectsComponent
  }
]


