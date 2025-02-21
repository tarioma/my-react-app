import _ from 'lodash';
import {useEffect} from "react";

const LodashUtilities = () => {
    useEffect(() => {
        // Пользовательская утилита для получения уникальных значений из массива
        const getUniqueValues = (array) => {
            return _.uniq(array);
        };

        const array = [1, 2, 2, 3, 4, 4, 5];
        const uniqueValues = getUniqueValues(array);
        console.log('Уникальные значения массива:', uniqueValues);

        // Пользовательская утилита для подсчета частоты значений в массиве
        const countFrequency = (array) => {
            return _.countBy(array);
        };

        const frequency = countFrequency(array);
        console.log('Частота значений в массиве:', frequency);

        // Пример оптимизации кода для поиска максимального значения в массиве
        const maxNumber = _.max(array);
        console.log('Максимальное значение в массиве:', maxNumber);

        // Пример оптимизации кода для группировки объектов по значению свойства
        const users = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 25 },
            { name: 'David', age: 30 },
            { name: 'Eve', age: 35 }
        ];

        const groupedByAge = _.groupBy(users, 'age');
        console.log('Пользователи, сгруппированные по возрасту:', groupedByAge);

        // Пример оптимизации кода для сортировки объектов по значению свойства
        const sortedByName = _.sortBy(users, 'name');
        console.log('Пользователи, отсортированные по имени:', sortedByName);
    }, []);

    return (
        <div>
            <h3>Смотрите консоль для вывода результатов пользовательских утилит и оптимизации кода с Lodash</h3>
        </div>
    );
}

export default LodashUtilities;
