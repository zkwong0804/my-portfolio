import { Page } from "../Core/Page";
import { Title } from "../Core/Title";

export const IntroductionPage = (props) => {
    return (
        <Page title='Me'>
            <Title title='Me' />
            <p>
                My name is Wong Zhen Kai, I'm a software engineer who 
                specialize in C# and dotnet web development (dotnet web api, dotnet web app).
            </p>
            <p>
                However, because of my interest, I also know how to program in 
                Javascript and using framework like React JS to perform my front-end job.
                I also know how to program my back-end Javascript application with Express JS
            </p>
            <p>
                Want to know more about me? Why don't you check out my next slide?
            </p>
        </Page>
    );
}