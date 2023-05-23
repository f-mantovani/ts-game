import { Player, Obstacle, Bullet } from './src/elements'

export class Game {
	player: {}
	obstacles: Array<{}>
	bullets: Array<{}>

	constructor() {
		this.player = new Player()
    this.obstacles = []
    this.bullets = []
	}

	start() {}

	restart() {}
}


const game = new Game ()