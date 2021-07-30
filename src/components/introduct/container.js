import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import './container.css'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SwiperCore, {
    Autoplay,
  Navigation
} from 'swiper/core';
import { Button, Image } from 'react-bootstrap'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
SwiperCore.use([Navigation, Autoplay]);
function Container(){
    
    return(
        <div className="container">
            <Swiper navigation={true} autoplay={false} className="my_Swiper" >
                <SwiperSlide className='SwiperSlide'><Image src="https://suachualaptop24h.com/images/slideshow/2021/06/25/compress2/ve-chung-toi-0_1624614977.jpg.webp"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><Image src="https://suachualaptop24h.com/images/slideshow/2021/06/25/compress2/ve-chung-toi-0_1624614977.jpg.webp"/></SwiperSlide>
                <SwiperSlide className='SwiperSlide'><Image src="https://suachualaptop24h.com/images/slideshow/2021/06/25/compress2/ve-chung-toi-0_1624614977.jpg.webp"/></SwiperSlide>
            </Swiper>
            <div className="i_content1">
                <h2 className="i_title"> <FavoriteBorderOutlinedIcon color="primary" fontSize="large" style={{position:'relative', left:'12px', zIndex:'-1'}}/>Về chúng tôi </h2>
                <div className="canvar"></div>
                <div className="i_content1_box">
                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <h3>Giới thiệu về hệ thống sửa lapttop</h3>
                        <p>27/12/2018</p>
                    </div>

                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <h3>Giới thiệu về hệ thống sửa lapttop</h3>
                        <p>27/12/2018</p>
                    </div>

                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <h3>Giới thiệu về hệ thống sửa lapttop</h3>
                        <p>27/12/2018</p>
                    </div>
                    
                </div>
                <div className="btn">
                      <Button style={{marginTop:'20px'}} variant="outline-info" > xem thêm <ArrowRightAltIcon color='56aaff'/> </Button>

                </div>
            </div>


             <div className="i_content1">
                <h2 className="i_title"> <FavoriteBorderOutlinedIcon color="primary" fontSize="large" style={{position:'relative', left:'12px', zIndex:'-1'}}/>Tầm nhìn - Sứ mệnh - Giá trị cốt lõi </h2>
                <div className="canvar"></div>
                <div className="i_content1_box">
                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <h3>Giới thiệu về hệ thống sửa lapttop</h3>
                        <p>27/12/2018</p>
                    </div>

                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <h3>Giới thiệu về hệ thống sửa lapttop</h3>
                        <p>27/12/2018</p>
                    </div>

                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <h3>Giới thiệu về hệ thống sửa lapttop</h3>
                        <p>27/12/2018</p>
                    </div>
                    
                </div>
                      <Button style={{marginTop:'20px'}} variant="outline-info" > xem thêm <ArrowRightAltIcon color='56aaff'/> </Button>
            </div>



             <div className="i_content1">
                <h2 className="i_title"> <FavoriteBorderOutlinedIcon color="primary" fontSize="large" style={{position:'relative', left:'15px', zIndex:'-1'}}/>Điểm mạnh của laptop 24h.com </h2>
                <div className="canvar"></div>
                <div className="i_content1_box">
                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <p>Giới thiệu về hệ thống sửa lapttop</p>
                        <p>27/12/2018</p>
                    </div>

                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <p>Giới thiệu về hệ thống sửa lapttop</p>
                        <p>27/12/2018</p>
                    </div>

                    <div className="box">
                        <Image src ="https://suachualaptop24h.com/images/news/2020/08/05/large/gioi_thieu_suachualaptop24h_1596611494.jpg.webp"/>
                        <p>Giới thiệu về hệ thống sửa lapttop</p>
                        <p>27/12/2018</p>
                    </div>
                    
                </div>
                      <Button style={{marginTop:'20px'}} variant="outline-info" > xem thêm <ArrowRightAltIcon color='56aaff'/> </Button>
            </div>


        </div>
    )
}
export default Container;