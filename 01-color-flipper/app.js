class App {
    constructor() {
        this.$main = document.querySelector('main');
        this.$colorName = document.querySelector('.color');
        this.$button = document.querySelector('#btn');

        this.colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
        this.curColor = '#F1f5f8';

        this.addEventsListners();
    }

    changeColor() {
        this.curColor = this.colors[this.generateRandomNumber()];
        this.$main.style.backgroundColor = this.curColor;
        this.$colorName.textContent = this.curColor;
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * this.colors.length);
    }

    addEventsListners() {
        this.changeColor = this.changeColor.bind(this);
        this.$button.addEventListener('click', this.changeColor);
    }
}

new App();
