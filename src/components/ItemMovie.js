import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const ItemMovie = () => {
  const [toggled, setToggled] = useState(false)
  const handleClick = () => {
    toggled?setToggled(false):setToggled(true)
  }
  return (
    <div className="Item" style={{backgroundImage: 'url("http://image.tmdb.org/t/p/original/mZjZgY6ObiKtVuKVDrnS9VnuNlE.jpg")'}}>
      <div className="overlay">
        <div className="title">The Good Doctor</div>
        <div className="rating">
          <span>8.6</span><span> / 10</span>
        </div>
        <div className="plot">
          A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives
        </div>
        <div data-toggled={toggled} className="ListToggle" onClick={handleClick}>
          <div>
            <FcLikePlaceholder className="icon-item"/>
            <FcLike className="icon-item"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemMovie
