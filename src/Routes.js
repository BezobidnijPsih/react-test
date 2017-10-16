import List from './components/List';
import Detail from './components/Detail';

export let routes = [
  {key: 'list', path: '/', component: List, mainMenuLabel: 'List'},
  {key: 'detail', path: '/detail', component: Detail, mainMenuLabel: 'Detail'},
];
