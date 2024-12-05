document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const sendButton = document.getElementById('sendButton');

    // Base de datos de respuestas del bot
    const botResponses = {
        "hola": "¡Hola! ¿Cómo puedo ayudarte?",
        "cómo estás": "Estoy bien, gracias por preguntar. ¿Y tú?",
        "adiós": "¡Hasta luego! Fue un placer hablar contigo.",
        "qué puedes hacer": "Puedo responder preguntas simples. ¡Intenta preguntarme algo!",
        "default": "Lo siento, no entendí eso. ¿Puedes intentar preguntarme de otra forma?"
    };

    // Función para enviar un mensaje
    function sendMessage() {
        const messageText = messageInput.value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios

        if (messageText === '') {
            alert('Por favor, escribe un mensaje antes de enviarlo.');
            return;
        }

        // Crear mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.classList.add('message');

        const userProfilePic = document.createElement('img');
        userProfilePic.src = "../../imagenes/perfil 1/imagen de perfil.jpg";
        userProfilePic.alt = "Perfil";
        userProfilePic.classList.add('profile-pic');

        const userMessageText = document.createElement('div');
        userMessageText.classList.add('message-text');
        userMessageText.textContent = messageText;

        userMessage.appendChild(userProfilePic);
        userMessage.appendChild(userMessageText);
        chatMessages.appendChild(userMessage);

        // Limpiar el campo de entrada
        messageInput.value = '';

        // Hacer scroll hacia abajo automáticamente
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Generar respuesta del bot
        setTimeout(() => {
            generateBotResponse(messageText);
        }, 1000);
    }

    // Función para generar la respuesta del bot
    function generateBotResponse(userInput) {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message');

        const botProfilePic = document.createElement('img');
        botProfilePic.src = "../../imagenes/perfil 1/imagen de perfil.jpg"; // Cambia la imagen si lo prefieres
        botProfilePic.alt = "Bot";
        botProfilePic.classList.add('profile-pic');

        const botMessageText = document.createElement('div');
        botMessageText.classList.add('message-text');

        // Seleccionar la respuesta del bot basada en el mensaje del usuario
        const response = botResponses[userInput] || botResponses["default"];
        botMessageText.textContent = response;

        botMessage.appendChild(botProfilePic);
        botMessage.appendChild(botMessageText);
        chatMessages.appendChild(botMessage);

        // Hacer scroll hacia abajo
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Evento para el botón "Enviar"
    sendButton.addEventListener('click', sendMessage);

    // Evento para enviar mensajes al presionar "Enter"
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
