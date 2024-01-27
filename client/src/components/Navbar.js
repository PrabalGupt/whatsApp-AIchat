import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
function Navbar() {
    const location = useLocation();
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const profileData = queryParams.get('profile');
        console.log(profileData);
        if (profileData) {
            const parsedProfile = JSON.parse(decodeURIComponent(profileData));
            setUserProfile(parsedProfile);
        }
        console.log(userProfile);
    }, [location.search]);
    return (
        <div className='navbar'>
            <h2 className='logo'>LOGO</h2>
            <div className='navigators'>
                <Link to="/" className='about'>ABOUT</Link>
                <Link to="/" className='how-to-use'>HOW OT USE</Link>
                <Link to="/" className='team'>TEAM</Link>
                <Link to="/" className='explore'>EXPLORE</Link>
            </div>
            {userProfile !== null ? (
                <p className="white">Welcome, {userProfile && userProfile.displayName}</p>)
                : (<Link className="signin-button" to="/auth">SIGN IN</Link>)
            }
        </div>
    )
}

export default Navbar
