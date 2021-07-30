import { Button, Image } from 'react-bootstrap'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import VPlayer from 'react-vplayer';
import './pos6.css'
 function Pos6(props){
     return(
         <div className='pos6'>
           {props.homepage&&props.homepage.map(item=>(
             <div className='pos6_container'>
                <p>Khách hàng nói về chúng tôi</p>
                <div className='pos6_content'>
                  {item.danhgia&&item.danhgia.slice(0,3).map(item_d=>(
                    <div>
                        <div className='pos6_box'>
                            <Image src={item_d.img}></Image>
                            <p className="pos6_text_content">{item_d.content}</p>
                        </div>
                        <div className='pos6_profile_box'>
                            <Image src={item_d.imguser}></Image>
                            <div>
                                <div className='pos6_text'>{item_d.username}</div>
                                <div className='pos6_text1'>Việc tử tế, người tử tế</div>
                            </div>
                        </div>
                     </div>

                  ))}
                   
                  
                  
                 </div>
                <Button   variant="outline-info" > xem thêm <ArrowRightAltIcon color='action'/> </Button>
           <div className='pos6_image'>
             <h3>HÌNH ẢNH KHÁCH HÀNG & CÁC HOẠT ĐỘNG CỦA CHÚNG TÔI</h3>
          
                <div className='pos6_grid'>
                  <Image src='https://suachualaptop24h.com/images/albums/resized/ung-ho-bac-giang-chong-dich-covid-19-2_1622600287.jpg.webp'/>
                  <Image src='https://suachualaptop24h.com/images/albums/resized/ung-ho-bac-giang-chong-dich-covid-19-2_1622600287.jpg.webp'/>
                  <Image src='https://suachualaptop24h.com/images/albums/resized/ung-ho-bac-giang-chong-dich-covid-19-2_1622600287.jpg.webp'/>
                  <Image src='https://suachualaptop24h.com/images/albums/resized/ung-ho-bac-giang-chong-dich-covid-19-2_1622600287.jpg.webp'/>
                  <Image src='https://suachualaptop24h.com/images/albums/resized/ung-ho-bac-giang-chong-dich-covid-19-2_1622600287.jpg.webp'/>
                  <Image src='https://suachualaptop24h.com/images/albums/resized/ung-ho-bac-giang-chong-dich-covid-19-2_1622600287.jpg.webp'/>

                </div>
                <Button  variant="outline-info" > xem thêm <ArrowRightAltIcon color='56aaff'/> </Button>
            </div>

            <div className='pos6_video'>
             <h3>VIDEO</h3>
          
                <div className='pos6_video'>
                            <VPlayer
                    source={[
                      {
                        url:
                          "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/720p.mp4",
                        type: "video/mp4",
                        quality: 720
                      },
                      {
                        url:
                          "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/1080p.mp4",
                        type: "video/mp4",
                        quality: 1080
                      },
                      {
                        url:
                          "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/480p.mp4",
                        type: "video/mp4",
                        quality: 480
                      },
                      {
                        url:
                          "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/360p.mp4",
                        type: "video/mp4",
                        quality: 360
                      }
                    ]}/>
                    <h4>Video Demo</h4>
                </div>
            </div>

            <div className='pos6_image'>
             <h3>CÁC HOẠT ĐỘNG VÌ CỘNG ĐỒNG</h3>
                <div className='pos6_grid'>
                  {item.hoatdong&&item.hoatdong.slice(0,3).map(item_h=>(
                  <div>
                      <Image src={item_h.img}/>
                      <h3 className='pos6_title'>{item_h.title}</h3>
                      <div className='pos6_content'>{item_h.content}</div>
                  </div>
                  ))}
                    
                   </div>
                <Button  variant="outline-info" > xem thêm <ArrowRightAltIcon color='action'/> </Button>
            </div>

             </div>
              ))}
         </div>
     )
 }
 export default  Pos6;