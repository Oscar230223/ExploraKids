document.addEventListener("DOMContentLoaded", function() {
    // Generar un mensaje simulado
    function getRandomMessage() {
        const messages = [
            "¿Sabías que? El halcón peregrino es el animal más rápido del mundo.🏆",
            "🐒Espera la nueva actualización con nuevos animales.🦋",
            "🐳¡La ballena azul es animal más grande del MUNDO!🐳",
            "¿sabías que? Las hormigas son seres incapaces de dormir ni un solo segundo.😧"
        ];
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    // Agregar un mensaje a la lista
    function addMessage(message) {
        const messageList = document.getElementById('messageList');
        const messageElement = document.createElement('li');
        messageElement.className = 'message';
        messageElement.textContent = message;
        messageList.appendChild(messageElement);
    }

    // Simular llegada de notis cada 5 segundos
    setInterval(function() {
        const newMessage = getRandomMessage();
        addMessage(newMessage);
    }, 5000);
});
