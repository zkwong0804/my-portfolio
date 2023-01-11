import { Card, Button } from "react-bootstrap";

export const ProjectCard = (props) => {
    return (
        <Card>
            <Card.Img variant='top' src={props.img} className='project-thumbnail' />
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Card.Link href={props.github} target='_blank' title='View source code on Github!'>Github</Card.Link>
                <Card.Link href={props.live} target='_blank' title='View live site!'>Live</Card.Link>
                {/* <Button variant='primary' className="mr-1">Github</Button>
                <Button variant='primary'>Live</Button> */}
            </Card.Body>
        </Card>
    );
}