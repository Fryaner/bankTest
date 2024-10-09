import image from '../../assets/images/Mask Group.jpg';
import './style.scss';
import {Pensil} from '../../assets/images/images'
import { useState } from 'react';


const MainInfo = () => {
    const [isButtonActive1, setIsButtonActive1] = useState(true);
    const [isButtonActive2, setIsButtonActive2] = useState(false);
    const [isButtonActive3, setIsButtonActive3] = useState(false);

    const [activeTabIndex, setActiveTabIndex] = useState(0);


const handleButtonClick1 = () => {
    setActiveTabIndex(0); 
    setIsButtonActive1(true);
    setIsButtonActive2(false);
    setIsButtonActive3(false);
  };
const handleButtonClick2 = () => {
    setActiveTabIndex(1); 
    setIsButtonActive1(false);
    setIsButtonActive2(true);
    setIsButtonActive3(false);
  };
const handleButtonClick3 = () => {
    setActiveTabIndex(2); 
    setIsButtonActive1(false);
    setIsButtonActive2(false);
    setIsButtonActive3(true);
  };
    return (
        <main className='mainInfo'>
            <div className='mainInfo__tabs'>
                <div className='mainInfo__tabs-edit mainInfo__tab'>
                    <a href="#" onClick={handleButtonClick1} className={`${isButtonActive1 ? 'active' : ''}`}>
                    Edit Profile
                    </a>
                    <div className={`mainInfo__tabs-borderBottom ${activeTabIndex === 0 ? 'active' : ''}`}>
                        <div className="borderActive"></div>
                    </div>
                </div>
                <div className='mainInfo__tabs-preferences mainInfo__tab'>
                    <a href="#" onClick={handleButtonClick2} className={`${isButtonActive2 ? 'active' : ''}`}>
                    Preferences
                    </a>
                    <div className={`mainInfo__tabs-borderBottom ${activeTabIndex === 1 ? 'active' : ''}`}>
                        <div className="borderActive"></div>
                    </div>
                    </div>
                <div className='mainInfo__tabs-security mainInfo__tab'>
                    <a href="#" onClick={handleButtonClick3} className={`${isButtonActive3 ? 'active' : ''}`}>
                    Security
                    </a>
                    <div className={`mainInfo__tabs-borderBottom ${activeTabIndex === 2 ? 'active' : ''}`}>
                        <div className="borderActive"></div>
                    </div>
                </div>
            </div>
            <section className='mainInfo__edit'>
                <div className='mainInfo__container-userIcon'>
                    <div className='mainInfo__edit-userIcon'>
                        <img src={image}/>
                        <div className='mainInfo__edit-pensil'>
                            <Pensil/>
                        </div>
                    </div>
                </div>
                <form className='form'>
                    <div className='formInfo'>
                        <div className='formInfo__pare'>
                            <div className='formInfo__pare-name formInfo__formInput'>
                                    <label for="name">Your name</label>
                                    <input name='name' id="name" type="text" placeholder="Charlene Reed"/>
                                </div>
                            <div className='formInfo__pare-login formInfo__formInput'>
                                    <label for="login">User Name</label>
                                    <input name='login' id="login" type="text" placeholder="Charlene Reed "/>
                            </div>
                        </div>
                        <div className='formInfo__pare'>
                            <div className='formInfo__pare-email formInfo__formInput'>
                                    <label for="email">Email</label>
                                    <input name='email' id="email" type="email" placeholder='charlenereed@gmail.com '/>
                                </div>
                                <div className='formInfo__pare-address formInfo__formInput'>
                                    <label for="password">Password</label>
                                    <input name='password' id="password" type="password" placeholder="**********"/>
                                </div>
                        </div>
                        <div className='formInfo__pare'>
                            <div className='formInfo__pare-code formInfo__formInput'>
                                    <label for="date">Date of Birth</label>
                                    <input name='date' id="date" type="date"/>
                                </div>
                                <div className='formInfo__pare-userName formInfo__formInput'>
                                    <label for="presentAddress">Present Address</label>
                                    <input name='presentAddress' id="presentAddress" type="text" placeholder="San Jose, California, USA"/>
                                </div>
                        </div>
                        <div className='formInfo__pare'>
                            <div className='formInfo__pare-password formInfo__formInput'>
                                    <label for="permanentAddress">Permanent Address</label>
                                    <input id="permanentAddress" type="text" placeholder="San Jose, California, USA"/>
                                </div>
                                <div className='formInfo__pare-presentAddress formInfo__formInput'>
                                    <label for="city">City</label>
                                    <input id="city" type="text" placeholder="San Jose"/>
                                </div>
                        </div>
                        <div className='formInfo__pare'>
                            <div className='formInfo__pare-city formInfo__formInput'>
                                    <label for="postalCode">Postal Code</label>
                                    <input name='postalCode' id="postalCode" type="text" placeholder="45962"/>
                                </div>
                                <div className='formInfo__pare-country formInfo__formInput'>
                                    <label for="country">Country</label>
                                    <input name='country' id="country" type="text" placeholder="USA"/>
                                </div>
                        </div>
                    </div>
                    <div className='form__btn'>
                        <a href="">Save</a>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default MainInfo;