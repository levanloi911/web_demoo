import './pos2.css'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Button, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import { useMediaQuery } from 'react-responsive'
function Pos2(props){
    const isBigScreen = useMediaQuery({ query: '(min-width: 1023px)' })

    return(
        <div className='pos2'>
             {props.homepage&&props.homepage.map(item=>(
            <div className='content_pos2'>
            <h1> <FavoriteBorderOutlinedIcon style={{position:'relative', left:'12px', zIndex:'-1'}}/>Chọn Sửa chữa Laptop 24h.com</h1>
            <Swiper slidesPerView={isBigScreen?4:2} className='service_pos2'>
               
                    {item.boxblock&&item.boxblock.map(item_b=>(
                    <SwiperSlide className='SwiperSlide_pos2'>
                    <div className='box_service'>
                    <Image style={{maxWidth:'100%', width:'100%'}} src={item_b.img}/>
                    <div className='content_box'>
                        <div className="pos2_box_title">{item_b.title}</div>
                        <p className="pos2_box_content"> {item_b.content}</p>
                        <Button>xem thêm</Button>
                    </div>
                    </div>
                </SwiperSlide>
                    ))}
                
             
              

            </Swiper>
            </div>
               ))}
        </div>
    )
}
export default Pos2;