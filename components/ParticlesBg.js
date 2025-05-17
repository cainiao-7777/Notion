import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#000000' },
        particles: {
          number: { value: 60 },
          shape: {
            type: 'image',
            image: {
              src: '/heart.png',
              width: 100,
              height: 100
            }
          },
          size: { value: 16 },
          opacity: { value: 0.6 },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'top',
            outModes: 'out'
          }
        }
      }}
    />
  )
}
