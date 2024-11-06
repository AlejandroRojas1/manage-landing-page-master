import styles from '../styles/header.module.css'
import Button from './Button'

const Header = () => {


    return (
        <>
            <nav className="navbar pt-4">
                <div className={`container ${styles.header} d-flex justify-content-between`}>
                    <a className="navbar-brand" href="#">
                        <img src="/assets/logo.svg" alt="manage" width="35" height="30" className="w-100" />
                    </a>
                    
                        <ul className='navbar-nav w-50 d-flex flex-row justify-content-evenly'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Pricing</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Product</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>About Us</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Careers</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Community</a>
                            </li>
                        </ul>
                    <Button otherStyles='' children='Get Started'/>
                </div>
            </nav>
        </>
    )
}



   
export default Header