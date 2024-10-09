import MainBlock from "./mainBlock";
import SideBar from "./sideBarMenu/index";

function App() {
  return (
    <div style={{display: 'flex'}} className="App">
    <SideBar/>
    <MainBlock/>
    </div>
  );
}

export default App;
