import { lazy } from 'react';

const HomePageContainer = lazy(() => import('./containers/HomePageContainer'));
const TVShowContainer = lazy(() => import('./containers/TVShowContainer'));
const MoviesContainer = lazy(() => import('./containers/MoviesContainer'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePageContainer
  },
  {
    path: '/TV-Show',
    exact: true,
    component: TVShowContainer
  },
  {
    path: '/Movies',
    exact: true,
    component: MoviesContainer
  }
]