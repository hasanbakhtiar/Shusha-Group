import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
   <div className="d-flex align-items center justify-content-center">
     <Link to=".">
        <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
    </Link>
   </div>
  )
}

export default NotFoundPage