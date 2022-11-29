import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as ProfileIcon } from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()
    const getPathRouter = (route) => {
        if (route === location.pathname) {
            return true;
        }
    }
    return (
        <>
            <footer className='navbar'>
                <nav className="navbarNav">
                    <ul className="navbarListItems">
                        <li className="navbarListItem" onClick={() => navigate('/')}>
                            <ExploreIcon fill={getPathRouter ('/') ? '#13F782': '#c2c2c2'} height='30px' width='30px' />
                            <p>Explore</p>
                        </li>
                        <li className="navbarListItem" onClick={() => navigate('/offers')}>
                            <OfferIcon fill={getPathRouter ('/offers') ? '#13F782': '#c2c2c2'} height='30px' width='30px' />
                            <p>Offers</p>
                        </li>
                        <li className="navbarListItem" onClick={() => navigate('/profile')}>
                            <ProfileIcon fill={getPathRouter ('/profile') ? '#13F782': '#c2c2c2'}height='30px' width='30px' />
                            <p>Profile</p>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Navbar