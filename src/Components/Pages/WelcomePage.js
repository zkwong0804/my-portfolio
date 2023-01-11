import { Badge } from 'react-bootstrap';

import { Page } from "../Core/Page";

export const WelcomePage = (props) => {
    return (

        <Page>
            {/* <Title title='Me'/>
      <h3>I'm Zhen Kai, the web developer</h3>
      <Title title='Description' />
      <h3>This is my description</h3> */}
            <h1 className='welcome-title'>Welcome</h1>
            <h3>Hello there, I'm Zhen Kai</h3>
            <h3>I can do...</h3>
            <p>
                <Badge bg='primary' pill>C#</Badge>
                <Badge bg='warning' pill>Javascript</Badge>
                <Badge bg='secondary' pill>dotnet web app</Badge>
                <Badge bg='success' pill>dotnet web api</Badge>
                <Badge bg='info' pill>Express JS</Badge>
                <Badge bg='danger' pill>React JS</Badge>
            </p>
            <p>Scroll down to know more about me!</p>
        </Page>
    );
}