import { Outlet } from "react-router-dom";
import Header from "./header"
import MainInfo from "./mainInfo"
import './style.scss';
const MainBlock = () => {
    return (
        <div className="mainBlock">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default MainBlock;