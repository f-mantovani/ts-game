import { Base } from './base.js'
import { ExtractTypes } from './types/types.js'

export type BulletInfo = ExtractTypes<Bullet>

export class Bullet {
  constructor () {
    console.log('Particle')
  }
}
