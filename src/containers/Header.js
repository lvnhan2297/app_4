import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Search from '../components/Search'
import UserProfile from '../components/UserProfile'
const Header = () => {
  return (
    <div className="Header">
      <Logo/>
      <Navigation/>
      <Search/>
      <UserProfile/>
    </div>
  )
}

export default Header
