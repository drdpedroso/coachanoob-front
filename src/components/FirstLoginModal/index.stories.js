import React from 'react';
import {storiesOf} from '@storybook/react';

import FirstLoginModal from './';
import {Button} from "semantic-ui-react"


storiesOf('FirstLoginModal', module)
    .add('with default', () => (
        <FirstLoginModal openModal={<Button>Open Modal</Button>}/>
    ))

    .add('with header', () => (
        <FirstLoginModal header="Bem Vindo, meu parceiro" openModal={<Button>Open Modal</Button>}/>
    ))
