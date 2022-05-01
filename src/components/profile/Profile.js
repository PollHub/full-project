import React from "react";
import user from '../../img/userImg.svg';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__user">
                <img src={user} className="profile__user__img"/>
                <div className="profile__user__data">
                    <p className="profile__user__name">Дмитрий Шишков (Пользователь)</p>
                    <p className="profile__user__mail">SHishkov_dev2.19@st.ithub.ru</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;