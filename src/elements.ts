type BaseTyping = {
	x: number
	y: number
	width: number
	height: number
	type: string
}
export class Base {
	x: number
	y: number
	width: number
	height: number
	domElement: HTMLDivElement
	type: string

	constructor({ x, y, width, height, type }: BaseTyping) {
		this.width = width
		this.height = height
		this.x = x - this.width / 2
		this.y = y
		this.type = type

		this.domElement = this.createDomElement()
	}

	createDomElement(): HTMLDivElement {
		const domElement = document.createElement('div')
		domElement.classList.add(this.type)

		domElement.style.bottom = this.y + 'vh'
		domElement.style.left = this.x + 'vw'
		domElement.style.height = this.height + 'vh'
		domElement.style.width = this.width + 'vw'

		const parentElement = document.getElementById('board')
		parentElement?.appendChild(domElement)
		return domElement
	}

	move(direction: string) {
		switch (direction) {
			case 'up':
				this.y += 1
				this.domElement.style.bottom = this.y + 'vh'
				break
			case 'down':
				this.y -= 1
				this.domElement.style.bottom = this.y + 'vh'
				break
			case 'left':
				this.x -= 1
				this.domElement.style.left = this.x + 'vw'
				break
			case 'right':
				this.x += 1
				this.domElement.style.left = this.x + 'vw'
				break
		}
	}
}



export class Obstacle {
	constructor() {
		console.log('Obstacle')
	}
}

export class Bullet {
	constructor() {
		console.log('Particle')
	}
}
