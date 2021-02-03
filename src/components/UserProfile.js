import React from 'react'
import ImgProfile from '../assets/images/profile-picture-default.png'
const UserProfile = () => {
  return (
  <div className="UserProfile">
    <div className="User">
      <div className="name">Jack Oliver</div>
      <div className="image">
        <img src={ImgProfile} alt="profile" />
      </div>
    </div>
  </div>
  )
}

export default UserProfile
