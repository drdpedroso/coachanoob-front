import React from 'react';
import RadioButtonGroup from './index'
import renderer from 'react-test-renderer'
import {render, fireEvent} from '@testing-library/react'

const items = [
    {name: '1+', value: '1'},
    {name: '2+', value: '2'},
    {name: '3+', value: '3'},
    {name: '4+', value: '4'},
    {name: '5+', value: '5'},
]

describe('RadioButtonGroup', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<RadioButtonGroup items={items}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should activate the menu item when clicked and emit onChange event', () => {
        const onItemClick = jest.fn()
        const component = render(<RadioButtonGroup items={items} onItemClick={onItemClick}/>)
        const firstItem = component.getByTestId(items[0].name)
        expect(firstItem.className.includes('active')).toBe(false)
        fireEvent.click(firstItem)
        expect(firstItem.className.includes('active')).toBe(true)
        expect(onItemClick).toBeCalledWith(items[0].value)
    })

})


