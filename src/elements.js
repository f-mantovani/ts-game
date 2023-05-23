class Base {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.domElement = this.createDomElement();
    }
    createDomElement() {
        const domElement = document.createElement('div');
        const parentElement = document.getElementById('board');
        parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild(domElement);
        return domElement;
    }
}
export class Player extends Base {
    constructor() {
        super();
        console.log('changes agai');
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
