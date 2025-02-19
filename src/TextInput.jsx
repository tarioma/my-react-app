import {useState} from "react";

const TextInput = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div style={{marginTop: 14}}>
            <input type="text" value={text} onChange={handleChange}/>
            <p>Введённый текст: {text}</p>
        </div>
    );
};

export default TextInput;