function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD") // Elimina acentos y tildes
        .replace(/[\u0300-\u036f]/g, ""); // Reemplaza caracteres diacríticos
}

function redirectToChat(event) {
    // Obtener la tarjeta que fue clickeada
    const card = event.currentTarget;

    // Buscar el título del producto en la tarjeta
    const title = normalizeText(card.querySelector("h2").textContent.trim());

    // Definir el mapeo de productos a archivos de chat (normalizado)
    const productToChat = {
        "computador lenovo legion": "chat-juan.html",
        "iphone 15 pro max usado": "chat-steeven.html",
        "airpods 3ro gen casi nuevo": "chat-carlos.html",
        "apple watch series 7 en buen estado": "chat-kevin.html",
        "mouse deathadder v2x hyperspeed": "chat-yenny.html",
        "teclado logitech g413 casi nuevo": "chat-martha.html",
        "monitor asus 24 pulgadas casi nuevo": "chat-maria.html",
        "mouse logitech g305 casi nuevo": "chat-isabel.html",
        "mouse logitech g102 casi nuevo": "chat-daniel.html",
        "mouse logitech g502 hero usado": "chat-ana.html",
    };

    // Buscar el archivo de chat correspondiente
    const chatFile = productToChat[title];

    if (chatFile) {
        // Redirigir al archivo del chat correspondiente
        window.location.href = `../../html/chat/${chatFile}`;
    } else {
        console.error("No se encontró el archivo de chat para este producto:", title);
    }
}

// Agregar listeners a las tarjetas después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", redirectToChat);
    });
});
