import './tools.css'
import playstore from '../../assets/playstore.svg'

const Tools = () => {
    return ( 
        <div className='tools-container'>
            <p>All the tools you need to run your <br/> business with ease</p>
            <div className='tools-img-container'>
                <div className='tool-item'>
                    <div className='tool-img'><img src={playstore}/></div>
                    <p>Mobile Banking</p>
                </div>
                <div className='tool-item'>
                    <div className='tool-img'><img src={playstore}/></div>
                    <p>POS</p>
                </div>
                <div className='tool-item'>
                    <div className='tool-img'><img src={playstore}/></div>
                    <p>Virtual Cards</p>
                </div>
                <div className='tool-item'>
                    <div className='tool-img'><img src={playstore}/></div>
                    <p>Loans</p>
                </div>
            </div>
        </div>
     );
}
 
export default Tools;