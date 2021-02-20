import React, { useEffect } from 'react'
import ItemMovie from './ItemMovie'
import {fetchApiMovies} from '../actions/actionMovies'
import { connect } from 'react-redux';

const ListMovie = ({title,urlApi,fetchApiMovies,Movies,showAll}) => {
  useEffect(() => {
    !Object.keys(Movies).includes(title) &&
    fetchApiMovies(urlApi,title)
  }, [])
  
  const listMovie = showAll ? 
  Movies[title] && Movies[title].movies.map((item,index)=>
    <ItemMovie key={index} {...item}/>):
  Movies[title] && Movies[title].movies.slice(0,5).map((item,index)=>
    <ItemMovie key={index} {...item}/>)
  return (
    <div className="TitleList">
      <div className="Title">
        <h3>{title}</h3>
        <div className="titles-wrapper">
          {listMovie}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    Movies: state.collectionMovies
  }
}

export default connect(mapStateToProps,{fetchApiMovies})(ListMovie)
