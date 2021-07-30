import './App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from "./components/footer";
import Header from "./components/header";
import OderCalendar from "./components/orderCanlendar";
import Router1 from './router/router';

function App() {
   const dispatch = useDispatch()
    const category = useSelector((state) => state.category.category)
    const category1 = useSelector((state) => state.category1.category1)
    const  homepage = useSelector((state) => state.home.homepage)
     const  product = useSelector((state) => state.product.products)
    useEffect(()=>{
    dispatch({ type: "API_CALL_REQUEST" })
    dispatch({ type: "API_CALL_REQUEST1" })
    dispatch({ type: "API_CALL_HOMEPAGE" })
    dispatch({ type: "API_CALL_PRODUCTS" })
 },[])
  return (
    <div className="App">
      <Header product={product}/>
      <Router1 category={category} category1={category1} />
      <Footer homepage={homepage}/>
      <OderCalendar/>
    </div>
  );
}

export default App;
