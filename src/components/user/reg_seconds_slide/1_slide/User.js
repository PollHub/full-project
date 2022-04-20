import { Link } from "react-router-dom";

function User() {
    return (
        <div className="userContainer">
            <div className="links">
                <div>
                    <button>
                        <Link to={'/log-in'}>
                            Войти
                        </Link>
                    </button>
                </div>
                <div>
                    <button>
                        <Link to={'/register'}>
                            Зарегистрироватьcя
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User;