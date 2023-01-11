import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Page } from "../Core/Page";
import { Title } from "../Core/Title";

export const ContactPage = (props) => {
    return (
        <Page>
            <Title title='Contacts' />
            <h3>Email</h3>
            <a href='mailto:zkwong.work.outlook.my'>zkwong.work.outlook.my</a>
            <h3>Social media:</h3>
            <a href='https://www.linkedin.com/in/zhen-kai-wong-23144719a/' target='_blank'>
                Linkedin
            </a>
        </Page>
    );
}