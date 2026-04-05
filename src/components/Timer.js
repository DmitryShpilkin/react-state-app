import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
    // Хук useState для хранения текущего значения таймера (в секундах)
    const [time, setTime] = useState(0);

    // Хук useState для хранения интервала обновления таймера (по умолчанию 1000 мс = 1 секунда)
    const [intervalTime, setIntervalTime] = useState(1000);

    // Хук useState для управления состоянием таймера: запущен или нет
    const [isRunning, setIsRunning] = useState(true);

    // Хук useEffect для запуска и остановки интервала обновления времени
    useEffect(() => {
        // Если таймер не запущен, выходим из эффекта (ничего не делаем)
        if (!isRunning) return;

        // Создаём интервал, который каждую intervalTime миллисекунд увеличивает time на 1
        const timer = setInterval(() => {
            setTime((prev) => prev + 1);
        }, intervalTime);

        // Возвращаем функцию очистки: она вызывается при размонтировании компонента или при изменении зависимостей
        // Очищаем интервал, чтобы избежать утечек памяти и лишних срабатываний
        return () => clearInterval(timer);
    }, [isRunning, intervalTime]); // Эффект зависит от isRunning и intervalTime

    return (
        <div className="timer">
            <h2>Таймер</h2>
            <p>Прошло времени: {time} секунд</p>
            {/* Кнопка для запуска/паузы таймера */}
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Пауза" : "Запустить"}
            </button>
            {/* Кнопка для сброса таймера в начальное значение */}
            <button onClick={() => setTime(0)}>Сброс</button>
            {/* Поле для изменения интервала обновления таймера */}
            <input
                type="number"
                placeholder="Интервал (мс)"
                onChange={(e) => setIntervalTime(Number(e.target.value))}
            />
        </div>
    );
};

export default Timer;