import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <div>
                    <img src='https://arenda.votpusk.ru/GetFoto.ashx?id=9173cd2b-72ff-4f8b-8320-77b322d7cb2f'></img>
                </div>

                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} />
                    <ProfileStatus status={'Hello!'} />
                </div>

              

            </div>
        </div>
    )
}

export default ProfileInfo