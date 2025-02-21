import { useEffect } from 'react';
import _ from 'lodash';

const LodashObjectsCollections = () => {
    useEffect(() => {
        // Исходный объект для манипуляции
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };

        // Пример использования _.assign
        const assignedObj = _.assign({}, obj1, obj2);
        console.log('Объект после применения _.assign:', assignedObj);

        // Пример использования _.cloneDeep
        const originalObj = { a: 1, b: { c: 2 } };
        const clonedObj = _.cloneDeep(originalObj);
        console.log('Исходный объект:', originalObj);
        console.log('Глубокая копия объекта:', clonedObj);

        // Изменение клонированного объекта для демонстрации
        clonedObj.b.c = 3;
        console.log('Измененный клонированный объект:', clonedObj);
        console.log('Исходный объект после изменения клона:', originalObj);

        // Исходный массив для работы с коллекциями
        const users = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 25 },
            { name: 'David', age: 30 },
            { name: 'Eve', age: 35 }
        ];

        // Пример использования _.groupBy
        const groupedByAge = _.groupBy(users, 'age');
        console.log('Коллекция после применения _.groupBy:', groupedByAge);

        // Пример использования _.sortBy
        const sortedByName = _.sortBy(users, 'name');
        console.log('Коллекция после применения _.sortBy:', sortedByName);
    }, []);

    return (
        <div>
            <h3>Смотрите консоль для вывода результатов Lodash</h3>
        </div>
    );
}

export default LodashObjectsCollections;
