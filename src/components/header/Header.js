import {Link} from 'react-router-dom'

function Header() {
    return (
            <div className="header">
                <div className='header__block'>
                    <div className='header__left'>
                        {/* <p className='title'>PollHub</p> */}
                        <div className='title'>PollHub</div>
                        <Link className='link' to={'/'}><p className='header__main'>Главная</p></Link>
                        <Link className='link' to={'/create'}><p className='header__test'>Тесты</p></Link>
                    </div>
                    <div className='header__right'>
                        <div className='photo__block'>
                            img
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;