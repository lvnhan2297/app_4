import React from 'react'
import Banner from '../components/Banner'
import ListMovie from '../components/ListMovie'
import {API,apiKey} from '../constants/ApiUrl'

const TVShowContainer = () => {
  return (
    <div>
      <Banner urlApi={`${API}/trending/movie/week?api_key=${apiKey}`} title='Banner-movie-page'/>
      <ListMovie title="Most Watched Movie" 
      urlApi={`${API}/movie/popular?api_key=${apiKey}`} showAll={true}/>
    </div>
  )
}

export default TVShowContainer
