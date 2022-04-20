import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Createquestion() {

    let history = useHistory()

    function id() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    let params = useParams()
    let data = JSON.parse(localStorage.getItem(params.id));
    let [test, setTest] = useState({id: data.id, subject: data.subject, title: data.title, questions: [], description: data.description, count: 0})
    // console.log(data)

    function DelAnswer(id) {
        let change = answerCounter.filter(e => e.id !== id);
        // console.log(change)
        setAnswerCounter(change)
    }

    function check() {
        let answersArray = [];
        let answers = document.querySelectorAll('.answerBlocks');
        let questionText = document.querySelector('.questionInput');

        answers.forEach(e => {
            // console.log(e)
            let inCorrect = {answer: e.querySelector('.answerInput').value, correct: false}
            if (e.querySelector('.trueButtonChecked') != null) {
                inCorrect.correct = true
            } else if (e.querySelector('.trueButtonChecked') === null) {
                inCorrect.correct = false
            }
            answersArray.push(inCorrect);
        })
        // setAnswerHeaders(answersArray);

        let question = {id: test.questions.length, text: questionText.value, answers: answersArray, userAnswer: null}
        test.questions.push(question)
        console.log(question)
        questionText.value = '';
        setAnswerCounter([{id: id()}]);
        console.log(test)
    }

    function trueButton(id) {
        let trueButton = document.querySelectorAll('.trueButton');
        let falseButton = document.querySelectorAll('.falseButtonChecked');
        let falseChecked = null;

        falseButton.forEach(e => {
            if (e.id === id) {
                falseChecked = e;
                // console.log(345)
            }
        })

        console.log(falseChecked)

        trueButton.forEach(e => {
            if (falseChecked.classList[0] === 'falseButtonChecked') {
                if (e.id === id) {
                    e.classList = 'trueButtonChecked';
                    falseChecked.classList = 'falseButton'
                }
            } else if (e.id === id) {
                e.classList = 'trueButtonChecked'
            }
        })
    }

    function falseButton(id) {
        let falseButton = document.querySelectorAll('.falseButton');
        let trueButton = document.querySelectorAll('.trueButton');

        console.log(falseButton)

        falseButton.forEach(e => {
            // console.log(e)
            if (e.id === id) {
                e.classList = 'falseButtonChecked'
            }
        })
    }

    function addAnswer() {
        setAnswerCounter([
            ...answerCounter,
            {id: id()}
        ])
    }

    let [answerCounter, setAnswerCounter] = useState([{id: 'abc'}]);

    let [questionInput, setQuestionInput] = useState('');

    function create() {
        localStorage.setItem(test.id, JSON.stringify(test));
        console.log(test)
        console.log(JSON.stringify(test))
        history.push('/')
    }

    return (
        <div className="createquestion">
            <div className="createquestionfirstinputs">
                {/* <input onChange={() => } className="createquestionTitle"/>
                <input value={test.description} className="createquestionDescription"/> */}
                <input placeholder="Question" className="questionInput" onChange={(e) => setQuestionInput(e.target.value)}/>
            </div>
            {answerCounter.map((i) => {
                // console.log(i.id)
                return (
                    <div key={i.id} className="answerBlocks">
                        <button onClick={() => {DelAnswer(i.id)}} className="delQuestionAnswer">Del</button>
                        <input className="answerInput" placeholder="Answer"/>
                        <button id={i.id} className="trueButton" onClick={() => {trueButton(i.id)}}>True</button>
                        {/* <button id={i.id} className="falseButton" onClick={() => {falseBut on(i.id)}}>False</button */}
                        <button id={i.id} className="falseButtonChecked" onClick={() => {falseButton(i.id)}}>False</button>
                    </div>
                )
            })}
            <div className="buttons">
                    <div className="buttonsLeft">
                        <button className="answerAddButton" onClick={() => addAnswer()}>Add Answer</button>
                        <button onClick={() => {check()}}>Add Question!</button>
                    </div>
                    <div className="buttonsRight">
                        <button onClick={() => create()}>Create Test</button>
                    </div>
                </div>
        </div>
    )
}

export default Createquestion;