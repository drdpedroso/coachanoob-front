import React from 'react';
import FiltersForm from './index'
import renderer from 'react-test-renderer';
import {cleanup} from "@testing-library/react"

afterEach(cleanup)

describe('FiltersForm', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<FiltersForm/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
