import {useEffect} from "react";
import _ from 'lodash';

const LodashExample = () => {
    useEffect(() => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // Пример использования _.map
        const mappedArray = _.map(array, num => num * 2);
        console.log('Массив после применения _.map:', mappedArray);

        // Пример использования _.filter
        const filteredArray = _.filter(array, num => num % 2 === 0);
        console.log('Массив после применения _.filter:', filteredArray);

        // Пример использования _.reduce
        const reducedValue = _.reduce(array, (sum, num) => sum + num, 0);
        console.log('Значение после применения _.reduce:', reducedValue);
    }, []);

    return (
        <div>
            <h3>Смотрите консоль для вывода результатов Lodash</h3>
        </div>
    );
}

export default LodashExample;
