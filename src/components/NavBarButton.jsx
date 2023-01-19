import React from 'react'
import { Link } from 'react-router-dom'


const NavBarButton = ({ btnText, toPage, textColor, activePage, showBtn }) => {

  console.log(showBtn)
  return (
    <>
      {showBtn
        ? <li className={`nav-item ${activePage}`}>
            <Link className={`nav-link ${textColor}`} to={toPage}>
              {btnText}
            </Link>
          </li>
        : ''
      }
    </>
  )
}

export default NavBarButton