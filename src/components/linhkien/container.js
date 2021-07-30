import { Button, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "./container.css"
import SwiperCore, {
    Autoplay,
  Navigation
} from 'swiper/core';
import { useMediaQuery } from 'react-responsive'
function Container(props){
    const isBigScreen = useMediaQuery({ query: '(min-width: 1023px)' })
    SwiperCore.use([Navigation, Autoplay]);
    return(
        <div className="container">
            <div>
                <Swiper navigation={true} slidesPerView={isBigScreen?2:1} className='service_pos2'>
                    <SwiperSlide className='SwiperSlide_pos2' style={{with:'100%'}}>
                    <Image style={{maxWidth:'100%', width:'100%', margin:'5px', padding:'5px'}} src='https://suachualaptop24h.com/images/slideshow/2021/01/26/compress2/banner_top_linhkien_wd_ssd_1611628249.jpg.webp'/>
                    <span className="name">Bảo hành dài hạn <br/> 1 đổi 1<br/> Kể cả cháy nổ</span>
                     </SwiperSlide>
                        <SwiperSlide className='SwiperSlide_pos2'>
                    <Image style={{maxWidth:'100%', width:'100%', margin:'5px', padding:'5px'}} src='https://suachualaptop24h.com/images/slideshow/2020/06/12/compress2/beb69df50de2f0bca9f3_1591954925.jpg.webp'/>
                             <span className="name">Bảo hành dài hạn <br/> 1 đổi 1<br/> Kể cả cháy nổ</span>
                     </SwiperSlide>
                    </Swiper>
            </div>

            <div className='list'>
                <a href="#">  {props.id==="3"?"LINH KIỆN laptop":"Phụ kiện laptop"} </a>
                    <a href="#">Bộ vi xử lý - CPU</a>
                        <a href="#">Ổ cứng</a>
                            <a href="#"> RAM LAPTOP</a>
                                <a href="#"> RAM LAPTOP</a>
             
            </div>

             <div className='product'>
                      {props.homepage&&props.homepage.map(item=>(
                <div className="hangsx">
                      {item.hangsx&&item.hangsx.map(item_h=>(
                        <div>
                            <input type="checkbox"/> {item_h.name}<br/>
                         </div> 
                       )) } 
                </div>
                 ) )}
                <div className="sanpham">
                    <div className='top_title'>
                        <p className='title'> {props.id==="3"?"LINH KIỆN laptop":"Phụ kiện laptop"}</p>
                         <select className="filter">
                            <option value="">sắp xếp theo</option>
                            <option value="AL">Giá thấp</option>
                            <option value="AK">Giá cao</option>
                        </select>
                    </div>
                    <div className="grid_sanpham">
                   {props.product&&props.product.filter(id => id.id_category === props.id).map(item=>(
                        <div>
                            <Image src={item.img}></Image>
                            <p className="name_product">{item.name}</p>
                            <del className='default_price'>{item.defaultprice}</del>
                            <p className='price'>{item.price}</p>
                        </div>
                   ))}
                    </div>
                   
                </div>
             
            </div>
        </div>
    )
}
export default Container;