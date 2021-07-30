import { Button, Form } from 'react-bootstrap'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './pos4.css'
function Pos4(props){
     const [startDate, setStartDate] = useState(new Date());
    return(
        <div className='pos4'>
            {props.homepage&&props.homepage.map(item=>(
            <div className='pos4_container'>
                <h3>Đặt lịch hẹn</h3>
                <div>hãy đặt lịch trước để chúng tôi giúp bạn tốt hơn</div>
                <div className='pos4_form'>
                    <div className ='pos4_left'>
                        <div className ='pos4_top'>
                        <Form.Control  className='pos4_top1' type="text" placeholder="Họ tên" />
                         <Form.Control  className='pos4_top2' type="text" placeholder="Số điện thoại" />
                        <Form.Control className='pos4_top3' type="text" placeholder="Địa chỉ của bạn" />
                        </div>
                        <div className ='pos4_mid'>
                        <select className="pos4_mid1">
                            <option value="">Chọn dịch vụ</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                        </select>
                          <select className="pos4_mid2">
                            <option value="">Chọn thời gian sửa</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                        </select>
                        <div className='pos4_mid3'><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>
                         <select className="pos4_mid4">
                            <option value="">Chọn chi nhánh</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                        </select>
                        </div>
                        <Form.Control className='pos4_end' type="text" placeholder="Nội dung sửa chữa" />

                    </div>
                    <Button className='pos4_right'>
                        Đặt lịch
                    </Button>

                </div>
                {item.sdt&&item.sdt.map(item_sdt=>(
                  <div>{item_sdt.sdttongdai}</div>
                ))}
            </div>
        
            ))}
            </div>
    )
}
export default Pos4;