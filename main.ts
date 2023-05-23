import { Obstacle, Bullet } from './src/elements.js'
import { Player } from './src/player.js'

type PlayerInfo = {
	movePlayer: () => void
	x: number
	y: number
	width: number
	height: number
	type: string
}

export class Game {
	player: PlayerInfo
	obstacles: Array<{}>
	bullets: Array<{}>

	constructor() {
		this.player = new Player()
    this.obstacles = []
    this.bullets = []
		console.log(this.player)
	}

	start() {
		setInterval(() => {
			this.player.movePlayer()
		}, 60)
	}

	restart() {}
}


const game = new Game ()
game.start()