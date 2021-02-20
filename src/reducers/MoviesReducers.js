import {
  FETCH_DATA_MOVIES,
  FETCH_DATA_MOVIES_SUCCESS
} from "../constants/ActionTypes.js";

const initialState = {
  loading: false,
  page: null,
  movies: [],
};

function collectionMovie(state = initialState, action ) {
  switch (action.type) {
    case FETCH_DATA_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.payload.page,
        movies: [...state.movies, ...action.payload.fetchedData]
      };
    default:
      return state;
  }
}

function collectionMovies(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA_MOVIES:
    case FETCH_DATA_MOVIES_SUCCESS:
      return {
        ...state,
        [action.payload.getDataBy]: collectionMovie(state[action.payload.getDataBy],action)
      };
    default:
      return state;
  }
}
export default collectionMovies;