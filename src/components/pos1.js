import './pos1.css'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Button } from 'react-bootstrap';
function Pos1(props){
    return(
        <div className='pos1'>
            {props.homepage&&props.homepage.map(item=>(
                item.guarantee.slice(0,1).reverse().map(item_g=>(
            <div className='pos1_content'>
                <div className='pos1_title'>
                            <SettingsOutlinedIcon/>
                            <div>
                                <div className='text'>{item_g.title1}  </div>
                                <div className='text'>{item_g.title2}</div>
                            </div>
                            
                </div>
                <div className='pos1_category'>
                    <div className='pos1_border'>
                        <div className='pos1_div' >
                        <SettingsOutlinedIcon/>
                            <div >
                                <div className='text'>{item_g.title3} </div>
                            </div>
                        </div>
                        <div className='pos1_div' >
                        <SettingsOutlinedIcon/>
                            <div >
                                <div className='text'>{item_g.title4}	</div>
                            </div>
                        </div>

                        <div className='pos1_div' >
                        <SettingsOutlinedIcon/>
                            <div >
                                <div className='text'>{item_g.title5} </div>
                            </div>
                        </div>

                        <div className='pos1_div' >
                        <SettingsOutlinedIcon/>
                            <div >
                                <div className='text'>{item_g.title6} </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>

                ))
            )

            )}
            
                {/* content */}
            <div style={{backgroundColor:'yellowgreen', overflow:'auto', textAlign:'center'}}>
                <div style={{display:'inline-block', margin:'20px'}}>Bạn muốn laptop của bạn bền hơn - Hãy bảo dưỡng định kỳ</div>
                <Button>xem thêm </Button>
            </div>


        </div>
    )
}
export default Pos1;