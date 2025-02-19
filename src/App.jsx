import './App.css'
import Greeting from "./Components/Greeting.jsx";
import CurrentDateTime from "./Components/CurrentDateTime.jsx";
import Counter from "./Components/Counter.jsx";
import TextInput from "./Components/TextInput.jsx";
import DataFetcher from "./Components/DataFetcher.jsx";
import UserList from "./Components/UserList.jsx";

const App = () => {
    return (
        <>
            <Greeting name="Константин"/>
            <CurrentDateTime/>
            <Counter/>
            <TextInput/>
            <DataFetcher/>
            <UserList/>
        </>
    );
}

export default App;