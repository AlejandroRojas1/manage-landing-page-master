import { useState, useEffect, useRef } from 'react'
import styles from '../styles/header.module.css'
import Button from './Button'

const Header = () => {
    const [hamburguerMenu, setHamburguerMenu] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navRef = useRef(null)

    return (
        <>
            <nav className={`${styles.headerContainer} navbar pt-4`}>
                <div className={`container-fluid ${styles.header} d-flex `}>
                    <a className="navbar-brand" href="#">
                        <img src="/assets/logo.svg" alt="manage" width="35" height="30" className="w-100" />
                    </a>

                    {
                        windowWidth <= 857 &&
                            <div className={styles.hamburguerMenu}>
                                <button className={styles.hamburguerButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#000000" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
                                </button>
                                
                            </div>
                    }

                    <div ref={navRef} className={`${styles.navContainer}`}>
                        <ul className='navbar-nav'>
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
                        {
                            windowWidth > 857 &&
                            <Button otherStyles='' children='Get Started' />
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}




export default Header