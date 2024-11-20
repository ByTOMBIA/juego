class Auth {
    constructor() {
        this.users = [];
        this.init();
    }

    init() {
        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault();
            this.login();
        });

        document.getElementById('registerForm').addEventListener('submit', (event) => {
            event.preventDefault();
            this.register();
        });
    }

    register() {
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if (this.users.find(user => user.username === username)) {
            alert('El usuario ya existe');
        } else {
            this.users.push({ username, password });
            alert('Registro exitoso');
        }
    }

    login() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const user = this.users.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Inicio de sesion exitoso');
            document.getElementById('auth').style.display = 'none';
            document.querySelectorAll('.game-section').forEach(section => section.style.display = 'block');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    }
}

class Game {
    constructor() {
        this.choices = ['rock', 'paper', 'scissors'];
    }

    playGame(playerChoice) {
        const computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
        let result = '';

        if (playerChoice === computerChoice) {
            result = 'Empate';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'Ganaste';
        } else {
            result = 'Perdiste';
        }

        document.getElementById('result').innerText = `Elegiste ${playerChoice}, la computadora eligio ${computerChoice}. ${result}`;
    }
}

class Game2 {
    constructor() {
        this.choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }

    playGame(playerChoice) {
        const computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
        let result = '';

        if (playerChoice === computerChoice) {
            result = 'Empate';
        } else if (
            (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
            (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
            (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
            (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
            (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
        ) {
            result = 'Ganaste';
        } else {
            result = 'Perdiste';
        }

        document.getElementById('result2').innerText = `Elegiste ${playerChoice}, la computadora eligio ${computerChoice}. ${result}`;
    }
}

const auth = new Auth();
const game = new Game();
const game2 = new Game2();

function playGame(choice) {
    game.playGame(choice);
}

function playGame2(choice) {
    game2.playGame(choice);
}
