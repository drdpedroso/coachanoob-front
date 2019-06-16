import React from 'react';
import {storiesOf} from '@storybook/react';

import Input from './';
import {Icon} from "semantic-ui-react";

storiesOf('Input', module)
    .add('with placeholder', () => (
        <Input placeholder="Placeholder text"/>
    ))
    .add('with error', () => (
        <Input error value="Value text"/>
    ))
    .add('with fluid', () => (
        <Input fluid value="Value text"/>
    ))
    .add('with icon left', () => (
        <Input iconPosition='left' placeholder='Email'>
            <Icon name='at' />
            <input />
        </Input>
    ))
    .add('with icon right', () => (
        <Input iconPosition='right' placeholder='Email'>
            <Icon name='at' />
            <input />
        </Input>
    ))

