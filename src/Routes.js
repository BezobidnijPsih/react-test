import List from './components/List';
import Detail from './components/Detail';

export let routes = [
  {path: '/', component: List, mainMenuLabel: 'List'},
  {path: '/detail', component: Detail, mainMenuLabel: 'Detail'},
];
