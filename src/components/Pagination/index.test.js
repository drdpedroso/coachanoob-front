import React from 'react';
import Button from './index'
import renderer from 'react-test-renderer';


describe('Pagination', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Button>Menor Bolado</Button>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
