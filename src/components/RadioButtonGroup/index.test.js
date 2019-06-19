import React from 'react';
import Button from './index'
import renderer from 'react-test-renderer'
import {render} from ''

it('renders correctly', () => {
    const tree = renderer
        .create(<Button>Menor Bolado</Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
