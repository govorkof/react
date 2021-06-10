import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field name={'password'}
                    component={Input}
                    type={'password'}
                    validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} 
                name={'rememberMe'} 
                component={Input} /> remember me
            </div>
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