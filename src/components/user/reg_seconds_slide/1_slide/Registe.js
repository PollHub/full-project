import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// function Register() {

//     let [status, setStatus] = useState('');
//     let [name, setName] = useState('');
//     let [surname, setSurname] = useState('');
//     let [email, setEmail] = useState('');
//     let [compair, setCompair] = useState('');

//     let history = useHistory();

//     function check() {
//         let data = document.querySelectorAll('.option');
//         for (let i = 0; i < data.length; i++) {
//             if (data[i].selected) {
//                 console.log(data[i].value)
//                 setStatus(data[i].value)
//             }
//         }
//     }

//     function data() {
//         let data = {name: name, surname: surname, email: email, status: status};
//         console.log(JSON.stringify(data))
//         setName('');
//         setSurname('');
//         setEmail('');
//         setStatus('');
//         history.push('/')
//     };

//     return (
//         <div className="register">
//             <h3>Registration</h3>
//             <form>
//                 <select className="select" onChange={() => check()}>
//                     <option className="option">teacher</option>
//                     <option className="option">student</option>
//                 </select>
//                 <input placeholder="name" className="registerInput" onChange={(e) => {setName(e.target.value)}}/>
//                 <input placeholder="surname" className="registerInput" onChange={(e) => {setSurname(e.target.value)}}/>
//                 <input placeholder="outlook email" className="registerInput" onChange={(e) => {setEmail(e.target.value)}}/>
//                 <input placeholder="confirmation email" className="registerInput" onChange={(e) => {setCompair(e.target.value)}}/>
//             </form>
//             <button className="registerButton" onClick={() => data()}>
//                 Compair!
//             </button>
//         </div>
//     )
// }

// export default Register;

function Register() {

    let [status, setStatus] = useState('');
    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [email, setEmail] = useState('');
    let [compair, setCompair] = useState('');
    let [password, setPassword] = useState('');

    let history = useHistory();

    function request() {
        var formdata = new FormData();
        formdata.append("username", name);
        formdata.append("email", email);
        formdata.append("password", password);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("http://192.168.237.200:8000/auth/users/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    function check() {
        let data = document.querySelectorAll('.option');
        for (let i = 0; i < data.length; i++) {
            if (data[i].selected) {
                // console.log(data[i].value)
                setStatus(data[i].value)
            }
        }
    }

    function data() {
        let data = {name: name, surname: surname, email: email, status: status};
        console.log(JSON.stringify(data))
        setName('');
        setSurname('');
        setEmail('');
        setStatus('');
        history.push('/')
    };


    // useEffect(() => {
    //     setStatus(JSON.parse(window.localStorage.getItem('status')));
    // }, []);
    
    // useEffect(() => {
    //     window.localStorage.setItem('status', status);
    // }, [status]);

    return (
        <div className="register">
            <h3>Registration</h3>
            <form>
                <select className="select" onChange={() => check()}>
                    <option className="option">teacher</option>
                    <option className="option">student</option>
                </select>
                <input placeholder="name" className="registerInput" onChange={(e) => {setName(e.target.value)}}/>
                <input placeholder="surname" className="registerInput" onChange={(e) => {setSurname(e.target.value)}}/>
                <input placeholder="outlook email" className="registerInput" onChange={(e) => {setEmail(e.target.value)}}/>
                <input placeholder="confirmation email" className="registerInput" onChange={(e) => {setCompair(e.target.value)}}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </form>
            {/* <button className="registerButton" onClick={() => data()}>
                Compair!
            </button> */}
            <button onClick={() => {request()}}>
                Compair!
            </button>
        </div>
    )
}

export default Register;