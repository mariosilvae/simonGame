const blue = document.getElementById('blue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');
const FINAL_LEVEL = 10;

class Game {
    constructor() {
        this.start();
        this.generateSequence();
        setTimeout(this.nextLevel, 500);
    }

    start() {
        this.chooseColor = this.chooseColor.bind(this);
        this.nextLevel = this.nextLevel.bind(this);
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
        this.sequence = new Array(FINAL_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.subLevel = 0;
        this.illuminateSequence();
        this.addEventClick();
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

    transformColorToNumber(color) {
        switch(color){
            case 'blue':
                return 0
            case 'violet':
                return 1
            case 'orange':
                return 2
            case 'green':
                return 3
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

    addEventClick() {
        this.colors.blue.addEventListener('click', this.chooseColor)
        this.colors.violet.addEventListener('click', this.chooseColor)
        this.colors.orange.addEventListener('click', this.chooseColor)
        this.colors.green.addEventListener('click', this.chooseColor)
    }

    eliminateEventClick() {
        this.colors.blue.removeEventListener('click', this.chooseColor)
        this.colors.violet.removeEventListener('click', this.chooseColor)
        this.colors.orange.removeEventListener('click', this.chooseColor)
        this.colors.green.removeEventListener('click', this.chooseColor)
    }

    chooseColor(ev) {
        const nameColor = ev.target.dataset.color;
        const numberColor = this.transformColorToNumber(nameColor);
        this.illuminateColor(nameColor)
        if(numberColor === this.sequence[this.subLevel]) {
            this.subLevel++
            if(this.subLevel === this.level) {
                this.level++
                this.eliminateEventClick()
                if(this.level === (FINAL_LEVEL + 1)) {
                    //Win
                } else {
                    setTimeout(this.nextLevel, 1500);
                }
            }
        }else {
            //You Lost
        }
    }
}

function startGame() {
    // console.log('Game started')
    let game = new Game();
}