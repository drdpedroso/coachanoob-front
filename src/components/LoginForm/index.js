import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '../Button'
import { Form } from 'semantic-ui-react'

const LoginForm = (props) => {
    const [form, setForm] = useState({})

    const onChangeInputValue = (e, key) => {
        const { value } = e.target
        setForm({
            ...form,
            [key]: value
        })
    }

    const onSubmit = () => {
        return typeof props.onSubmit === 'function' ? props.onSubmit(form) : null
    }

    const shouldDisableButton = () => {
        return !(form.email && form.password)
    }

    return (
        <Form>
            <Form.Field>
                <label>E-mail</label>
                <input data-testid="email" placeholder='E-mail' type="email" onChange={(e) => onChangeInputValue(e, 'email')}/>
            </Form.Field>
            <Form.Field>
                <label>Senha</label>
                <input data-testid="password" placeholder='Senha' type="password" onChange={(e) => onChangeInputValue(e, 'password')}/>
            </Form.Field>
            <Button data-testid="submit" type='submit' fluid disabled={shouldDisableButton()} onClick={onSubmit}>Entrar</Button>
        </Form>
    )
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func
};

export default LoginForm
