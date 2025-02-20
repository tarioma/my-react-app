import './App.css'
import Greeting from "./Components/Greeting.jsx";
import CurrentDateTime from "./Components/CurrentDateTime.jsx";
import Counter from "./Components/Counter.jsx";
import TextInput from "./Components/TextInput.jsx";
import DataFetcher from "./Components/DataFetcher.jsx";
import UserList from "./Components/UserList.jsx";
import {MyProvider} from "./Contexts/MyContext.jsx";
import DisplayValue from "./Components/DisplayValue.jsx";
import UpdateValue from "./Components/UpdateValue.jsx";

const App = () => {
    return (
        <MyProvider>
            <Greeting name="Константин"/>
            <CurrentDateTime/>
            <Counter/>
            <TextInput/>
            <DataFetcher/>
            <UserList/>
            <DisplayValue/>
            <UpdateValue/>
        </MyProvider>
    );
}

export default App;