import { Player } from './src/player.js';
export class Game {
    constructor() {
        this.player = new Player();
        this.obstacles = [];
        this.bullets = [];
        console.log(this.player);
    }
    start() {
        setInterval(() => {
            this.player.movePlayer();
        }, 60);
    }
    restart() { }
}
const game = new Game();
game.start();
