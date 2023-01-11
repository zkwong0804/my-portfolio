import React from "react";
import { Container } from "react-bootstrap";


export const Page = (props) => {
    const style = {
        backgroundColor: props.bgColor,
        paddingTop: '2vh',
        paddingBottom: '5vh'
    };

    const hrStyle = {
        border: '2px solid',
        marginLeft: '5vw',
        marginRight: '5vw'
    }

    return (
        <React.Fragment>
            <div style={style}>
                <Container>
                    {props.children}
                </Container>
            </div>
            <hr style={hrStyle} className='text-dark' />
        </React.Fragment>
    );
}