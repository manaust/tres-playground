import { TextureLoader, Vector2 } from 'three'

import fragmentShader from './refraction.frag?raw'
import vertexShader from './refraction.vert?raw'

const texture = new TextureLoader().load('/textures/miami.jpeg')

const uniforms = {
  uTexture: {
    value: texture,
  },
  uIorR: {
    value: 1.15,
  },
  uIorG: {
    value: 1.18,
  },
  uIorB: {
    value: 1.22,
  },
  uRefractPower: {
    value: 0.4,
  },
  uChromaticAberration: {
    value: 0.5,
  },
  uSaturation: { value: 1.06 },
  winResolution: {
    value: new Vector2(
      window.innerWidth,
      window.innerHeight,
    ).multiplyScalar(Math.min(window.devicePixelRatio, 2)),
  },
}

export {
  uniforms,
  fragmentShader,
  vertexShader,
}
