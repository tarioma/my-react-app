import './App.css'
import Greeting from "./Components/Greeting.jsx";
import CurrentDateTime from "./Components/CurrentDateTime.jsx";
import Counter from "./Components/Counter.jsx";
import TextInput from "./Components/TextInput.jsx";
import DataFetcher from "./Components/DataFetcher.jsx";
import UserList from "./Components/UserList.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Profile from "./Pages/Profile.jsx";
import DisplayValue from "./Components/DisplayValue.jsx";
import UpdateValue from "./Components/UpdateValue.jsx";
import {MyProvider} from "./Contexts/MyContext.jsx";
import PrivateRoute from "./Pages/PrivateRoute.jsx";
import JqueryExample from "./Components/JqueryExample.jsx";
import EventHandlers from "./Components/EventHandlers.jsx";
import Animations from "./Components/Animations.jsx";
import AjaxExample from "./Components/AjaxExample.jsx";
import LodashExample from "./Components/LodashExample.jsx";
import LodashObjectsCollections from "./Components/LodashObjectsCollections.jsx";
import LodashUtilities from "./Components/LodashUtilities.jsx";
import D3Example from "./Components/D3Example.jsx";
import LineChart from "./Components/LineChart.jsx";
import ScalesAndAxes from "./Components/ScalesAndAxes.jsx";
import InteractiveChart from "./Components/InteractiveChart.jsx";
import ComplexVisualizations from "./Components/ComplexVisualizations.jsx";
import BigDataVisualization from "./Components/BigDataVisualization.jsx";
import AxiosPostExample from "./Components/AxiosPostExample.jsx";
import AxiosExample from "./Components/AxiosExample.jsx";
import FetchDataWithAxios from "./Components/FetchDataWithAxios.jsx";
import UpdateDataWithAxios from "./Components/UpdateDataWithAxios.jsx";
import JqueryInReact from "./Components/JqueryInReact.jsx";

const App = () => {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/profile">Профиль</Link></li>
                    </ul>
                </nav>
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/profile" element={<PrivateRoute component={Profile}/>}/>
                    </Routes>
                    <JqueryInReact/>
                    <UpdateDataWithAxios/>
                    <FetchDataWithAxios/>
                    <AxiosPostExample/>
                    <AxiosExample/>
                    <BigDataVisualization/>
                    <ComplexVisualizations/>
                    <InteractiveChart/>
                    <ScalesAndAxes/>
                    <LineChart/>
                    <D3Example/>
                    <LodashUtilities/>
                    <LodashObjectsCollections/>
                    <LodashExample/>
                    <AjaxExample/>
                    <Animations/>
                    <EventHandlers/>
                    <JqueryExample/>
                    <MyProvider>
                        <Greeting name="Мир"/>
                        <CurrentDateTime/>
                        <Counter/>
                        <TextInput/>
                        <DataFetcher/>
                        <UserList/>
                        <DisplayValue/>
                        <UpdateValue/>
                    </MyProvider>
                </header>
            </div>
        </Router>
    );
}

export default App;