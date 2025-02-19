import './App.css'
import Greeting from "./Greeting.jsx";
import CurrentDateTime from "./CurrentDateTime.jsx";
import Counter from "./Counter.jsx";
import TextInput from "./TextInput.jsx";

const App = () => {
    return (
        <>
            <Greeting name="Константин"/>
            <CurrentDateTime/>
            <Counter/>
            <TextInput/>
        </>
    );
}

export default App;