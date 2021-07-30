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

function Container(props){
    return(
        <div>
            {props.homepage&&props.homepage.map(item=>(
                        
                    
                <div className='container_swiper' >
                    <div className='box_left'>
                        <Swiper navigation={true} autoplay={true} className="my_Swiper" >
                            {item.swiper.map(item_s=>(
                            <SwiperSlide className='SwiperSlide'><Image src={item_s.img}/></SwiperSlide>

                            ))}
                        </Swiper>
                        <div className='container_content'>
                             {item.swiper.map(item_s=>(
                             <p>{item_s.title}</p>

                            ))}
                           
                
                        </div>
                    </div>
                
                <div className='box_right'>
                    {item.image.slice(0,2).map(item_img=>(
                                          <Image src={item_img.img}/>


                            ))}
                </div>
                
                </div>
                ))}
        </div>

    )
}
export default Container;