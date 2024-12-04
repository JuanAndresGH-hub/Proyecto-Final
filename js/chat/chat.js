function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (messageInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = messageInput.value;
        chatMessages.appendChild(message);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
