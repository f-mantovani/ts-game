export class Base {
    constructor({ x, y, width, height, type }) {
        this.width = width;
        this.height = height;
        this.x = x - this.width / 2;
        this.y = y;
        this.type = type;
        this.domElement = this.createDomElement();
    }
    createDomElement() {
        const domElement = document.createElement('div');
        domElement.classList.add(this.type);
        domElement.style.bottom = this.y + 'vh';
        domElement.style.left = this.x + 'vw';
        domElement.style.height = this.height + 'vh';
        domElement.style.width = this.width + 'vw';
        const parentElement = document.getElementById('board');
        parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild(domElement);
        return domElement;
    }
    move(direction) {
        switch (direction) {
            case 'up':
                this.y += 1;
                this.domElement.style.bottom = this.y + 'vh';
                break;
            case 'down':
                this.y -= 1;
                this.domElement.style.bottom = this.y + 'vh';
                break;
            case 'left':
                this.x -= 1;
                this.domElement.style.left = this.x + 'vw';
                break;
            case 'right':
                this.x += 1;
                this.domElement.style.left = this.x + 'vw';
                break;
        }
    }
}
export class Obstacle {
    constructor() {
        console.log('Obstacle');
    }
}
export class Bullet {
    constructor() {
        console.log('Particle');
    }
}
