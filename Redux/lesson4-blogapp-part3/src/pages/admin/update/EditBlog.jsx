import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { connect } from 'react-redux'
import { editBlogFromDatabase, removeBlogFromDatabase } from '../../../actions/blogAction'
import { Button } from 'react-bootstrap'

const EditBlog = props => {
  return (
    <div>
        <h1 className='text-center my-5'>Edit Blog</h1>
        <BlogForm editblog={props.pvalue} onFormSubmit={a=>{
            props.dispatch(editBlogFromDatabase(props.pvalue.id,a));
            props.history.push('/admin')
        }}/>
        <Button variant='outline-danger' onClick={
            ()=>{
                props.dispatch(removeBlogFromDatabase(props.pvalue.id))
                props.history.push('/admin')
            }
        }>Remove blog</Button>
    </div>
  )
}
const mapStateToProps =(state,props)=>{
    return{
        pvalue:state.find(b=>{
            return b.id === props.match.params.id
        })
    }
}


export default connect(mapStateToProps)(EditBlog)