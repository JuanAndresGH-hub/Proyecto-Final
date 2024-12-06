document.addEventListener("DOMContentLoaded", function () {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  const exchangeHistory = [
      { item: "Teléfono Samsung S20", date: "01/10/2024", rating: 4 },
      { item: "Auriculares Bose", date: "15/10/2024", rating: 5 },
      { item: "Reloj Inteligente Xiaomi", date: "22/11/2024", rating: 3 },
  ];

  const exchangeList = document.getElementById("exchange-history");
  exchangeHistory.forEach(exchange => {
      const li = document.createElement("li");
      li.innerHTML = `
          <strong>Producto:</strong> ${exchange.item}<br>
          <strong>Fecha:</strong> ${exchange.date}<br>
          <div class="rating">Valoración: ${renderStars(exchange.rating)}</div>
      `;
      exchangeList.appendChild(li);
  });

  const reviewContainer = document.getElementById("reviews");
  reviews.forEach(review => {
      const div = document.createElement("div");
      div.classList.add("review");
      div.innerHTML = `
          <strong>${review.user}</strong><br>
          <em>${review.comment}</em><br>
          <div class="rating">Puntuación: ${renderStars(review.rating)}</div>
      `;
      reviewContainer.appendChild(div);
  });

  function renderStars(rating) {
      let stars = "";
      for (let i = 0; i < rating; i++) {
          stars += "★";
      }
      for (let i = rating; i < 5; i++) {
          stars += "☆";
      }
      return stars;
  }
});
