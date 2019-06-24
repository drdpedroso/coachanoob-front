import React from 'react';
import FiltersForm from './index'
import renderer from 'react-test-renderer';
import {cleanup} from "@testing-library/react"
import {ContextProvider} from "../../state/state";

afterEach(cleanup)

describe('FiltersForm', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<ContextProvider><FiltersForm/></ContextProvider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
