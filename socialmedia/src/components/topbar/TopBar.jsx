import { Chat,Notifications, Search, Person} from "@mui/icons-material"
import "./topbar.css"
function TopBar() {
  return (
    <div className="topbarContainer">
       <div className="topbarLeft">
        <span className="logo">social</span>
       </div>
       <div className="topbarCenter">
           <div className="serachbar">
              <Search/>
              <input type="text" placeholder="search for friend,post or video" className="searchInput" />
           </div>
       </div>
       <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcon">
              <div className="topbarIconitem">
                <Person/>
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconitem">
                <Chat/>
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconitem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
              </div>
          </div>
        <img src="./assets/person/1.jpg" alt="" className="topbarImg" />
       </div>
    </div>
  )
}

export default TopBar
