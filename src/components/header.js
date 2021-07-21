import { Button, Form, FormControl, Image } from "react-bootstrap"
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneIcon from '@material-ui/icons/Phone';
import './header.css'
const Header=()=>{
    return(
        <div  className ='header_wrapper'>
            <div className ='header container'>
                <div className='header left'>
                <Image className='logo' src="https://suachualaptop24h.com/images/config/logo-web_1620285275.png" rounded/>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </div>
                <div className='header right'>
                    <div  className='header_calendar'>
                        <CalendarTodayIcon className='icon_calendar'/>
                        <div> đặt lịch <br/> ngày tháng</div>
                        
                    </div>
                    <div className='header_phone'>
                        <PhoneIcon  className='icon_phone'/>
                        <div>hotline miễn phí <br/>012345678 </div>
                    </div>
                </div>
               

            </div>
        </div>

    )
}
export default Header;