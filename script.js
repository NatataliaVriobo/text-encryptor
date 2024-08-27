// Función para encriptar el texto
function encryptText(inputText, key) {
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        let newCharCode = charCode + key;

        // Verificar si es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
            newCharCode = ((charCode - 65 + key) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) { 
            // Verificar si es una letra minúscula
            newCharCode = ((charCode - 97 + key) % 26) + 97;
        }

        encryptedText += String.fromCharCode(newCharCode);
    }

    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(inputText, key) {
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        let newCharCode = charCode - key;

        // Verificar si es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
            newCharCode = ((charCode - 65 - key + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) { 
            // Verificar si es una letra minúscula
            newCharCode = ((charCode - 97 - key + 26) % 26) + 97;
        }

        decryptedText += String.fromCharCode(newCharCode);
    }

    return decryptedText;
}

// Event Listener para el botón de encriptar
document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    if (inputText.trim() === '') {
        alert('Por favor ingresa un texto para encriptar.');
        return;
    }

    const key = 3; // Clave de encriptación
    const encryptedText = encryptText(inputText, key);

    document.getElementById('outputText').value = encryptedText;
});

// Event Listener para el botón de desencriptar
document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    if (inputText.trim() === '') {
        alert('Por favor ingresa un texto para desencriptar.');
        return;
    }

    const key = 3; // La misma clave de encriptación
    const decryptedText = decryptText(inputText, key);

    document.getElementById('outputText').value = decryptedText;
});

// Event Listener para el botón de reiniciar
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});

// Event Listener para el botón de inicio
document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('encryptorScreen').classList.add('show');
    }, 500); // Espera a que la animación termine
});

// Event Listener para el botón de modo oscuro
document.getElementById('darkModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('theme-dark');
});
