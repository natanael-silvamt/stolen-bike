import React, { Component } from 'react';

import './index.css';
import Emblema from '../../images/berlin-police-department.png';


class Header extends Component {
    render(){
        return (
            <div className="header_page">
                <img src={Emblema} alt="" />
                <div className="sub_title_header">
                    <h1>Police Departament of Berlin</h1>
                    <div className="subtitle__header">
                        <h3>Stolen Bikes</h3>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Header;
