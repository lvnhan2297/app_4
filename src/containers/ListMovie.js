import React from 'react'
import ItemMovie from '../components/ItemMovie'
const ListMovie = () => {
  return (
    <div className="TitleList" data-loaded="true">
      <div className="Title">
        <h1>Top TV picks for Jack</h1>
        <div className="titles-wrapper">
          <ItemMovie/>
          <ItemMovie/>
          <ItemMovie/>
          <ItemMovie/>
          <ItemMovie/>
        </div>
      </div>
    </div>


  )
}

export default ListMovie
