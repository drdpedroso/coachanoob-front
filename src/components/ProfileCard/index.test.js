import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup} from '@testing-library/react'
import {Listing} from "../../../models/Listing";
import ProfileCard from "./index";

afterEach(cleanup)

describe('ProfileCard', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<ProfileCard item={Listing}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with carousel', () => {
        const tree = renderer
            .create(<ProfileCard item={Listing} isCarousel arrows/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with loading', () => {
        const tree = renderer
            .create(<ProfileCard item={Listing} isCarousel arrows loading/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call onClick function when clicking Submit Proposal button (without carousel)', () => {
        const onClick = jest.fn()
        const component = render(<ProfileCard item={Listing} onClick={onClick}/>)
        const submitButton = component.getByTestId('request-proposal')
        fireEvent.click(submitButton)
        expect(onClick).toBeCalledWith(Listing.id)
    })

    it('should call onClick function when clicking Submit Proposal button (with carousel)', () => {
        const onClick = jest.fn()
        const component = render(<ProfileCard item={Listing} onClick={onClick} arrows isCarousel />)
        const submitButton = component.getByTestId('request-proposal')
        fireEvent.click(submitButton)
        expect(onClick).toBeCalledWith(Listing.id)
    })
})

