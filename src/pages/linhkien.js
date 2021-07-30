import Container from "../components/linhkien/container";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
export default function Linhkien(props){
    let id = props.match.params.Id;
    const dispatch = useDispatch()
    const  homepage = useSelector((state) => state.home.homepage)
        const  product = useSelector((state) => state.product.products)
useEffect(()=>{
    dispatch({ type: "API_CALL_HOMEPAGE" })
    dispatch({ type: "API_CALL_PRODUCTS" })
 },[])
    return(
        <div> 
            <Container homepage={homepage}  product={product} id={id}/>
        </div>
    )
}