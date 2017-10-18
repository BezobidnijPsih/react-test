import List from './components/List';
import Detail from './components/Detail';

export let routes = [
  {
    key: 'list',
    path: '/',
    component: List,
    mainMenuLabel: 'List',
  },
  {
    key: 'calendar',
    path: '/calendar',
    component: List,
    mainMenuLabel: 'Calendar',
  },
  {
    key: 'detail',
    path: '/detail',
    component: Detail,
    mainMenuLabel: 'Detail',
  },
];
