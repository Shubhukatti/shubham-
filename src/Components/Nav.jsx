import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import "./Nav.css"

export default function Nav() {
  return (
      <div className="header">
          <div className="header_left">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" className="header_image" />
              <div className="header_search">
                  <SearchOutlinedIcon/>
                  <input type="text" placeholder='Search' />
              </div>
          </div>
    </div>
  )
}
