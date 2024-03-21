document.getElementById('form-num').addEventListener('submit', function (event) {
    event.preventDefault();

    var valorA = parseInt(document.getElementById('campo-A').value);
    var valorB = parseInt(document.getElementById('campo-B').value);
    var messageElement = document.getElementById('message');

    if (valorB > valorA) {
        messageElement.textContent = ('Formuláro válido e sendo enviado');
        messageElement.style.color = 'blue';
    } else {
        messageElement.textContent = ('O numéro B precisa ser mairo que o número A.');
        messageElement.style.color = 'red';
    }
});





