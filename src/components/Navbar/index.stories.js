import React from 'react';
import {storiesOf} from '@storybook/react';
import {Image} from "semantic-ui-react"
import NavBar from "./index"

const leftItems = [
    { as: "a", content: "Home", key: "home" },
    { as: "a", content: "Users", key: "users" }
];
const rightItems = [
    { as: "a", content: "Login", key: "login" },
    { as: "a", content: "Register", key: "register" }
];

storiesOf('Nav', module)
    .add('with default', () => (
        <NavBar leftItems={leftItems} rightItems={rightItems}>
            <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
        </NavBar>
    ))

    .add('with mobile', () => (
        <div style={{width: 700}}>
            <NavBar leftItems={leftItems} rightItems={rightItems}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
            </NavBar>

        </div>
    ))


