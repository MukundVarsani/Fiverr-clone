import React from 'react'
import "./featured.css"

export const Featured = () => {
  return (
    <div className='Featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>Freelance</i> services for your Bussiness</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./images/search.png" alt=""  style={{width:"20px"}}/>
                        <input type="text" name="" id=""  placeholder='Write something'/>
                    </div>
                    <button className='searchBtn'>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src="./images/right.png" alt="" />
            </div>
        </div>

    </div>
  )
}
