import { useState } from 'react';
import axios from 'axios';

const AxiosPostExample = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title,
                body,
                userId: 1
            });
            setResponse(res.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h3>Форма для отправки POST-запроса с Axios</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Заголовок:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Тело:</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit" disabled={loading}>Отправить</button>
            </form>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error.message}</p>}
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
}

export default AxiosPostExample;