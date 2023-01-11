import { Page } from "../Core/Page";
import { Title } from "../Core/Title";
import { CardGroup } from "react-bootstrap";

import { ProjectCard } from "../Core/ProjectCard";

export const ProjectsPage = (props) => {
    return (
        <Page>
            <Title title='Projects' />
            <h1 className="mt-5 mb-3">C# and dotnet web</h1>
            <CardGroup>
                <ProjectCard
                    img='./supermarket-api.png'
                    title='Supermarket API'
                    text='Restful API that are built using dotnet web api 
                to manage products, categories, and bills'
                    github='https://github.com/zkwong0804/SupermarketAPI-dotnet'
                    live='' />
                <ProjectCard
                    img='./supermarket-api.png'
                    title='Staff Management System'
                    text='Monolith web app built using dotnet web app and Razor page to manage staffs and departments'
                    github='https://github.com/zkwong0804/staff-management-dotnet'
                    live='' />
                <ProjectCard
                    img='./supermarket-api.png'
                    title='Web API with JWT Token Auth'
                    text='A Web API with JWT Token Auth implementation to achieve stateless authentication and authorization'
                    github='https://github.com/zkwong0804/dotnet-jwt-api-practice'
                    live='' />
            </CardGroup>
            <h1 className="mt-5 mb-3">Javascript</h1>
            <CardGroup>
                <ProjectCard
                    img='./supermarket-api.png'
                    title='My portfolio site'
                    text="Hey! you are actuallly viewing this project! 
                    Why don't you view my source code on Github to see how I built this page?"
                    github='https://github.com/zkwong0804/my-portfolio'
                    live='' />
                <ProjectCard
                    img='./supermarket-api.png'
                    title='Pomodoro clock'
                    text='A pomodoro clock (25 + 5 timer) application built using React and Redux'
                    github='https://github.com/zkwong0804/fcc-project-255clock-web'
                    live='' />
                <ProjectCard
                    img='./supermarket-api.png'
                    title='File metadata API'
                    text='A Web API built using Express JS to extract metadata from uploaded file'
                    github='https://github.com/zkwong0804/fcc-project-filemetadata'
                    live='' />
            </CardGroup>

            <CardGroup>

            </CardGroup>
        </Page>
    );
}