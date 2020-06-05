const btnStart = document.getElementById('btnStart');

class Game {
    constructor() {
        this.start();
    }

    start() {
        btnStart.classList.add('hide');
    }
}

function startGame() {
    // console.log('Game started')
    let game = new Game();
}