import { Button, Form } from 'react-bootstrap'
import './pos4.css'
function Pos4(){
    return(
        <div className='pos4'>
            <div className='pos4_container'>
                <h3>Đặt lịch hẹn</h3>
                <div>hãy đặt lịch trước để chúng tôi giúp bạn tốt hơn</div>
                <div className='pos4_form'>
                    <div className ='pos4_left'>
                        <div className ='pos4_top'>
                        <Form.Control  className='pos4_top1' type="text" placeholder="Normal text" />
                         <Form.Control  className='pos4_top2' type="text" placeholder="Normal text" />
                        <Form.Control className='pos4_top3' type="text" placeholder="Normal text" />
                        </div>
                        <div className ='pos4_mid'>
                        <Form.Control  className='pos4_mid1' type="text" placeholder="Normal text" />
                         <Form.Control  className='pos4_mid2' type="text" placeholder="Normal text" />
                        <Form.Control className='pos4_mid3' type="text" placeholder="Normal text" />
                        <Form.Control className='pos4_mid4' type="text" placeholder="Normal text" />
                        </div>
                        <Form.Control className='pos4_end' type="text" placeholder="Normal text" />

                    </div>
                    <Button className='pos4_right'>
                        Đặt lịch
                    </Button>

                </div>
                <div>Liên hệ tổng đài 1800 6024 - Hoặc 085 245 3366 để được đặt lịch.</div>
            </div>
        </div>
    )
}
export default Pos4;