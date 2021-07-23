import { Button, Image } from 'react-bootstrap'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import VPlayer from 'react-vplayer';
import './pos6.css'
 function Pos6(){
     return(
         <div className='pos6'>
             <div className='pos6_container'>
                <p>Khách hàng nói về chúng tôi</p>
                <div className='pos6_content'>
                     <div className='a'>
                        <div className='pos6_box'>
                            <Image src='https://suachualaptop24h.com/images/testimonials/resized/4c0d4f066b2d9673cf3c_1592369154.jpg'></Image>
                            <p>Việc tử tế, người tử tế, và một doanh nghiệp sửa chữa máy tính uy tín - Sửa chữa laptop 24h Tuần vừa rồi, máy tính của</p>
                        </div>
                        <div className='pos6_profile_box'>
                            <Image src='https://suachualaptop24h.com/images/testimonials/resized/untitled-7_1616826140.jpg.webp'></Image>
                            <div>
                                <div className='pos6_text'>Việc tử tế, người tử tế</div>
                                <div className='pos6_text'>Việc tử tế, người tử tế</div>
                            </div>
                        </div>
                     </div>

                     <div className='a'>
                        <div className='pos6_box'>
                            <Image src='https://suachualaptop24h.com/images/testimonials/resized/4c0d4f066b2d9673cf3c_1592369154.jpg'></Image>
                            <p>Việc tử tế, người tử tế, và một doanh nghiệp sửa chữa máy tính uy tín - Sửa chữa laptop 24h Tuần vừa rồi, máy tính của</p>
                        </div>
                        <div className='pos6_profile_box'>
                            <Image src='https://suachualaptop24h.com/images/testimonials/resized/untitled-7_1616826140.jpg.webp'></Image>
                            <div>
                                <div className='pos6_text'>Việc tử tế, người tử tế</div>
                                <div className='pos6_text'>Việc tử tế, người tử tế</div>
                            </div>
                        </div>
                     </div>

                     <div>
                        <div className='pos6_box'>
                            <Image src='https://suachualaptop24h.com/images/testimonials/resized/4c0d4f066b2d9673cf3c_1592369154.jpg'></Image>
                            <p>Việc tử tế, người tử tế, và một doanh nghiệp sửa chữa máy tính uy tín - Sửa chữa laptop 24h Tuần vừa rồi, máy tính của</p>
                        </div>
                        <div className='pos6_profile_box'>
                            <Image src='https://suachualaptop24h.com/images/testimonials/resized/untitled-7_1616826140.jpg.webp'></Image>
                            <div>
                                <div className='pos6_text'>Việc tử tế, người tử tế</div>
                                <div className='pos6_text'>Việc tử tế, người tử tế</div>
                            </div>
                        </div>
                     </div>
                 </div>
                <Button variant="outline-info" > xem thêm <ArrowRightAltIcon color='56aaff'/> </Button>
             </div>
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
         </div>
     )
 }
 export default  Pos6;