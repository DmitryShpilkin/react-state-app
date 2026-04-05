import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
    // Хук useState для хранения значения счётчика
    const [count, setCount] = useState(0);

    // Хук useEffect для добавления и удаления обработчика событий клавиатуры
    useEffect(() => {
        // Функция-обработчик нажатий клавиш
        const handleKeyPress = (event) => {
            // Если нажата клавиша "стрелка вверх", увеличиваем счётчик
            if (event.key === "ArrowUp") {
                setCount((prev) => prev + 1);
            }
            // Если нажата клавиша "стрелка вниз", уменьшаем счётчик
            if (event.key === "ArrowDown") {
                setCount((prev) => prev - 1);
            }
        };

        // Добавляем обработчик события keydown на window
        window.addEventListener("keydown", handleKeyPress);

        // Возвращаем функцию очистки, чтобы удалить слушатель при размонтировании компонента
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []); // Зависимости пустые, значит эффект выполнится только при монтировании и размонтировании

    return (
        <div className="counter">
            <h2>Счётчик</h2>
            <p>Текущее значение: {count}</p>
            {/* Кнопка для увеличения значения счётчика */}
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
            {/* Кнопка для уменьшения значения счётчика */}
            <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        </div>
    );
};

export default Counter;