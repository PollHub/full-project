import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <Link to="/user" className='link'>User</Link>
                </div>
                <div>
                    <Link to="/" className='link'><h1>PollHub</h1></Link>
                </div>
                <div className="header__right">
                    <Link to="/create" className='link'>Create Test</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;