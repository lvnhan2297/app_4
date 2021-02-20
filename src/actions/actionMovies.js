import {FETCH_DATA_MOVIES, FETCH_DATA_MOVIES_SUCCESS} from '../constants/ActionTypes'
import  {fetchData}  from '../utils/apiCaller';

export const fetchDataMovies = (getDataBy) => {
  return {
    type: FETCH_DATA_MOVIES,
    payload: {getDataBy}
  }
}
export const fetchDataMoviesSuccess = (fetchedData, page, getDataBy) => {
  return {
    type: FETCH_DATA_MOVIES_SUCCESS,
    payload: {fetchedData, page, getDataBy}
  }
}

export const fetchApiMovies = (API_URL,getDataBy) => async (dispatch) => {
  try {
    await dispatch(fetchDataMovies(getDataBy))
    const data = await fetchData(API_URL)
    const { page, results } = data;
    await dispatch(fetchDataMoviesSuccess(results, page, getDataBy))
  } catch (err) {
    console.log('fetchData error', err);
  }
}
export const fetchApiBanner = (API_URL,getDataBy) => async (dispatch) => {
  try {
    await dispatch(fetchDataMovies(getDataBy))
    const data = await fetchData(API_URL)
    const firstMovie = data.results[0]
    await dispatch(fetchDataMoviesSuccess([firstMovie], null, getDataBy))
  } catch (err) {
    console.log('fetchData error', err);
  }
}