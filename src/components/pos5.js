import { FormControl, InputGroup,DropdownButton,Dropdown, Button } from 'react-bootstrap';
import './pos5.css'
function Pos5(){
    return(
        <div className='pos5'>
            <div className = 'pos5_container'>
                <h3 className='pos5_title'> Báo giá tham khảo</h3>
                <div className='pos5_content'>
                <select className="pos5_select1" placeholder="Chọn hãng máy">
                    <option value="">Chọn hãng máy</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
            
                </select>
                <select className="pos5_select1" placeholder="Chọn hãng máy">
                    <option value="">Chọn hãng máy</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                 
                </select>
                <select className="pos5_select1" placeholder="Chọn hãng máy">
                    <option value="">Chọn hãng máy</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    
                </select>
                <Button className='pos5_btn'>Báo giá</Button>
                </div>
            </div>
        </div>
    )
}
export default Pos5;