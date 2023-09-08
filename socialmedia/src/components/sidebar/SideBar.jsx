import React from 'react'
import "./sidebar.css"
import {RssFeed , Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,} from "@mui/icons-material"


const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="./assets/person/2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Bae Suzy</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/person/4.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Yoo-jung</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/person/5.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">I U</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/person/6.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Ji-Won</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/person/8.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">I U</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/person/10.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Song-Hye</span>
          </li>
          <li className="sidebarFriend">
            <img src="./assets/person/11.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Ye-Jin</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default sidebar
