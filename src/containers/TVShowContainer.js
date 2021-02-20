import React from 'react'
import Banner from '../components/Banner'
import ListMovie from '../components/ListMovie'
import {API,apiKey} from '../constants/ApiUrl'

const TVShowContainer = () => {
  return (
    <div>
      <Banner urlApi={`${API}/trending/tv/week?api_key=${apiKey}`} title='Banner-tv-page'/>
      <ListMovie title="Most Watched Movie TV Shows" 
      urlApi={`${API}/tv/popular?api_key=${apiKey}`} showAll={true}/>
    </div>
  )
}

export default TVShowContainer
