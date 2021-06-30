import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/imajes/user.png'
import { NavLink } from 'react-router-dom';
import { Paginator } from '../common/Paginator/Paginator'

let User = ({ user, folowingInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id} >
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={folowingInProgress
                            .some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }}>
                            Unfollow</button>


                        : <button disabled={folowingInProgress
                            .some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }} >
                            Follow</button>}


                </div>
            </span>

            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status} </div>
                </span>
                <span>
                    <div>{"u.location.country"} </div>
                    <div>{"u.location.city"} </div>
                </span>
            </span>
        </div>)

}


export default User;