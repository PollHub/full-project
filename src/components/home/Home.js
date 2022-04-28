import UseFetch from "../customHook/useFetch";
import { Link } from "react-router-dom";

function Home() {

    let {data} = UseFetch()

    return (
        <div className="home">
                {/* {data && data.map(e => {
                    return (
                        <div key={e.data.title} className="test">
                            <h3>{e.data.title}</h3>
                            <p>{e.data.description}</p>
                            <Link to={`/tests/${e.data.id}`}>
                                    <button>Пройти тест!</button>
                            </Link>
                        </div>
                    )
                })} */}
        </div>
    )
}

export default Home;