import { Base } from './base.js'

export class Player extends Base {
	keysPressed: { [key: string]: boolean }
	
	constructor() {
		super({ x: 50, y: 0, width: 10, height: 5, type: 'player' })
		this.keysPressed = { up: false, down: false, left: false, right: false }

		this.attachEventListener()
	}

	attachEventListener() {
		const keydownListener = (event: KeyboardEvent) => {
			switch (event.code) {
				case 'ArrowUp':
					this.keysPressed.up = true
					break
				case 'ArrowDown':
					this.keysPressed.down = true
					break
				case 'ArrowRight':
					this.keysPressed.right = true
					break
				case 'ArrowLeft':
					this.keysPressed.left = true
					break
				case 'Space':
					console.log('space')
					break
			}
		}

		const keyupListener = (event: KeyboardEvent) => {
			switch (event.code) {
				case 'ArrowUp':
					this.keysPressed.up = false
					break
				case 'ArrowDown':
					this.keysPressed.down = false
					break
				case 'ArrowRight':
					this.keysPressed.right = false
					break
				case 'ArrowLeft':
					this.keysPressed.left = false
					break
			}
		}

		document.addEventListener('keydown', keydownListener)
		document.addEventListener('keyup', keyupListener)
	}

	movePlayer() {
		if (this.keysPressed.up && this.y + this.height < 100) this.move('up')
		if (this.keysPressed.down && this.y > 0) this.move('down')
		if (this.keysPressed.right && this.x + this.width < 100) this.move('right')
		if (this.keysPressed.left && this.x > 0) this.move('left')
	}
}
