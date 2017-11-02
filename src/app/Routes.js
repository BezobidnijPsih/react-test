import CarList from '../car/CarList';
import RaceList from '../race/RaceList';
import TrackList from '../track/TrackList';
import UserList from '../user/UsersList';

export let routes = [
  {
    key: 'cars',
    path: '/',
    component: CarList,
    mainMenuLabel: 'Cars',
  },
  {
    key: 'races',
    path: '/races',
    component: RaceList,
    mainMenuLabel: 'Races',
  },
  {
    key: 'tracks',
    path: '/tracks',
    component: TrackList,
    mainMenuLabel: 'Tracks',
  },
  {
    key: 'users',
    path: '/users',
    component: UserList,
    mainMenuLabel: 'Users',
  },
];
