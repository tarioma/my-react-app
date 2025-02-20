import {useContext} from "react";
import {MyContext} from "../Contexts/MyContext.jsx";

const DisplayValue = () => {
    const { value } = useContext(MyContext);

    return <p>Значение из контекста: {value}</p>;
}

export default DisplayValue;