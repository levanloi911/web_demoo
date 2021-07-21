import './pos1.css'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Button } from 'react-bootstrap';
function Pos1(){
    return(
        <div className='pos1'>
            <div className='pos1_content'>
                <div className='pos1_title'>
                        <div style={{margin:'25px', marginLeft:'0'}}>
                            <SettingsOutlinedIcon/>
                            <div style={{display:'inline-block',textAlign:'left', marginLeft:'20px'}}>
                                <div>SỐ 1 VỀ BẢO HÀNH </div>
                                <div>SỬA CHỮA TẠI VIỆT NAM</div>
                            </div>
                            
                        </div>
                </div>
                <div className='pos1_category'>
                    <div className='pos1_border'>
                        <div className='pos1_div' >
                        <SettingsOutlinedIcon/>
                            <div style={{display:'inline-block',textAlign:'left', marginLeft:'10px'}}>
                                <div>SỐ 1 VỀ BẢO HÀNH </div>
                                <div>SỬA CHỮA TẠI VIỆT NAM</div>
                            </div>
                        </div>

                        <div className='pos1_div' >
                        <SettingsOutlinedIcon/>
                            <div style={{display:'inline-block',textAlign:'left', marginLeft:'10px'}}>
                                <div>SỐ 1 VỀ BẢO HÀNH </div>
                                <div>SỬA CHỮA TẠI VIỆT NAM</div>
                            </div>
                        </div>
                        <div className='pos1_div' >
                        <SettingsOutlinedIcon/>
                            <div style={{display:'inline-block',textAlign:'left', marginLeft:'10px'}}>
                                <div>SỐ 1 VỀ BẢO HÀNH </div>
                                <div>SỬA CHỮA TẠI VIỆT NAM</div>
                            </div>
                        </div>
                        <div className='pos1_div' >
                        <SettingsOutlinedIcon/>
                            <div style={{display:'inline-block',textAlign:'left', marginLeft:'10px'}}>
                                <div>SỐ 1 VỀ BẢO HÀNH </div>
                                <div>SỬA CHỮA TẠI VIỆT NAM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* content */}
            <div style={{backgroundColor:'yellowgreen', overflow:'auto', textAlign:'center'}}>
                <div style={{display:'inline-block', margin:'20px'}}>Bạn muốn laptop của bạn bền hơn - Hãy bảo dưỡng định kỳ</div>
                <Button>xem thêm </Button>


            </div>


        </div>
    )
}
export default Pos1;