import { Player } from './src/player.js';
import { Obstacle } from './src/obstacle.js';
export class Game {
    constructor() {
        this.player = new Player();
        this.obstacles = [];
        this.bullets = [];
        this.time = 0;
        this.score = 0;
        this.intervalId = null;
    }
    start() {
        this.player.domElement.getBoundingClientRect();
        this.intervalId = setInterval(() => {
            this.time += 1;
            this.player.movePlayer();
            this.obstacleController();
        }, 20);
    }
    collisionDetection(firstInstance, secondInstance) {
        if (firstInstance.x < secondInstance.x + secondInstance.width &&
            firstInstance.x + firstInstance.width > secondInstance.x &&
            firstInstance.y < secondInstance.y + secondInstance.height &&
            firstInstance.height + firstInstance.y > secondInstance.y) {
            return true;
        }
        else {
            return false;
        }
    }
    obstacleController() {
        if (this.time % 100 === 0) {
            this.obstacles.push(new Obstacle());
        }
        this.obstacles = this.obstacles.filter(obstacle => obstacle.keepOnScreen === true);
        this.obstacles.forEach((obstacle) => {
            obstacle.move('down');
            const isOutside = Boolean(obstacle.y < 0 - obstacle.height);
            if (isOutside) {
                obstacle.removeObstacle();
            }
            const hasColided = this.collisionDetection(obstacle, this.player);
            if (hasColided) {
                obstacle.removeObstacle();
            }
        });
    }
    restart() { }
}
const game = new Game();
game.start();
