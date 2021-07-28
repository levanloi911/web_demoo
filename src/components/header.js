import {  Form, FormControl, Image } from "react-bootstrap"
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneIcon from '@material-ui/icons/Phone';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=()=>{
    return(
        <div  className ='header_wrapper'>
            <div className ='header container_'>
                <Image className='logo' src="https://suachualaptop24h.com/images/config/logo-web_1620285275.png" rounded/>
                <Form className="header_flex">
                    <FormControl
                        className="from_search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <SearchIcon/>
                </Form>
                    <div  className='header_calendar'>
                        <CalendarTodayIcon className='icon_calendar'/>
                        <div> Đặt lịch <br/> Sửa chữa</div>
                        
                    </div>
                    <div className='header_phone'>
                        <PhoneIcon  className='icon_phone'/>
                        <div>hotline miễn phí <br/>012345678 </div>
                    </div>
               

            </div>
        </div>

    )
}
export default Header;