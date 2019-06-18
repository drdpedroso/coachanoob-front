// @flow
import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Form, Message} from 'semantic-ui-react'
import Button from '../Button'

const LoginForm = (props) => {
    const [form, setForm] = useState({})
    const [error, setError] = useState(props.error || {});

    const onChangeInputValue = (e: any, key: string) => {
        const {value} = e.target
        setForm({
            ...form,
            [key]: value
        })
    }

    const onSubmit = (): function => {
        if (form.password !== form.repeatPassword) {
            setError({
                header: 'Algo deu errado',
                content: 'As senhas precisam sem iguais'
            })
            return null
        }
        return typeof props.onSubmit === 'function' ? props.onSubmit(form) : null
    }

    const shouldDisableButton = (): boolean => {
        return !(form.repeatPassword && form.password)
    }

    return (
        <Form error={!!error}>
            <Form.Field>
                <label>Senha</label>
                <input data-testid="password" placeholder='Senha' type="password"
                       onChange={(e) => onChangeInputValue(e, 'password')}/>
            </Form.Field>
            <Form.Field>
                <label>Repetir Senha</label>
                <input data-testid="repeatPassword" placeholder='Repetir Senha' type="password"
                       onChange={(e) => onChangeInputValue(e, 'repeatPassword')}/>
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
