document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (event) {
        event.preventDefault();
        let maxNumber = document.getElementById('maxNumber').value;
        maxNumber= parseInt(maxNumber);

        let randomNumber = Math.random()* maxNumber;
        randomNumber = Math.floor(randomNumber+1);

        document.getElementById('resultValue').innerText = randomNumber;
        document.querySelector('.result').style.display = 'block';
    })
})