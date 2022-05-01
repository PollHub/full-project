import {Link} from 'react-router-dom'
import user from '../../img/userImg.svg';

function Header() {
    return (
            <div className="header">
                <div className='back__logos'>
                    <div className='squares'>
                        <div className='square__one'></div>
                        <div className='square__two'></div>
                    </div>
                    <div className='circles'>
                        <div className='circle__one'></div>
                    </div>
                </div>
                <div className='header__block'>
                    <div className='header__left'>
                        {/* <p className='title'>PollHub</p> */}
                        <div className='title'>PollHub</div>
                        <Link className='link' to={'/'}><p className='header__main'>Главная</p></Link>
                        <Link className='link' to={'/create'}><p className='header__test'>Тесты</p></Link>
                    </div>
                    <div className='header__right'>
                        <div>
                            <Link to={"/profile"}>
                                <img className='photo__block' src={user}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;