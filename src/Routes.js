import List from './components/List';
import Detail from './components/Detail';
import CarIcon from 'grommet/components/icons/base/Car';
import CalendarIcon from 'grommet/components/icons/base/Calendar';
import CatalogIcon from 'grommet/components/icons/base/Catalog';

export let routes = [
  {
    key: 'list',
    path: '/',
    component: List,
    mainMenuLabel: 'List',
    mainMenuIcon: CatalogIcon,
  },
  {
    key: 'calendar',
    path: '/calendar',
    component: List,
    mainMenuLabel: 'Calendar',
    mainMenuIcon: CalendarIcon,
  },
  {
    key: 'detail',
    path: '/detail',
    component: Detail,
    mainMenuLabel: 'Detail',
    mainMenuIcon: CarIcon,
  },
];
