import { useState, useEffect, useRef } from 'react'
import styles from '../styles/header.module.css'
import Button from './Button'

const Header = () => {
    const [displayedMenu, setDisplayedMenu] = useState<boolean>(false)
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

    const navRef = useRef<HTMLDivElement>(null)

    const handleDisplayedMenu = ()=> {
        setDisplayedMenu(!displayedMenu)
        if(navRef.current && windowWidth <= 875) {
            !displayedMenu
                ? (navRef.current.style.display = "flex")
                : (navRef.current.style.display = "none")
        }
        
    }

    return (
        <>
            {
               (displayedMenu && windowWidth <= 875) 
                    && <div className={styles.overlay}></div>
            }

            <nav className={`${styles.headerContainer} navbar pt-4`}>
                <div className={`container-fluid ${styles.header} d-flex `}>
                    <a className="navbar-brand" href="#">
                        <img src="/assets/logo.svg" alt="manage" width="35" height="30" className="w-100" />
                    </a>

                    {
                        windowWidth <= 857 &&
                            <div className={styles.hamburguerMenu}>
                                <button onClick={handleDisplayedMenu} className={styles.hamburguerButton}>
                                    {
                                        displayedMenu
                                            ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#1A2633" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                                            : <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#1A2633" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
                                    }
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