import './orderCalendar.css'
import React, {useState} from 'react'
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import MessageIcon from '@material-ui/icons/Message';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Button, Form } from 'react-bootstrap';
function OderCalendar(){
    const [open, setOpen] = useState(false)
    return(
        <div>
            <div className='oderCalendar' onClick ={()=>setOpen(!open)}>
                <TodayOutlinedIcon style={{ color:  'green', width:'40px', height:'40px' }}/>
                <p style={{fontSize:'10px'}}>đặt lịch</p>
            </div>
            <div className='messenger' >
                <a  href='https://www.facebook.com/messages/t/100004645114771'>
                    <MessageIcon fontSize='large'/>
                </a>
            </div>

            <div className='notification' >
                <a  href='https://www.facebook.com/messages/t/100004645114771'>
                    <NotificationsActiveIcon fontSize='large'/>
                </a>
            </div>

            <div style={{display: open===true ? "block" : "none"}} class="modal">
                <div   class="modal-content">
                    <CloseIcon  onClick={()=>{setOpen(!open)}} style={{ float:'right'}}/>
                    <h3>ĐẶT LỊCH HẸN SỬA CHỮA</h3>
                    <div>Hãy đặt lịch trước để chúng tôi phục vụ bạn tốt hơn</div>
                    <Form.Control  className='' type="text" placeholder="Họ tên" />
                    <Form.Control  className='' type="text" placeholder="Số điện thoại" />
                    <Form.Control  className='' type="text" placeholder="Địa chỉ của bạn" />
                    <Form.Control  className='' type="text" placeholder="Yêu cầu dịch vụ" />
                    <Form.Control  className='' type="text" placeholder="Chọn thời gian sửa" />
                    <Form.Control  className='' type="text" placeholder="Ngày sửa" />
                    <Form.Control  className='' type="text" placeholder="Chi Nhánh" />
                    <Form.Control  className='' type="text" placeholder="Mô tả lỗi" />
                    <Button color='FE5E07'>Đặt lịch</Button>
                    <div>Liên hệ tổng đài 1800 6024 hoặc 085 245 3366 để được đặt lịch</div>




                </div>
            </div>
        </div>
        
    )
}
export default OderCalendar;