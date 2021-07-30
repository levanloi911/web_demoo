import './navigation.css'
import HomeIcon from '@material-ui/icons/Home';
import React, { useEffect, useState } from 'react'
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
function Navigation(props){
    const [colormenu, setcolormenu] = useState('')
      const[category_filter, setcategory] = useState([])
       function filter() {
            const post_new= (props.category?props.category:[]).map((ct)=>{
                    const selectedPosts =props.category1 && props.category1.length &&props.category1.filter((item) => item.id_C=== ct.id);
                        return {
                            ...ct,
                            posts: selectedPosts
                        }})
                    setcategory(post_new)
        } 
console.log(category_filter )
useEffect(()=>{
    filter();
}, props.category1&&props.category)
    return(
        <div className='div_nav'>
            <ul>
                <li   onClick={()=>{setcolormenu("home")}}>
                        <Link   className="active" href="#home" to={`/`} 
                        style = {  colormenu === "home" ? {color: '#9f224e', borderBottom: '1px solid red' } : {}}>                        
                            <HomeIcon/></Link>
                             </li>
                {category_filter? category_filter.map(ct=>(
                <li  onClick={()=>{setcolormenu(ct.id)}}>
                    <Link   active  style = {  colormenu === ct.id ? {color: '#9f224e', borderBottom: '1px solid red' } : {}
                                }  to={`/${ct.id}/${ct.id}`} >  {ct.name}   </Link>
                                 <div className="dropdown-content">
                                {(ct.posts?ct.posts:[]).map(item=>(
                                    <a href="#">{item.name}</a>
                                ))}
                            </div>
                </li>
                )

                ): ""}
               
              


                <li className='nav_shopping'><a href="#about"><AddShoppingCartOutlinedIcon/>	Giỏ hàng 	</a></li>
            </ul>
        </div>
    )
}
export default Navigation