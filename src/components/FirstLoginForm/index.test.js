import React from 'react';
import FistLoginForm from './index'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('FistLoginForm', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<FistLoginForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should send login form information to onSubmit button with password matching', () => {
        const onSubmit = jest.fn()
        const repeatPasswordValue = 'senha123'
        const passwordValue = 'senha123'
        const component = render(<FistLoginForm onSubmit={onSubmit} />)
        const password = component.getByTestId('password')
        const repeatPassword = component.getByTestId('repeatPassword')
        const submitButton = component.getByTestId('submit')
        fireEvent.change(password, {target: {value: passwordValue}})
        fireEvent.change(repeatPassword, {target: {value: repeatPasswordValue}})
        fireEvent.click(submitButton)
        expect(password.value).toBe(passwordValue)
        expect(repeatPassword.value).toBe(repeatPasswordValue)
        expect(onSubmit).toBeCalledWith(
            {
                repeatPassword: repeatPasswordValue,
                password: passwordValue
            }
        )
    })

    it('should have submit button disabled if no form is filled', () => {
        const onSubmit = jest.fn()
        const component = render(<FistLoginForm onSubmit={onSubmit} />)
        const submitButton = component.getByTestId('submit')
        fireEvent.click(submitButton)
        expect(onSubmit).not.toBeCalled()
    })

    it('should have submit button disabled if only email is filled', () => {
        const onSubmit = jest.fn()
        const passwordValue = 'drdpedroso@gmail.com'
        const component = render(<FistLoginForm onSubmit={onSubmit} />)
        const password  = component.getByTestId('password')
        fireEvent.change(password, {target: {value: passwordValue}})
        const submitButton = component.getByTestId('submit')
        fireEvent.click(submitButton)
        expect(onSubmit).not.toBeCalled()
    })

    it('should show error message when error object is passed', () => {
        const error = {content: 'Error content message', header: 'Something went worng'}
        const onSubmit = jest.fn()
        const component = render(<FistLoginForm onSubmit={onSubmit} error={error}/>)
        const errorMessage = component.getByTestId('error-message')
        expect(onSubmit).not.toBeCalled()
        expect(errorMessage).toBeDefined()
    })

    it('should show error message when none of the passwords matches', () => {
        const repeatPasswordValue = 'senha123'
        const passwordValue = 'outrasenha122'
        const error = {content: 'Error content message', header: 'Something went worng'}
        const onSubmit = jest.fn()
        const component = render(<FistLoginForm onSubmit={onSubmit} error={error}/>)
        const password = component.getByTestId('password')
        const repeatPassword = component.getByTestId('repeatPassword')
        const submitButton = component.getByTestId('submit')
        fireEvent.change(password, {target: {value: passwordValue}})
        fireEvent.change(repeatPassword, {target: {value: repeatPasswordValue}})
        const errorMessage = component.getByTestId('error-message')
        fireEvent.click(submitButton)
        expect(onSubmit).not.toBeCalled()
        expect(errorMessage).toBeDefined()
    })

})
