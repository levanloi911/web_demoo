import './pos2.css'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Button, Image } from 'react-bootstrap';
function Pos2(){
    return(
        <div className='pos2'>
            <div className='content_pos2'>
            <h1> <FavoriteBorderOutlinedIcon style={{position:'relative', left:'12px', zIndex:'-1'}}/>Chọn Sửa chữa Laptop 24h.com</h1>
            <div className='service_pos2'>
                <div className='box_service'>
                <Image style={{maxWidth:'100%', width:'100%'}} src='https://suachualaptop24h.com/images/strengths/resized/z2001821858658_7393c462e0f4b247e6752951c230ec2d_1596184525.jpg.webp'/>
                <div className='content_box'>
                    <h2>Dịch vụ sửa chưa laptop</h2>
                    <h3> với độ ngũ kỹ thuật tay nghề cao, quy trình chuyên nghiệp và bài bản...</h3>
                    <Button>xem thêm</Button>
                </div>

                </div>

                <div className='box_service'>
                    <Image style={{maxWidth:'100%', width:'100%'}} src='https://suachualaptop24h.com/images/strengths/resized/z2001821858658_7393c462e0f4b247e6752951c230ec2d_1596184525.jpg.webp'/>
                    <div className='content_box'>
                        <h2>Dịch vụ sửa chưa laptop</h2>
                        <h3> với độ ngũ kỹ thuật tay nghề cao, quy trình chuyên nghiệp và bài bản...</h3>
                        <Button>xem thêm</Button>
                    </div>
                </div>

                <div className='box_service'>
                    <Image style={{maxWidth:'100%', width:'100%'}} src='https://suachualaptop24h.com/images/strengths/resized/z2001821858658_7393c462e0f4b247e6752951c230ec2d_1596184525.jpg.webp'/>
                    <div className='content_box'>
                        <h2>Dịch vụ sửa chưa laptop</h2>
                        <h3> với độ ngũ kỹ thuật tay nghề cao, quy trình chuyên nghiệp và bài bản...</h3>
                        <Button>xem thêm</Button>
                    </div>
                </div>

                <div className='box_service'>
                    <Image style={{maxWidth:'100%', width:'100%'}} src='https://suachualaptop24h.com/images/strengths/resized/z2001821858658_7393c462e0f4b247e6752951c230ec2d_1596184525.jpg.webp'/>
                    <div className='content_box'>
                        <h2>Dịch vụ sửa chưa laptop</h2>
                        <h3> với độ ngũ kỹ thuật tay nghề cao, quy trình chuyên nghiệp và bài bản...</h3>
                        <Button>xem thêm</Button>
                    </div>
                </div>

                

            </div>
            </div>
        </div>
    )
}
export default Pos2;