import './hero.css'
import playstore from '../../assets/playstore.svg'
const Hero = () => {
    
    return (  
        <div className='hero-container'>
            <div className='hero-left'>
                <p className='hero-header'>Send and receive money<br/>from any bank</p>
                <p className='hero-desc'>Payhub makes it easier to send and receive money. <br/>
                Join us now and get started today</p>
                <div className='hero-download'>
                    <p>DOWNLOAD ON</p>
                    <button className='play-btn'><img src={playstore}/>Playstore</button>
                </div>
            </div>
            <div className='hero-right'>Image hhere</div>
        </div>
    );
}
 
export default Hero;