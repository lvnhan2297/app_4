import React from 'react'
import Banner from '../components/Banner'
import ListMovie from '../components/ListMovie'
import {API,apiKey} from '../constants/ApiUrl'
const HomePage = () => {
  return (
    <>
      <Banner urlApi={`${API}/discover/movie?sort_by=popularity.desc&page=1&api_key=${apiKey}`} title='Banner-home-page'/>
      <ListMovie title="Top TV Picks For Jack" 
      urlApi={`${API}/discover/tv?sort_by=popularity.desc&page=1&api_key=${apiKey}`}/>
      <ListMovie title="Trending Now" 
      urlApi={`${API}/discover/movie?sort_by=popularity.desc&page=1&api_key=${apiKey}`}/>
      <ListMovie title="Most Watched In Horror" 
      urlApi={`${API}/genre/27/movies?sort_by=popularity.desc&page=1&api_key=${apiKey}`}/>
      <ListMovie title="Top Rated" 
      urlApi={`${API}/movie/top_rated?api_key=${apiKey}`}/>
      <ListMovie title="Comedy Magic" 
      urlApi={`${API}/genre/35/movies?sort_by=popularity.desc&api_key=${apiKey}`}/>
    </>
  )
}

export default HomePage
