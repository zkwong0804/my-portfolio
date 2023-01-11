import { Nav, Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { NavItem } from './NavItem';

export const PortfolioNav = (props) => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
            <Container>
                <Navbar.Brand href='#'>This is Zhenkai</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <NavItem name='Me' />
                        <NavItem name='Experiences' />
                        <NavItem name='Projects' />
                        <NavItem name='Contacts' />
                        <NavItem name='Resume'>
                            <FontAwesomeIcon icon={faDownload} className='ms-1' />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}