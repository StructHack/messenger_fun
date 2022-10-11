import React from 'react'
import './Header.css'
import phone from '../img/phone.png'
import video from '../img/video.png'
import ellipsis from '../img/ellipsis.png'

function Header() {
  return (
    <div className="header">
        <div className="header-identity">
            <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/309905244_1715970162118159_5903293560681647332_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6PpaxQAdMfsAX_DuJL-&_nc_ad=z-m&_nc_cid=5011&_nc_ht=scontent.fktm8-1.fna&oh=00_AT_coTas2xvWFthfMlykrKMC53laIeuX-BdWTbtRSE6mZQ&oe=6348FED3" />
            <div>
                <span>Poshan Bhandari</span><br/>
                <span>Active 10 minutes ago</span> 
            </div>
        </div>
        <div className="header-accessories">
        <img src={phone} />
        <img src={video} />
        <img src={ellipsis} />
        </div>
    </div>
  )
}

export default Header;