import { useState} from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"
// import J from './primer/J'

function Create() {

    function id() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    let [title, setTitle] = useState('Название вашего теста');

    let [description, setDescription] = useState('');

    let history = useHistory();

    let [counter, setCounter] = useState([0])

    let [discipline, setDiscipline] = useState('')

    let [test, setTest] = useState({id: id(), subject: discipline, title: title, questions: [], description: description, count: 0})
    // console.log(test)

    function next() {
        let name = title;
        let more = description;
        test.subject = discipline;
        test.title = name;
        test.description = more;
        console.log(test)
        localStorage.setItem(test.id, JSON.stringify(test));
    }

    function lesson() {
        let select = document.querySelector('.correctInput');
        for (let i = 0; i < select.length; i++) {
            if (select[i].selected) {
                // console.log(select[i].value)
                setDiscipline(select[i].value)
            }
        }
    }

    return (
        <div className="create">
            <div className="create__container">
                <div className="inputTitle">
                    <input className="title__input" placeholder={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="inputs">
                    {counter.map((e) => {
                        return (
                            <div key={e}>
                                <div className="firstInputs">
                                    <select className="correctInput" onChange={() => lesson()}>
                                        <option>Выберите предмет</option>
                                        <option>Математика</option>
                                        <option>История</option>
                                        <option>Английский</option>
                                        <option>Python</option>
                                        <option>JavaScript</option>
                                    </select>
                                    <input placeholder="Description of Test" className="descriptionInput" onChange={(e) => {setDescription(e.target.value)}}/>
                                    <Link to={`create/${test.id}`}><button onClick={() => {next()}} className="buttonNext">Далее</button></Link>
                                    {/* <button onClick={() => {next()}}>Check</button> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Create;