import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../Navbtn/navbtn.css';

const Navbtn = ({toggleNav}) => {
    return (
        <button id="toggle" className="toggle" onClick={toggleNav}>
            <i className="fa fa-bars fa-2x"></i>
        </button>
    );
}

export default Navbtn;


