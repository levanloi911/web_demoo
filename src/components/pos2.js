import './pos2.css'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Button, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import { useMediaQuery } from 'react-responsive'
function Pos2(){
    const isBigScreen = useMediaQuery({ query: '(min-width: 1023px)' })

    return(
        <div className='pos2'>
            <div className='content_pos2'>
            <h1> <FavoriteBorderOutlinedIcon style={{position:'relative', left:'12px', zIndex:'-1'}}/>Chọn Sửa chữa Laptop 24h.com</h1>
            <Swiper slidesPerView={isBigScreen?4:2} className='service_pos2'>
                <SwiperSlide className='SwiperSlide_pos2'>
                <div className='box_service'>
                <Image style={{maxWidth:'100%', width:'100%'}} src='https://suachualaptop24h.com/images/strengths/resized/z2001821858658_7393c462e0f4b247e6752951c230ec2d_1596184525.jpg.webp'/>
                <div className='content_box'>
                    <h4>Dịch vụ sửa chưa laptop</h4>
                    <p> với độ ngũ kỹ thuật tay nghề cao, quy trình chuyên nghiệp và bài bản...</p>
                    <Button>xem thêm</Button>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide_pos2'>
                <div className='box_service'>
                <Image style={{ width:'100%', height:'auto'}}  width="auto" height="auto" src='https://suachualaptop24h.com/images/strengths/resized/z2001821858658_7393c462e0f4b247e6752951c230ec2d_1596184525.jpg.webp'/>
                <div className='content_box'>
                    <h4>Dịch vụ sửa chưa laptop</h4>
                    <p> với độ ngũ kỹ thuật tay nghề cao, quy trình chuyên nghiệp và bài bản...</p>
                    <Button>xem thêm</Button>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide_pos2'>
                <div className='box_service'>
                <Image style={{maxWidth:'100%', width:'100%'}} src='https://suachualaptop24h.com/images/strengths/resized/z2001821858658_7393c462e0f4b247e6752951c230ec2d_1596184525.jpg.webp'/>
                <div className='content_box'>
                    <h4>Dịch vụ sửa chưa laptop</h4>
                    <p> với độ ngũ kỹ thuật tay nghề cao, quy trình chuyên nghiệp và bài bản...</p>
                    <Button>xem thêm</Button>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide_pos2'>
                <div className='box_service'>
                <Image style={{maxWidth:'100%', width:'100%'}} src='https://suachualaptop24h.com/images/strengths/resized/z2001821858658_7393c462e0f4b247e6752951c230ec2d_1596184525.jpg.webp'/>
                <div className='content_box'>
                    <h4>Dịch vụ sửa chưa laptop</h4>
                    <p> với độ ngũ kỹ thuật tay nghề cao, quy trình chuyên nghiệp và bài bản...</p>
                    <Button>xem thêm</Button>
                </div>
                </div>
                </SwiperSlide>


               

                

            </Swiper>
            </div>
        </div>
    )
}
export default Pos2;