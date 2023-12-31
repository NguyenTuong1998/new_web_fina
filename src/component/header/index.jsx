import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../asset/banner/logo2.png"
import "./style.scss"
export default function Header() {
    return (
        <div style={{marginTop: "4.4rem"}}>
            <Navbar className='shadow bottom' fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        // width="500"
                        height="45"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle className='menu' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse   id="basic-navbar-nav">
                    <Nav className="mr-auto contact" style={{fontWeight: 500}}>
                        <Nav.Link>
                            <Link className='title' to='danh-sach-atm'>Mở thẻ ngân hàng</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='title' to='/danh-sach-khoan-vay'>Danh sách khoản vay</Link>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <Link className='title' to=''>Hướng Dẫn Vay</Link>
                            </Nav.Link>
                        <Nav.Link href="#link">
                            <Link className='title' to=''> Về chúng tôi</Link>
                            </Nav.Link>
                        <Nav.Link href="#link">
                            <Link className='title' to=''>Liên hệ</Link>
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        </div>
    )
}

