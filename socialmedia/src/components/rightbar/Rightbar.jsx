import React from 'react'

const Rightbar = () => {
  return (
    <div className='rightbar'>
           <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="bithdayImg" src="assets/giftbox.png" alt="" />
          <span className="birthdayText"><b>I U </b>and 3 other have there bithday today</span>       
        </div>
        <img src="assets/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
           <li className="rightBarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/person/3.jpg" className="rightbarProfileImg" alt="" />
                <span className="rightOnline"></span>
              </div>
              <span className="rightbarUsername"></span>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
