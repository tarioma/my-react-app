import {useContext} from "react";
import {MyContext} from "../Contexts/MyContext.jsx";

const UpdateValue = () => {
    const { setValue } = useContext(MyContext);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Введите новое значение" />
        </div>
    );
}

export default UpdateValue;