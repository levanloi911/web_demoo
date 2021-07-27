import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import './container.css'
import SwiperCore, {
    Autoplay,
  Navigation
} from 'swiper/core';
import { Image } from "react-bootstrap";

SwiperCore.use([Navigation, Autoplay]);

function Container(){
    return(
                <div className='container_swiper' >
                    <div className='box_left'>
                        <Swiper navigation={true} autoplay={true} className="my_Swiper" >
                            <SwiperSlide className='SwiperSlide'><Image src='https://suachualaptop24h.com/images/slideshow/2020/07/20/compress2/suachualaptop24h-tantam-uytin-chuyennghiep_1595238883.jpg.webp'/></SwiperSlide>
                            <SwiperSlide className='SwiperSlide'><Image src='https://suachualaptop24h.com/images/slideshow/2020/07/20/compress2/suachualaptop24h-tantam-uytin-chuyennghiep_1595238883.jpg.webp'/></SwiperSlide>
                            <SwiperSlide className='SwiperSlide'><Image src='https://suachualaptop24h.com/images/slideshow/2020/07/20/compress2/suachualaptop24h-tantam-uytin-chuyennghiep_1595238883.jpg.webp'/></SwiperSlide>
                        </Swiper>
                        <div className='container_content'>
                            <p>1Dịch vụ tại nhà và Văn phòng nhanh chóng, chuyên nghiệp</p>
                            <p>2Dịch vụ tại nhà và Văn phòng nhanh chóng, chuyên nghiệp</p>
                            <p>2Dịch vụ tại nhà và Văn phòng nhanh chóng, chuyên nghiệp</p>
                            <p>2Dịch vụ tại nhà và Văn phòng nhanh chóng, chuyên nghiệp</p>
                        </div>
                    </div>
                
                <div className='box_right'>
                <Image src='https://suachualaptop24h.com/images/banners/compress/sua-laptop-tan-nha_1623750246.jpeg.webp'/>
                <Image src='https://suachualaptop24h.com/images/slideshow/2020/07/20/compress2/suachualaptop24h-tantam-uytin-chuyennghiep_1595238883.jpg.webp'/>
                </div>
                
                </div>
    )
}
export default Container;