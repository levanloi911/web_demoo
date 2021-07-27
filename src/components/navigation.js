import './navigation.css'
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
function Navigation(){
    return(
        <div className='div_nav'>
            <ul>
                <li><a className="active" href="#home">		<HomeIcon/> 	</a></li>
                <li><a href="#home">		Giới thiệu 	</a></li>
                <li><a href="#news">		Dịch vụ 	</a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li><a href="#contact">		Linh kiện 	</a>
                     <div className="dropdown-content">
                        <a href="#">Link 4</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li><a href="#about">		Phụ kiện 	</a>
                     <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li><a href="#about">		Tin tức 	</a>
                     <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li><a href="#about">		Laptop 	</a>
                     <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>  
                </li>
                <li><a href="#about">		Báo giá 	</a>
                <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li><a href="#about">		Đặt lịch 	</a>
                <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li><a href="#about">		Liên hệ 	</a>
                <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>


                <li className='nav_shopping'><a href="#about"><AddShoppingCartOutlinedIcon/>	Giỏ hàng 	</a></li>
            </ul>
        </div>
    )
}
export default Navigation