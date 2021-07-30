import {  Form, FormControl, Image } from "react-bootstrap"
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneIcon from '@material-ui/icons/Phone';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Close from "@material-ui/icons/Close";



const Header=(props)=>{
    const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [Display, setDisplay] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
   useEffect(() => {
    setLoading(true);
  setCountries(props.product)
  }, props.product);
const ok=()=>{
 setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setDisplay(!Display)
}
console.log(filteredCountries,countries)
   
    return(
        <div  className ='header_wrapper'>
            <div className ='header container_'>
                <Image className='logo' src="https://suachualaptop24h.com/images/config/logo-web_1620285275.png" rounded/>
                <Form className="header_flex">
                    <div>
                    <FormControl
                        className="from_search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <ul className="content_search" style={{display:Display===true?'block':"none"}}>
                        <Close  onClick={()=>setDisplay(!Display)} style={{float: "right", cursor:'pointer', margin:"10px"}}/>
                        {filteredCountries.map(item=>(
                            <li className='list_search'>
                                <Image style={{width:"20%"}} src={item.img}/>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            
                             </li>
                        )
                            
                        )}
                        
                    </ul>
                    </div>
                
                    <SearchIcon onClick={()=>ok()}/>
                </Form>
                    <div  className='header_calendar'>
                        <CalendarTodayIcon className='icon_calendar'/>
                        <div> Đặt lịch <br/> Sửa chữa</div>
                        
                    </div>
                    <div className='header_phone'>
                        <PhoneIcon  className='icon_phone'/>
                        <div>Hotline miễn phí <br/>012345678 </div>
                    </div>
               

            </div>
        </div>

    )
}
export default Header;