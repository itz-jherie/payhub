import './footer.css'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div className="mobile__footer">
                <div className="mobile-column-one">
                    <span><img src={logo} alt="payhub logo" /></span>
                    <div>
                        <Link to="" target="_blank">
                            <a>Online mobile banking</a>
                        </Link>
                    </div>
                </div>
                <main>
                    <div className="mobile-column-two">
                        <span>our product</span>
                        <div>
                            <Link to="" target="_blank">
                                <a>business account</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">
                                <a>POS terminal</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">
                                <a>expense cards</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">
                                <a>capital loan</a>
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-column-three">
                        <span>permalinks</span>
                        <div>
                            <Link to="" target="_blank">
                                <a>company</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">
                                <a>banking</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">
                                <a>payment</a>
                            </Link>
                        </div>
                    </div>
                </main>
                <main>
                    <div className="mobile-column-four">
                        <span>contact us</span>
                        <div>
                            <Link to="" target="_blank">
                                <a>about us</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">
                                <a>contact us</a>
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-column-five">
                        <span>privacy</span>
                        <div>
                            <Link to="" target="_blank">
                                <a>privacy policy</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="" target="_blank">
                                <a>terms and conditions</a>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
            <div className="desktop__footer">
                <div className="desktop-column-one">
                    <span><img src={logo} alt="payhub logo" /></span>
                    <div>
                        <Link to="" target="_blank">
                            <a>Online mobile banking</a>
                        </Link>
                    </div>
                </div>
                <div className="desktop-column-two">
                    <span>our product</span>
                    <div>
                        <Link to="" target="_blank">
                            <a>business account</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="" target="_blank">
                            <a>POS terminal</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="" target="_blank">
                            <a>expense cards</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="" target="_blank">
                            <a>capital loan</a>
                        </Link>
                    </div>
                </div>
                <div className="desktop-column-three">
                    <span>permalinks</span>
                    <div>
                        <Link to="" target="_blank">
                            <a>company</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="" target="_blank">
                            <a>banking</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="" target="_blank">
                            <a>payment</a>
                        </Link>
                    </div>
                </div>
                <div className="desktop-column-four">
                    <span>contact us</span>
                    <div>
                        <Link to="" target="_blank">
                            <a>about us</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="" target="_blank">
                            <a>contact us</a>
                        </Link>
                    </div>
                </div>
                <div className="desktop-column-five">
                    <span>privacy</span>
                    <div>
                        <Link to="" target="_blank">
                            <a>privacy policy</a>
                        </Link>
                    </div>
                    <div>
                        <Link to="" target="_blank">
                            <a>terms and conditions</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer