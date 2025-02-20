import {useEffect} from "react";
import $ from 'jquery';

const EventHandlers = () => {
    useEffect(() => {
        // Обработчик события клика
        $('#click-button').click(() => {
            alert('Кнопка нажата!');
        });

        // Обработчик события наведения мыши (hover)
        $('#hover-box').hover(
            () => {
                $('#hover-box').css('background-color', 'lightblue');
            },
            () => {
                $('#hover-box').css('background-color', 'lightgray');
            }
        );

        // Обработчик события ввода текста
        $('#text-input').on('input', () => {
            const inputValue = $('#text-input').val();
            $('#input-result').text(`Вы ввели: ${inputValue}`);
        });
    }, []);

    return (
        <div>
            <button id="click-button">Нажми меня</button>
            <div id="hover-box" style={{ width: '200px', height: '100px', backgroundColor: 'lightgray', margin: '20px 0' }}>
                Наведи на меня
            </div>
            <input type="text" id="text-input" placeholder="Введите текст" />
            <p id="input-result"></p>
        </div>
    );
}

export default EventHandlers;