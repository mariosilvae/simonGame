const blue = document.getElementById('blue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');

class Game {
    constructor() {
        this.start();
        this.generateSequence();
        this.nextLevel();
    }

    start() {
        btnStart.classList.add('hide');
        this.level = 1;
        this.colors = {
            blue: blue,
            violet: violet,
            orange: orange,
            green: green,
        }
    }

    generateSequence() {
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.illuminateSequence();
    }

    transformNumberToColor(number) {
        switch(number){
            case 0:
                return 'blue'
            case 1:
                return 'violet'
            case 2:
                return 'orange'
            case 3:
                return 'green'
        }
    }

    illuminateSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.sequence[i]);
            setTimeout(() => this.illuminateColor(color), 1000 * i);
        }
    }

    illuminateColor(color) {
        this.colors[color].classList.add('light');
        setTimeout(()=> this.turnOffColor(color), 350);
    }

    turnOffColor(color) {
        this.colors[color].classList.remove('light');
    }
}

function startGame() {
    // console.log('Game started')
    let game = new Game();
}