import axios from 'axios';

// Создание экземпляра Axios
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

// Интерцептор для запросов
axiosInstance.interceptors.request.use(
    (config) => {
        // Обработка запроса перед отправкой
        console.log('Запрос отправлен:', config);
        // Можно добавить заголовки, токены авторизации и т.д.
        return config;
    },
    (error) => {
        // Обработка ошибки запроса
        console.error('Ошибка запроса:', error);
        return Promise.reject(error);
    }
);

// Интерцептор для ответов
axiosInstance.interceptors.response.use(
    (response) => {
        // Обработка ответа перед передачей в компонент
        console.log('Ответ получен:', response);
        return response;
    },
    (error) => {
        // Обработка ошибки ответа
        console.error('Ошибка ответа:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;