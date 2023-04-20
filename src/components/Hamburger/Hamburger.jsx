import './hamburger.css'

const Hamburger = (props) => {
    if(!props.show ) {
        return null
    }
    return ( 
        <div className='hamburger-container'>
            <div className='ham-links-container'>
                <div className='ham-links'>
                    <a href="#">Company&#9660;</a>
                    <a href="#">Banking</a>
                    <a href="#">Payment&#9660;</a>
                    <a href="#">Loans</a>
                    <a href="#">Contact Us</a>
                </div>
                
            </div>
        </div> 
    );
}
 
export default Hamburger;