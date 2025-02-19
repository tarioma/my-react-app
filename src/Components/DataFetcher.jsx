import {useEffect, useState} from "react";
import axios from 'axios';

const DataFetcher = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.ipify.org?format=json');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    // Отображение состояния загрузки, ошибки или данных
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div>
            <h2>Данные из API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );

};

export default DataFetcher;