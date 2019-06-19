import React from 'react';
import renderer from 'react-test-renderer';
import ResponsiveContainer from './index'
import {render, fireEvent} from '@testing-library/react'
import {MemoryRouter} from "react-router-dom";


describe('NavBar', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<MemoryRouter initialEntries={['/']}><ResponsiveContainer>
                <div> Hey!</div>
            </ResponsiveContainer></MemoryRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should change active route when clicking on the menu item', () => {
        const component = render(<MemoryRouter
            initialEntries={['/']}><ResponsiveContainer> </ResponsiveContainer></MemoryRouter>)
        const homeLink = component.getByTestId('link-to-home')
        const searchLink = component.getByTestId('link-to-search')
        expect(homeLink.className.includes('active')).toBe(true)
        fireEvent.click(searchLink)
        expect(homeLink.className.includes('active')).toBe(false)
        expect(searchLink.className.includes('active')).toBe(true)
    })
})
