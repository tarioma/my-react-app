import { useEffect } from 'react';
import $ from 'jquery';

const JqueryInReact = () => {
    useEffect(() => {
        // Пример манипуляции DOM с использованием jQuery
        $('#jquery-box').css('background-color', 'lightblue');

        // Обработка события клика
        $('#jquery-button').click(() => {
            alert('Кнопка нажата с помощью jQuery!');
        });
    }, []);

    return (
        <div>
            <h3>Интеграция jQuery в React</h3>
            <div id="jquery-box" style={{ width: '200px', height: '100px', margin: '20px 0' }}>
                Это блок для манипуляции с использованием jQuery
            </div>
            <button id="jquery-button">Нажми меня</button>
        </div>
    );
}

export default JqueryInReact;