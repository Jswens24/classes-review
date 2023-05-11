"use strict";

class Player {
    #score = 0;
    #numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`
    }
    set fullName(newName) {
        const [first, last] = newName.split(' ')
        this.first = first;
        this.last = last;
    }
    get score() {
        return this.#score
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive!")
        }
        this.#score = newScore
    }
    updateScore(newScore) {
        this.#score = newScore
    }
    taunt() {
        console.log('Booyah!');
    }
    loseLife() {
        this.#numLives -= 1
    }

}

const player1 = new Player('Betty', 'Swenson')
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.score);
// player1.score = 24
// console.log(player1.score);

// player1.taunt()
// console.log(player1.first);
// console.log(player1.last);

// const player2 = new Player('Charlie', "Brown")
// player2.taunt()

console.log(player1);
console.log(player1.fullName);
player1.fullName = 'Kobuk Swenson'
console.log(player1.fullName);
console.log(player1);
