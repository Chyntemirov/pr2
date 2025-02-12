// Данные для демонстрации
const ridesData = [
    { from: "Каракол", to: "Бишкек", date: "2025-02-20", driver: "Самат", price: "500 сом" },
    { from: "Бишкек", to: "Ош", date: "2025-02-10", driver: "Айдана", price: "300 сом" },
    { from: "Бишкек", to: "Нарын", date: "2025-02-15", driver: "Аваз", price: "350 сом" },
  ];
  
  // Функция для отображения доступных поездок
  function displayRides(rides) {
    const ridesList = document.getElementById("ridesList");
    ridesList.innerHTML = ''; // очищаем текущий список
    rides.forEach(ride => {
      const rideItem = document.createElement("div");
      rideItem.classList.add("ride-item");
      rideItem.innerHTML = `
        <h3>Кайдан: ${ride.from} Кайда: ${ride.to}</h3>
        <p>Убакыт: ${ride.date}</p>
        <p>Айдоочу: ${ride.driver}</p>
        <p>Баасы: ${ride.price}</p>
      `;
      ridesList.appendChild(rideItem);
    });
  }
  
  // Обработчик для формы поиска
  document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const from = document.getElementById("from").value.toLowerCase();
    const to = document.getElementById("to").value.toLowerCase();
    const date = document.getElementById("date").value;
  
    const filteredRides = ridesData.filter(ride => {
      return ride.from.toLowerCase().includes(from) &&
             ride.to.toLowerCase().includes(to) &&
             ride.date === date;
    });
  
    displayRides(filteredRides);
  });
  
  // Отображаем все поездки при загрузке страницы
  displayRides(ridesData);
  