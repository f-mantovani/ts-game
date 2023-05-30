import { Base } from './base.js'
import { ExtractTypes } from './types/types.js'

export type ObstacleInfo = ExtractTypes<Obstacle>
export class Obstacle extends Base {
	
	constructor() {
		let width = 5
		let x: number = Math.round(Math.random() * (100 - width) + 1)
		super({ x: x, y: 95, width, height: 5, type: 'obstacle', speed: 1.5 })
		
	}

}
