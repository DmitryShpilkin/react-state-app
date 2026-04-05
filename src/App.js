import React from "react";
// Импорт компонента Counter из указанной папки
import Counter from "./components/Counter";
// Импорт компонента Timer из указанной папки
import Timer from "./components/Timer";

// Главный компонент приложения
const App = () => {
  return (
    // Основной контейнер приложения с центрированием и отступами
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Заголовок приложения */}
      <h1>React State App</h1>
      {/* Вставка компонента Counter */}
      <Counter />
      {/* Вставка компонента Timer */}
      <Timer />
    </div>
  );
};

// Экспорт компонента App для использования в других файлах (например, в index.js)
export default App;
