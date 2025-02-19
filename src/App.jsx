import './App.css'
import Greeting from "./Greeting.jsx";
import CurrentDateTime from "./CurrentDateTime.jsx";

const App = () => {
    return (
        <>
            <Greeting name="Константин"/>
            <CurrentDateTime/>
        </>
    );
}

export default App;