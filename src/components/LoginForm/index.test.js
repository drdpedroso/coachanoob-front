import React from 'react';
import LoginForm from './index'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('LoginForm', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<LoginForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should send login form information to onSubmit button', () => {
        const onSubmit = jest.fn()
        const emailValue = 'drdpedroso@gmail.com'
        const passwordValue = 'senha123'
        const component = render(<LoginForm onSubmit={onSubmit} />)
        const email = component.getByTestId('email')
        const password = component.getByTestId('password')
        const submitButton = component.getByTestId('submit')
        fireEvent.change(email, {target: {value: emailValue}})
        fireEvent.change(password, {target: {value: passwordValue}})
        fireEvent.click(submitButton)
        expect(email.value).toBe(emailValue)
        expect(password.value).toBe(passwordValue)
        expect(onSubmit).toBeCalledWith(
            {
                email: emailValue,
                password: passwordValue
            }
        )
    })

    it('should have submit button disabled if no form is filled', () => {
        const onSubmit = jest.fn()
        const component = render(<LoginForm onSubmit={onSubmit} />)
        const submitButton = component.getByTestId('submit')
        fireEvent.click(submitButton)
        expect(onSubmit).not.toBeCalled()
    })

    it('should have submit button disabled if only email is filled', () => {
        const onSubmit = jest.fn()
        const emailValue = 'drdpedroso@gmail.com'
        const component = render(<LoginForm onSubmit={onSubmit} />)
        const email = component.getByTestId('email')
        fireEvent.change(email, {target: {value: emailValue}})
        const submitButton = component.getByTestId('submit')
        fireEvent.click(submitButton)
        expect(onSubmit).not.toBeCalled()
    })

    it('should show error message when error object is passed', () => {
        const error = {content: 'Error content message', header: 'Something went worng'}
        const onSubmit = jest.fn()
        const component = render(<LoginForm onSubmit={onSubmit} error={error}/>)
        const errorMessage = component.getByTestId('error-message')
        expect(onSubmit).not.toBeCalled()
        expect(errorMessage).toBeDefined()
    })

})
