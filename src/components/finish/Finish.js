import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Finish() {

    let param = useParams();

    let data = JSON.parse(localStorage.getItem(param.id))

    let count = 0

    data.questions.map(e => {
        count+=1
    })

    console.log(data.questions)

    return (
        <div className="finish__container">
            <div>
                <h2>{data.title}</h2>
                <p>Вы набрали {data.count} баллов из {count}</p>
                <button>
                    <Link to={`/`}>
                        Готов!
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Finish;