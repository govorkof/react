import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({    //Эти данные придут в Header компоненту, а компонента 
    isAuth: state.auth.isAuth,           // прокнет ихдальше в Header (22 строка)
    login: state.auth.login
})
export default connect(mapStateToProps, { logout })(HeaderContainer)