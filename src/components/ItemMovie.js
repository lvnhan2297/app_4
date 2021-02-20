import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import {urlImage} from '../constants/ApiUrl'
const ItemMovie = ({name,backdrop_path,original_title,vote_average,overview}) => {
  
  const [toggled, setToggled] = useState(false)
  const handleClick = () => {
    toggled?setToggled(false):setToggled(true)
  }

  return (
    <div className="Item" style={{backgroundImage: `url(${urlImage}/${backdrop_path})`}}>
      <div className="overlay">
        <div className="title">{name||original_title}</div>
        <div className="rating">
          <span>{vote_average}</span><span> / 10</span>
        </div>
        <div className="plot">
          {overview}
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
