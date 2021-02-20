import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Search from '../components/Search'
import UserProfile from '../components/UserProfile'
const Header = () => {
  return (
    <div className="Header">
      <Link to='/'><Logo/></Link>
      <Navigation/>
      <Search/>
      <UserProfile/>
    </div>
  )
}

export default Header
