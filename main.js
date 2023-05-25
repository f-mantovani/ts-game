import { Player } from './src/player.js';
import { Obstacle } from './src/obstacle.js';
export class Game {
    constructor() {
        this.player = new Player();
        this.obstacles = [];
        this.bullets = [];
        this.time = 0;
        console.log(this.player);
    }
    start() {
        setInterval(() => {
            this.time += 1;
            this.obstacles = this.obstacles.filter(obstacle => obstacle.keepOnScreen === true);
            this.player.movePlayer();
            this.obstacles.forEach(obstacle => {
                obstacle.move('down');
                obstacle.removeObstacle();
            });
            if (this.time % 100 === 0) {
                this.obstacles.push(new Obstacle());
                console.log(this.obstacles);
            }
        }, 10);
    }
    restart() { }
}
const game = new Game();
game.start();
