import { Base } from './base.js'

export class Obstacle extends Base {
	keepOnScreen: boolean
	constructor() {
		let width = 5
		let x: number = Math.round(Math.random() * (100 - width) + 1)
		super({ x: x, y: 95, width, height: 5, type: 'obstacle' })
		this.keepOnScreen = true
	}

	removeObstacle() {
		this.keepOnScreen = false
		this.domElement.remove()
	}

	// constructor({ x, y, width, height, type }: BaseTyping) {
}
