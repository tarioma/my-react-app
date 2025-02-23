import { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosExample = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Функция для отправки GET-запроса
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div>
            <h3>Пример работы с Axios</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default AxiosExample;