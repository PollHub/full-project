import React, { useEffect, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './log1.css';

// import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  let [login, setLogin] = useState('');
  let [password, setPassword] = useState('');

  function request() {
    var formdata = new FormData();
    formdata.append("username", login);
    formdata.append("password", password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://dfssd.herokuapp.com/auth/jwt/create/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  //   useEffect(() => {
  //     setCount(JSON.parse(window.localStorage.getItem('count')));
  //   }, []);

  //   useEffect(() => {
  //     window.localStorage.setItem('count', count);
  //   }, [count]);

  const increaseCount = () => {
    return setCount(count + 1);
  }
  const decreaseCount = () => {
    return setCount(count - 1)
  }

  // useEffect(() => {
  //     setText(JSON.parse(window.localStorage.getItem('text')));
  // }, []);

  // useEffect(() => {
  //     window.localStorage.setItem('text', text);
  // }, [text]);

  //   console.log(text)

  return (
    <div className="App">
      {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}

      <div className="logs">

        <div className="back_registr">
          <div className="circle">
            <div className="circle_2"></div>
            <div className="circle_1"></div>
          </div>
          <div className="right_up_quads">
            <div className="right_up_quad1"></div>
            <div className="right_up_quad2"></div>
          </div>
          <div className="restangle">
            <div className="restangle_1 elemrest"></div>
            <div className="restangle_2 elemrest"></div>
            <div className="restangle_3 elemrest"></div>
            <div className="restangle_4 elemrest"></div>
            <div className="restangle_5 elemrest"></div>
            <div className="restangle_6 elemrest"></div>
            <div className="restangle_7 elemrest"></div>
            <div className="restangle_8 elemrest"></div>
          </div>
          <div className="left_bottom_quad">
            <div className="left_bottom_quad1 lbq"></div>
            <div className="left_bottom_quad2 lbq"></div>
            <div className="left_bottom_quad3 lbq"></div>
          </div>
          <div className="right_bottom_quad">
            <div className="right_bottom_quad1 rbq"></div>
            <div className="right_bottom_quad2 rbq">&#9650;</div>
            <div className="right_bottom_quad3 rbq"></div>
          </div>
        </div>
        <div className="loginform">
          <div className="log">
            <div className="logform needs-validation">
              <div className="text_poll">PollHub</div>
              <div className="dop_text">
                <a className="textrega" href="log-in">Регистрация</a>
                <a className="textreg" href="log-in" >Вход</a>
              </div>
              <div className="inputtype">
                <input type="login" placeholder="E-mail" className="inputPassword" id="exampleInputEmail1" onChange={(e) => { setLogin(e.target.value) }} />
                <input placeholder="Пароль" className="inputPassword" id="InputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              <div className="lg-3 form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
              </div>
              <div className="button_c"><button className="btn btn-primary ghg" onClick={() => { request() }}><div className="btn_text_ghg">Продолжить</div></button></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}