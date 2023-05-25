import { Player } from './src/player.js'
import { Obstacle } from './src/obstacle.js'
import { Bullet } from './src/bullet.js'

type ExtractTypes<T> = {
	[Property in keyof T]: T[Property]
}
type PlayerInfo = ExtractTypes<Player>
type ObstacleInfo = ExtractTypes<Obstacle>
type BulletInfo = ExtractTypes<Bullet>

export class Game {
	player: PlayerInfo
	obstacles: Array<ObstacleInfo>
	bullets: Array<BulletInfo>
	time: number

	constructor() {
		this.player = new Player()
		this.obstacles = []
		this.bullets = []
		this.time = 0
		console.log(this.player)
	}

	start() {
		setInterval(() => {
			this.time += 1
			this.obstacles = this.obstacles.filter(obstacle => obstacle.keepOnScreen === true)
			this.player.movePlayer()
			this.obstacles.forEach(obstacle => {
				obstacle.move('down')
				obstacle.removeObstacle()
			})
			if (this.time % 100 === 0) {
				this.obstacles.push(new Obstacle())
				console.log(this.obstacles)
			}
		}, 10)
	}

	restart() {}
}

const game = new Game()
game.start()
