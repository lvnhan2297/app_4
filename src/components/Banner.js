import React, { useEffect } from 'react'
// import BgBanner from '../assets/images/Banner-1.jpg'
import {fetchApiBanner} from '../actions/actionMovies'
import { connect } from 'react-redux';
import {urlImageBig} from '../constants/ApiUrl'
const Banner = ({urlApi,fetchApiBanner,dataBanner,title}) => {

  useEffect(() => {
    fetchApiBanner(urlApi,title)
  }, [])
  return (
    <>{dataBanner[title] && dataBanner[title].movies[0] &&
    <div id="hero" className="Hero" style={{backgroundImage: `url(${urlImageBig}/${dataBanner[title].movies[0].backdrop_path})`}}>
      <div className="content">
        <div className="title-big-movie glow">{dataBanner[title].movies[0].name||dataBanner[title].movies[0].original_title}</div>
        <p>{dataBanner[title].movies[0].overview}</p>
        <div className="button-wrapper">
          <a href="#" className="Button" data-primary="true">Watch now</a>
          <a href="#" className="Button" data-primary="false">+ My list</a></div>
      </div>
      <div className="overlay" />
    </div>}
    </>
  )
}

const mapStateToProps = state =>{
  return{
    dataBanner : state.collectionMovies
  }
}
export default connect(mapStateToProps,{fetchApiBanner})(Banner)
