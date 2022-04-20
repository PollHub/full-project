import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function More() {

    let {id} = useParams();

    let [counter, setCounter] = useState(0);
    // console.log(i)

    let data = JSON.parse(localStorage.getItem(id));
    console.log(data)

    const plus = (i) => {
        if (i === true) {
            setCounter(counter+1)
            console.log(counter)
        }
    }

    return(
        <div>
            <h2>{data.title}</h2>
            <div className="testContainer">
                {/* {data.questions.map(e => {
                    return (
                        <div key={e.text} className="blockTest">
                            <h4>{e.text}</h4>
                            {e.answers.map((i, v) => {
                                return (
                                    <div onClick={() => plus(i.correct)} key={i.answer}>
                                        <label>
                                            <input type="radio" name={i.answer}/>{i.answer}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })} */}
                <button className="startButtonTest">
                    <Link className="startButtonTestLink" to={`/questions/${data.id}/${data.questions[0].id}`}>
                        Start Test!
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default More;