import SideBar from '../../components/sidebar/SideBar'
import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/Rightbar'
import './home.css'
function Home() {
  return (
    <>
      <TopBar/> 
      <div className="homeContainer">
      <SideBar/>
      <Feed/>
      <RightBar/>
      </div>
     
    </>
  )
}

export default Home
