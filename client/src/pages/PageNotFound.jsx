import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='text-center pt-32 text-2xl '>
        <p>Page Not Found...</p>
        <Link to={'/'}> Back to Home</Link>
    </div>
  )
}

export default PageNotFound
