import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import Answer from "./Answer";

function Question() {

    let param = useParams()
    // console.log(param)

    let data = JSON.parse(localStorage.getItem(param.id));
    // console.log(data.questions[+param.i+1])
    // console.log(data)

    let [disableNext, setDisableNext] = useState(false);
    // let corrects = 0;
    let [corrects, setCorrects] = useState(0);

    let [correctCount, setCorrectCount] = useState(0);

    function saveAnswer(e) {
        let id = data.id
        let all = data
        data.questions[param.i].userAnswer = e.answer
        // console.log(data.questions[param.i])
        localStorage.setItem(id, JSON.stringify(all))
        // console.log(e.correct)
        setCorrects(corrects+1)
    }

    function finish() {
        data.count = corrects;
        let title = data.title
        let all = data
        console.log(data)
        localStorage.setItem(title, JSON.stringify(all))
        console.log(corrects)
    }

    function check() {
        console.log(data.questions[param.i].answers)
        data.questions[param.i].answers.map(e => {
            if (e.correct === true) {
                setCorrectCount(correctCount+1)
            }
        })
        console.log(correctCount)
    }

    // checked={data.questions[param.i].userAnswer === e.answer}
    // console.log(data.questions[param.i])

    return (
        <div className="questionContainer">
            <p>{`Question${+param.i+1}`}</p>
            <div className="questionAnswer">
                <h3>{data.questions[param.i].text}</h3>
                {data.questions[param.i].answers.map((e, i) => {
                    // console.log(e)
                    return (
                        <div key={e.answer}>
                                <input type="radio" onChange={() => console.log(true)} name="q1" onClick={(f) => {saveAnswer(e)}} checked={data.questions[param.i].userAnswer === e.answer}/>
                                <label htmlFor="q1">{e.answer}</label>
                        </div>
                    )
                })}
                <div className="questionsButtons">
                    {param.i === '0' ?
                        <button disabled>
                            Prev
                        </button> 
                        :
                        <button>
                            <Link to={`/questions/${data.id}/${data.questions[param.i].id-1}`}>
                                Prev
                            </Link>
                        </button>
                    }
                    <div className={disableNext ? 'btnNextNone' : 'btnNext'}>
                        {data.questions.length === (+param.i)+1 ? 
                            <button onClick={() => finish()}>
                                <Link to={`/finish/${data.id}`}>
                                    Finish
                                </Link>
                            </button>
                            :
                            <button onClick={() => {console.log(true)}}>
                                <Link to={`/questions/${data.id}/${data.questions[param.i].id+1}`}>Next</Link>
                            </button>
                        }
                    </div>
                    <button onClick={() => check()}>
                        Check
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Question;