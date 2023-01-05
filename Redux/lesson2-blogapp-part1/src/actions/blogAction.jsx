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

export const removeBlog = ()=>({
    type:"REMOVE_BLOG"
})