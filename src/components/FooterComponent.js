import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <ul className="list-unstyled">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Additional Services</a></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5></h5>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                       
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-github" href="http://github.com/"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 SSAB Bank</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;