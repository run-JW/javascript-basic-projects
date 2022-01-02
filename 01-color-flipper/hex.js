class Hex {
    constructor() {
        this.$main = document.querySelector('main');
        this.$colorName = document.querySelector('.color');
        this.$button = document.querySelector('#btn');

        this.hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        this.curColor = '#F1f5f8';

        this.addEventsListners();
    }

    changeHexColor() {
        this.curColor = this.generateHexColor();
        this.$main.style.backgroundColor = this.curColor;
        this.$colorName.textContent = this.curColor;
    }

    generateHexColor() {
        let string = '#';
        for (let i = 0; i < 6; i++) {
            string += String(this.hex[this.generateRandomNumber()]);
        }
        return string;
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * this.hex.length);
    }

    addEventsListners() {
        this.changeHexColor = this.changeHexColor.bind(this);
        this.$button.addEventListener('click', this.changeHexColor);
    }
}

new Hex();
