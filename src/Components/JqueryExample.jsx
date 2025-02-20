import {useEffect} from "react";
import $ from 'jquery';

const JqueryExample = () => {
    useEffect(() => {
        // Селектор по ID
        $('#id-selector').css('color', 'blue');

        // Селектор по классу
        $('.class-selector').css('font-weight', 'bold');

        // Селектор по тегу
        $('p').css('font-style', 'italic');

        // Селектор по атрибуту
        $('input[name="name-selector"]').val('Введено с jQuery');

        // Комбинированные селекторы
        $('#combined-selector li:nth-child(odd)').css('background-color', '#f0f0f0');
    }, []);

    return (
        <div>
            <h3 id="id-selector">Это текст с использованием селектора по ID</h3>
            <p className="class-selector">Это текст с использованием селектора по классу</p>
            <p>Это абзац с использованием селектора по тегу</p>
            <input type="text" name="name-selector" />
            <ul id="combined-selector">
                <li>Элемент 1</li>
                <li>Элемент 2</li>
                <li>Элемент 3</li>
                <li>Элемент 4</li>
            </ul>
        </div>
    );
}

export default JqueryExample;
