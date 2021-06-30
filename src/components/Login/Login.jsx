import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControls/FormsControls'
import style from './../common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit} >

            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, { type: 'password' })}
            {createField(null, 'rememberMe', null, Input, { type: 'checkbox' }, 'rememberMe')}

            {error && <div className={style.formSummeryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        // console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)