import { Player } from './src/player.js'
import { Obstacle } from './src/obstacle.js'
import { Bullet } from './src/bullet.js'
import { Base } from './src/base.js'

type ExtractTypes<T> = {
	[Property in keyof T]: T[Property]
}
type PlayerInfo = ExtractTypes<Player>
type ObstacleInfo = ExtractTypes<Obstacle>
type BulletInfo = ExtractTypes<Bullet>
type BaseInfo = ExtractTypes<Base>

export class Game {
	player: PlayerInfo
	obstacles: ObstacleInfo[]
	bullets: BulletInfo[]
	time: number
	score: number
	intervalId: ReturnType<typeof setInterval> | null

	constructor() {
		this.player = new Player()
		this.obstacles = []
		this.bullets = []
		this.time = 0
		this.score = 0
		this.intervalId = null
	}

	start() {
		this.player.domElement.getBoundingClientRect()
		this.intervalId = setInterval(() => {
			this.time += 1
			this.player.movePlayer()
			this.obstacleController()
		}, 20)
	}

	collisionDetection(firstInstance: BaseInfo, secondInstance: BaseInfo) {
		const firstObject = firstInstance.domElement.getBoundingClientRect()
		const secondObject = secondInstance.domElement.getBoundingClientRect()
		if (
			firstObject.x < secondObject.x + secondObject.width &&
			firstObject.x + firstObject.width > secondObject.x &&
			firstObject.y < secondObject.y + secondObject.height &&
			firstObject.height + firstObject.y > secondObject.y
		) {
			return true
		} else {
			return false
		}
	}

	obstacleController() {
		if (this.time % 100 === 0) {
			this.obstacles.push(new Obstacle())
		}
		this.obstacles = this.obstacles.filter(obstacle => obstacle.keepOnScreen === true)
		this.obstacles.forEach((obstacle: ObstacleInfo) => {
			obstacle.move('down')
			const isOutside = Boolean(obstacle.y < 0 - obstacle.height)
			if (isOutside) {
				obstacle.remove()
			}
			const hasColided = this.collisionDetection(obstacle, this.player)
			if (hasColided) {
				obstacle.remove()
			}
		})
	}

	restart() {}
}

const game = new Game()
game.start()
