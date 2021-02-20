import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div id="navigation" className="Navigation">
      <nav>
        <ul>
          <NavLink exact to='/' activeClassName="selectedLink">Home</NavLink>
          <NavLink exact to='/TV-Show' activeClassName="selectedLink">TV Shows</NavLink>
          <NavLink exact to='/Movies' activeClassName="selectedLink">Movies</NavLink>
          <NavLink exact to='/Cast' activeClassName="selectedLink">Cast</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
