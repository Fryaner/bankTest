import { NavLink } from 'react-router-dom';
import {
    LogotypeIcon,
    Home,
    Transfer,
    User,
    Economic,
    CreaditCard,
    Loan,
    Service,
    Econpmetrics,
    Settings,
    Notification,
    SettingsMain,
    Search,
    Pensil,
    Menu,
} from '../assets/images/images';
import './style.scss';

const SideBar = () => {
    return (
        <aside className='sideBarMenu'>
            <div className='sideBarMenu__logotype'>
                <LogotypeIcon/>
                <h1><a href="">BankDash.</a></h1>
            </div>
            <ul className='sideBarMenu__list'>
                <li>
                    <NavLink to="/" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                    <div className='borderItem'></div>
                        <Home className=''/>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/transfer" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                    <div className='borderItem'></div>
                        <Transfer className=''/>
                        Transactions
                    </NavLink>
                </li>
                    <li>
                    <NavLink to="/accounts" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                    <div className='borderItem'></div>
                        <User className=''/>
                        Accounts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/econpmetrics" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                    <div className='borderItem'></div>
                        <Econpmetrics className=''/>
                        Investments
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/creaditCard" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                    <div className='borderItem'></div>
                        <CreaditCard className=''/>
                        Credit Cards
                    </NavLink>
                </li>
                    <li>
                    <NavLink to="/loan" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                    <div className='borderItem'></div>
                        <Loan className=''/>
                        Loans
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/service" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                    <div className='borderItem'></div>
                        <Service className=''/>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/privileges" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                        <div className='borderItem'></div>
                        <Econpmetrics className=''/>
                        My Privileges
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={`sideBarMenu__list-element ${({ isActive }) => isActive ? "active" : ""}`} end>
                        <div className='borderItem'></div>
                        <Settings className=''/>
                        Setting
                    </NavLink>
                </li>
            </ul>
        </aside>
    )

}

export default SideBar;