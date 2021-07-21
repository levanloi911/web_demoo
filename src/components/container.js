import { Swiper, SwiperSlide } from "swiper/react";
import './container.css'
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
  Navigation
} from 'swiper/core';
import { Image } from "react-bootstrap";

SwiperCore.use([Navigation, Autoplay]);

function Container(){
    return(
            <div className='container_swiper'>
                <div style={{width:'70%', display:'inline-block'}}>
                    <div style={{float:'left', width:'70%', height:''}}>
                        <Swiper navigation={true} autoplay={true} className="my_Swiper" >
                            <SwiperSlide className='SwiperSlide'><Image src='https://suachualaptop24h.com/images/slideshow/2020/07/20/compress2/suachualaptop24h-tantam-uytin-chuyennghiep_1595238883.jpg.webp'/></SwiperSlide>
                            <SwiperSlide className='SwiperSlide'><Image src='https://suachualaptop24h.com/images/slideshow/2020/07/20/compress2/suachualaptop24h-tantam-uytin-chuyennghiep_1595238883.jpg.webp'/></SwiperSlide>
                            <SwiperSlide className='SwiperSlide'><Image src='https://suachualaptop24h.com/images/slideshow/2020/07/20/compress2/suachualaptop24h-tantam-uytin-chuyennghiep_1595238883.jpg.webp'/></SwiperSlide>
                        </Swiper>
                    
                        <div style={{float:'left', width:'20%', textAlign:'center',padding:'10px', borderRadius:'5px', borderColor:'red', border:'2px  solid red'}}>	
						Dịch vụ tại nhà và Văn phòng nhanh chóng, chuyên nghiệp</div>
                        <div style={{float:'left', width:'20%', textAlign:'center',padding:'10px', borderRadius:'5px', borderColor:'red', border:'2px  solid red'}}>	
						Dịch vụ tại nhà và Văn phòng nhanh chóng, chuyên nghiệp</div>
                        <div style={{float:'left', width:'20%', textAlign:'center',padding:'10px', borderRadius:'5px', borderColor:'red', border:'2px  solid red'}}>	
						Dịch vụ tại nhà và Văn phòng nhanh chóng, chuyên nghiệp</div>
                        <div style={{float:'left', width:'20%', textAlign:'center',padding:'10px', borderRadius:'5px', borderColor:'red', border:'2px  solid red'}}>	
						Dịch vụ tại nhà và Văn phòng nhanh chóng, chuyên nghiệp</div>
                               
                    </div>
                
                <div className='image' style={{float:'right', width:'27%', marginLeft:'10px'}}>
                <Image src='https://suachualaptop24h.com/images/banners/compress/sua-laptop-tan-nha_1623750246.jpeg.webp'/>
                <Image src='https://suachualaptop24h.com/images/banners/compress/sua-laptop-tan-nha_1623750246.jpeg.webp'/>
                </div>
                
                </div>
            </div>
    )
}
export default Container;