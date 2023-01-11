import { Nav } from 'react-bootstrap';

export const NavItem = (props) => {
    return (

        <Nav.Item>
            <Nav.Link href={`#${props.name}`} eventKey={props.name}>{props.name} {props.children}</Nav.Link>
        </Nav.Item>
    );
}