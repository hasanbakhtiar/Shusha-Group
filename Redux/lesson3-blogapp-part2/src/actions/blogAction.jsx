import { v4 as uuid } from 'uuid';
// ACTION
export const addBlog = ({title,desc,img}) => ({
  type: "ADD_BLOG",
  blog:{
    id:uuid(),
    title:title,
    desc:desc,
    img:img
  }
});

export const editBlog = (id,edited)=>({
    type:"EDIT_BLOG",
    id,
    edited

})

export const removeBlog = ({id})=>({
  type:"REMOVE_BLOG",
  id:id
})