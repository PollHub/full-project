import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from '../../img/userImg.svg';

function Profile() {

    let [counter, setCounter] = useState([0,1,2,3]);

    return (
        <div className="profile">
            <div className="profile__user">
                <img src={user} className="profile__user__img"/>
                <div className="profile__user__data">
                    <p className="profile__user__name">Дмитрий Шишков (Пользователь)</p>
                    <p className="profile__user__mail">SHishkov_dev2.19@st.ithub.ru</p>
                    {/* <Link className="link">
                        <p className="profile__user__change">Изменить</p>
                    </Link> */}
                </div>
            </div>
            <div className="profile__last__tests">
                <p>Недавние тесты</p>
                {counter.map(e => {
                    console.log(e)
                    return (
                        <div key={e} className="profile__last__test">
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Profile;