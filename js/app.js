// URL del Web App de Google Apps Script
const googleScriptURL = "https://script.google.com/macros/s/AKfycbxGuecurttaF4myY7OtBjE5ZTgTz4tuoxOACavQy8a07Y3HLdUsgwPHezLOFQ3mCD2q/exec"; // Tu URL real

let noClickCount = 0;

// Función para guardar respuestas
async function saveAnswer(question, answer) {
    const response = await fetch(googleScriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question, answer })
    });

    const result = await response.text();
    console.log(result);
    alert(result); // Mostrar mensaje al usuario
}

// Lógica para el botón "No"
document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    if (noClickCount < 10) {
        const randomX = Math.random() * window.innerWidth * 0.8;
        const randomY = Math.random() * window.innerHeight * 0.8;
        this.style.position = 'absolute';
        this.style.left = `${randomX}px`;
        this.style.top = `${randomY}px`;
    } else {
        alert("¡Ya para, por favor!");
    }
});
