import './tools.css'
import playstore from '../../assets/playstore.svg'
import mobile from '../../assets/mobile.svg'
import pos from '../../assets/pos.svg'
import cards from '../../assets/cards.png'
import loans from '../../assets/Man gives his savings to the bank.png'

const Tools = () => {
    return ( 
        <div className='tools-container'>
            <p>All the tools you need to run your <br/> business with ease</p>
            <div className='tools-img-container'>
                <div className='tool-item'>
                    <div className='tool-img'><img src={mobile}/></div>
                    <p>Mobile Banking</p>
                </div>
                <div className='tool-item'>
                    <div className='tool-img'><img src={pos}/></div>
                    <p>POS</p>
                </div>
                <div className='tool-item'>
                    <div className='tool-img cards'><img src={cards} width='20px'/></div>
                    <p>Virtual Cards</p>
                </div>
                <div className='tool-item'>
                    <div className='tool-img'><img src={loans}/></div>
                    <p>Loans</p>
                </div>
            </div>
        </div>
     );
}
 
export default Tools;