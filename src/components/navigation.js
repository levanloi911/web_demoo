import './navigation.css'
function Navigation(){
    return(
        <div className='div_nav'>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <p>Giỏ hàng</p>
            </ul>
        </div>
    )
}
export default Navigation