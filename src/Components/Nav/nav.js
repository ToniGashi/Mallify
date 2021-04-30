import React from 'react';
import '../Nav/nav.css';

const Nav = ({onRouteChange, isSignedIn, onSignInStatusChange, image}) => {
    return (
        <nav>
            <div className="logo">
                <img 
                src="http://127.0.0.1:8887/noImg.jpg"
                width="100px"
                height="100px"           
                alt="user"></img>        
            </div>
            <ul>
                <li><p onClick= {() => onRouteChange("home")}>Home</p></li>
                <li><p onClick= {isSignedIn?() => onRouteChange("findShortest"):0}>Find A Store</p></li>
                <li><p onClick= {isSignedIn?() => onRouteChange("discover"):0}>Explore</p></li>
                <li><p onClick= {isSignedIn?() => onRouteChange("contact"):0}>Contact</p></li>
                {
                    isSignedIn?<li><p onClick= {() => onSignInStatusChange()}>Log Out</p></li>:console.log(".")
                }
            </ul>
        </nav>
    );
}

export default Nav;