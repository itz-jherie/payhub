import './hero.css'
import playstore from '../../assets/playstore.svg'
import heroImg from '../../assets/heroImg.svg'
const Hero = () => {
    
    return (  
        <div className='hero-container'>
            <div className='hero-left'>
                <p className='hero-header'>Experience the <b style={{color: '#F9A825'}}>Future</b> <br/>of Banking with <br /> Payhub</p>
                <p className='hero-desc'>Payhub makes it easier to send and receive money. <br/>
                Join us now and get started today</p>
                <div className='hero-download'>
                    <p>DOWNLOAD ON</p>
                    <button className='play-btn'><img src={playstore}/>Playstore</button>
                </div>
            </div>
            <div className='hero-right'><img src={heroImg}/></div>
        </div>
    );
}
 
export default Hero;