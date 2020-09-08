import React,  { Fragment } from 'react';
import { Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faHome, faClipboardList, faStream, faUserCircle, faSearch, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HeaderComp.css'
import { NavLink } from 'react-router-dom'
import $ from 'jquery';




const HeaderComp = () => {

    
        $('#aa').on('click', function(){
            window.alert("sometext");
        });
    
    
    return  (<Fragment>
                
                {/* Desktop Navbar */}
                {/* style={{ backgroundColor:'#fafcfc'}} */}
                <div className="d-none d-sm-block">
                <Navbar style={{ backgroundColor:'#FF0000'}} expand="lx" m="auto" className="navbar-dark">
                    <Navbar.Brand className="text-light" href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle style={{ borderColor:'#FFF'}} aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  className="collapse navbar-collapse" id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link id="aa" className="text-light"><NavLink className="text-light navlink" exact to={'/'}>
                                Home
                            </NavLink></Nav.Link>
                            <Nav.Link className="text-light"><NavLink className="text-light navlink" exact to={'/timeline'}>
                                Timeline
                            </NavLink>
                            </Nav.Link>
                            <Nav.Link className="text-light"><NavLink className="text-light navlink" exact to={'/produk'}>
                                Info
                            </NavLink>
                            </Nav.Link>
                            <Nav.Link className="text-light"><NavLink className="text-light navlink" exact to={'/produk'}>
                                User
                            </NavLink>
                            </Nav.Link>
                         </Nav>
                            
                    </Navbar.Collapse>
                </Navbar>
                </div>
                {/* Desktop Navbar End */}

                {/* Mobile Navbar */}
                <div className="d-block d-sm-none">
                <Navbar className="justify-content-center" style={{ backgroundColor:'#FF0000'}}  m="auto" fixed="top">
                    <Navbar.Brand className="text-white"  href="#home">Logo</Navbar.Brand>
                </Navbar>
                </div>
                
                <div className="d-block d-sm-none" style={{ marginBottom:'0px' }}>
                <Navbar className="justify-content-center navbar-expand" style={{ backgroundColor:'#FF0000'}} fixed="bottom">
                        <Nav.Link><NavLink exact to={'/'}>
                        <FontAwesomeIcon icon={ faHome } size="2x"  style={{color: '#fff'}} />
                        </NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to={'/timeline'}>
                        <FontAwesomeIcon  icon={ faStream } size="2x"  style={{color: '#fff'}} />
                        </NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to={'/information'}>
                        <FontAwesomeIcon icon={ faInfoCircle } size="2x"  style={{color: '#fff'}} />
                        </NavLink></Nav.Link>
                        <div className="dropup">
                            <Nav.Link className="dropbtn"  href="#"><FontAwesomeIcon icon={ faUserCircle } size="2x"  style={{color: '#fff'}} /></Nav.Link>
                            <div className="dropup-content">
                                <Nav.Link className="text-light"><NavLink className="text-light" exact to={'/users/login'}>
                                    Login
                                </NavLink></Nav.Link>
                                <Nav.Link className="text-light"><NavLink className="text-light" exact to={'/users/logout'}>
                                    Logout
                                </NavLink></Nav.Link>
                            </div>
                        </div>
                    {/* <Nav.Link id="user-bottom"  href="/user/dashboard"><FontAwesomeIcon icon={ faUserCircle } size="2x" style={{color: '#fff'}}/><div id="username-bottom">Username</div></Nav.Link> */}
                </Navbar>
                </div>
                {/* Mobile Navbar End */}

            </Fragment>)
}

// HeaderComp.defaultProps={
//     cart:'0',
//     username:'kamil'
// }



export default HeaderComp;
