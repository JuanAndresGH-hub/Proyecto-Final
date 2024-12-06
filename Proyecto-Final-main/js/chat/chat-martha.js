document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const sendButton = document.getElementById('sendButton');

    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText === '') {
            alert('Por favor, escribe un mensaje antes de enviarlo.');
            return;
        }

        const userMessage = document.createElement('div');
        userMessage.classList.add('message');

        const userProfilePic = document.createElement('img');
        userProfilePic.src = "../../imagenes/pfp/pfp.jpg";
        userProfilePic.alt = "Perfil";
        userProfilePic.classList.add('profile-pic');

        const userMessageText = document.createElement('div');
        userMessageText.classList.add('message-text');
        userMessageText.textContent = messageText;

        userMessage.appendChild(userProfilePic);
        userMessage.appendChild(userMessageText);
        chatMessages.appendChild(userMessage);

        messageInput.value = '';

        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            generateBotResponse(messageText);
        }, 1000);
    }

    function generateBotResponse(userInput) {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message');

        const botProfilePic = document.createElement('img');
        botProfilePic.src = "../../imagenes/perfil 6/pfp6.jpg";
        botProfilePic.classList.add('profile-pic');

        const botMessageText = document.createElement('div');
        botMessageText.classList.add('message-text');

        const responses = generateResponse(userInput);

        botMessageText.textContent = responses;

        botMessage.appendChild(botProfilePic);
        botMessage.appendChild(botMessageText);
        chatMessages.appendChild(botMessage);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateResponse(userInput) {
        const input = userInput.toLowerCase();

        if (input.includes('hola') || input.includes('buenas')) {
            return "¡Hola! ¿Cómo estás?";
        } else if (input.includes('estoy bien, y tu?') || input.includes('estoy bien')) {
            return "Estoy bien, gracias por preguntar.";
        } else if (input.includes('tu nombre') || input.includes('llamas')) {
            return "Soy Martha, y tu como te llamas?";
        } else if (input.includes('me llamo') || input.includes('soy')) {
            return "Un gusto conocerte, ¿en qué puedo ayudarte hoy?";
        } else if (input.includes('adios') || input.includes('chau')) {
            return "¡Hasta luego! Fue un gusto hablar contigo.";
        } else if (input.includes('intercambiar') || input.includes('intercambio')) {
            return "Puedo intercambiar mi teclado por una similar en caracteristicas o valor, tu que ofreces?";
        } else if (input.includes('teclado')) {
            return "Cual teclado es?";
        } else if (input.includes('redragon') || input.includes('logitech')) {
            return "Lo siento, pero no puedo intercambiar mi teclado por eso.";
        } else {
            return "Lo siento, no entiendo completamente eso. ¿Puedes ser más específico?";
        }
    }

    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
