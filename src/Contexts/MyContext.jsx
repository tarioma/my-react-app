import {createContext, useState} from "react";

const MyContext = createContext(undefined);

const MyProvider = ({children}) => {
    const [value, setValue] = useState('Hello, World!');

    return (
        <MyContext.Provider value={{value, setValue}}>
            {children}
        </MyContext.Provider>
    );
}

export {MyContext, MyProvider};