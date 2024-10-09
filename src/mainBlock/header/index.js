import {Menu, Notification, SettingsMain} from '../../assets/images/images';
import image from '../../assets/images/Mask Group.jpg';

import './style.scss';
const Header = () => {
    return (
        <header className='header'>
                <div className='header__menu'>
                    <Menu/>
                </div>
            <div className='header__title'>
                 <h2>Setting</h2>
            </div>
            <div className='header__search'>
                <input placeholder="Search for something" type="text"/>
            </div>
            <div className='header__settings'>
                    <a href='#' className='header__settings-settings'></a>
                    <a href="#" className='header__settings-notification'></a>
                    <div className='header__settings-user'>
                        <a href="">
                            <img src={image}/>
                        </a>
                    </div>
            </div>
        </header>
    )
}

export default Header;