import './footer.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
function Footer(props){
    return(
        <div className='footer'>
            {props.homepage&&props.homepage.map(item=>(
            <div className='footer_container'>
                <h5>HỆ THỐNG CỬA HÀNG</h5>
                <div className='footer_grid'>
                    {item.chinhanh&&item.chinhanh.map(item_c=>(
                    <div className='footer_content'>
                        <p className="footer_text2"> <LocationOnIcon color='primary'/>{item_c.diachi}</p>
                    </div>
                    ))}
                </div>
            </div>
            ))}
        </div>
    )
}
export default Footer;