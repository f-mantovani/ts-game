import { Player } from './src/elements.js';
export class Game {
    constructor() {
        this.player = new Player();
        this.obstacles = [];
        this.bullets = [];
    }
    start() { }
    restart() { }
}
const game = new Game();
