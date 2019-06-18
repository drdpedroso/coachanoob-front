// @flow
import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Button from '../Button'
import {Form, Message} from 'semantic-ui-react'

const LoginForm = (props) => {
    const [form, setForm] = useState({})

    const onChangeInputValue = (e: any, key: string) => {
        const {value} = e.target
        setForm({
            ...form,
            [key]: value
        })
    }

    const onSubmit = (): function => {
        return typeof props.onSubmit === 'function' ? props.onSubmit(form) : null
    }

    const shouldDisableButton = (): boolean => {
        return !(form.email && form.password)
    }

    const {error} = props
    return (
        <Form error={!!error}>
            <Form.Field>
                <label>E-mail</label>
                <input data-testid="email" placeholder='E-mail' type="email"
                       onChange={(e) => onChangeInputValue(e, 'email')}/>
            </Form.Field>
            <Form.Field>
                <label>Senha</label>
                <input data-testid="password" placeholder='Senha' type="password"
                       onChange={(e) => onChangeInputValue(e, 'password')}/>
            </Form.Field>
            {error && <Message
                data-testid="error-message"
                error
                header={error.header}
                content={error.content}
            />}
            <Button data-testid="submit" type='submit' fluid disabled={shouldDisableButton()}
                    onClick={onSubmit}>Entrar</Button>
        </Form>
    )
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    error: PropTypes.shape({
        header: PropTypes.string,
        content: PropTypes.string
    })
};

export default LoginForm
