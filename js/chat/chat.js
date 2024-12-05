document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const sendButton = document.getElementById('sendButton');

    // Función para enviar un mensaje
    function sendMessage() {
        const messageText = messageInput.value.trim(); // Obtener el texto del mensaje y eliminar espacios

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

        // Generar respuesta del bot después de 1 segundo
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

        // Respuestas basadas en coincidencias más inteligentes
        const responses = generateResponse(userInput);

        botMessageText.textContent = responses;

        botMessage.appendChild(botProfilePic);
        botMessage.appendChild(botMessageText);
        chatMessages.appendChild(botMessage);

        // Hacer scroll hacia abajo automáticamente
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Función para generar respuestas coherentes
    function generateResponse(userInput) {
        const input = userInput.toLowerCase();

        // Detectar saludos y respuestas comunes
        if (input.includes('hola') || input.includes('buenas')) {
            return "¡Hola! ¿Cómo estás?";
        } else if (input.includes('cómo estás') || input.includes('como estas')) {
            return "Estoy bien, gracias por preguntar. ¿Y tú?";
        } else if (input.includes('tu nombre')) {
            return "Soy un bot sin nombre, pero me puedes llamar Bot si lo deseas.";
        } else if (input.includes('adiós') || input.includes('chau')) {
            return "¡Hasta luego! Fue un gusto hablar contigo.";
        } else if (input.includes('qué haces')) {
            return "Estoy aquí para ayudarte con cualquier cosa que necesites.";
        } else if (input.includes('cuántos años tienes')) {
            return "Soy un bot, no tengo edad, pero me encanta aprender constantemente.";
        } else if (input.includes('cómo funciona este chat')) {
            return "Este chat funciona respondiendo a tus preguntas. Solo escríbeme algo y yo trataré de responderte.";
        } else {
            return "Lo siento, no entiendo completamente eso. ¿Puedes ser más específico?";
        }
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
