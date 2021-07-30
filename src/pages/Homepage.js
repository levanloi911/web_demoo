import Container from "../components/container";
import Pos1 from "../components/pos1";
import Pos2 from "../components/pos2";
import Pos3 from "../components/pos3";
import Pos4 from "../components/pos4";
import Pos5 from "../components/pos5";
import Pos6 from "../components/pos6";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
function HomePage(){
    const dispatch = useDispatch()
    const  homepage = useSelector((state) => state.home.homepage)

    
useEffect(()=>{
    dispatch({ type: "API_CALL_REQUEST" })
    dispatch({ type: "API_CALL_REQUEST1" })
    dispatch({ type: "API_CALL_HOMEPAGE" })
 },[])
    return(
        <div style={{ marginBottom:'50px'}} >
         
            <Container homepage={homepage}/>
            <Pos1 homepage={homepage}/>
            <Pos2 homepage={homepage}/>
            <Pos3  homepage={homepage}/>
            <Pos4 homepage={homepage}/>
            <Pos5 homepage={homepage}/>
            <Pos6 homepage={homepage}/>
          
        </div>
    )
}
export default HomePage