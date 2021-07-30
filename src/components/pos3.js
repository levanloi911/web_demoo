import { Image } from 'react-bootstrap'
import './pos3.css'


function Pos3(props){
    return(
    <div className ='pos3'>
        {props.homepage&&props.homepage.map(item=>(
             <div className='pos3_container'>
                <h1 style={{color:'white'}}>15 năm tận tâm phục vụ, uy tín và chuyên nghiệp</h1>
                <div className='pos3_box'>
                    {item.stepblock&&item.stepblock.slice(0,4).map(item_step=>(
                    <div className= 'pos3_item'>
                        <Image src='https://suachualaptop24h.com/images/strengths/large/2-bao-gia-truoc_1590488058.jpg.webp'></Image>
                        <div className='pos3_content'>
                            <span> {item_step.id}</span>
                            <div className="pos3_title" >{item_step.title}</div>
                            <div>{item_step.content}</div>
                        </div>
                    </div>
                    )
                   
                    )}
                 

                  
                </div>
            </div>

        ))}
           
    </div>
    )
}
export default Pos3;