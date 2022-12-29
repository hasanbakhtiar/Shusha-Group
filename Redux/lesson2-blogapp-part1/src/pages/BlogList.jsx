import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleBlog'

const BlogList = () => {
  return (
    <Row>
        
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
    </Row>
  )
}

export default BlogList