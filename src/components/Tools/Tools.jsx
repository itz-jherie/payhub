import './tools.css'
import playstore from '../../assets/playstore.svg'
import mobile from '../../assets/mobile banking transaction (2).png'
import pos from '../../assets/check machine.png'
import cards from '../../assets/credit cards.png'
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