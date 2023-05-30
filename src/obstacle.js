import { Base } from './base.js';
export class Obstacle extends Base {
    constructor() {
        let width = 5;
        let x = Math.round(Math.random() * (100 - width) + 1);
        super({ x: x, y: 95, width, height: 5, type: 'obstacle', speed: 1 });
    }
}
