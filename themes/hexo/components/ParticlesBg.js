import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import { useGlobal } from '@/lib/global'

const ParticlesBg = () => {
  const { isDarkMode } = useGlobal()
  if (isDarkMode) return null // 仅在浅色模式下显示

  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#ffffff' },
        particles: {
          number: { value: 50 },
          color: { value: ['#ff69b4', '#d946ef', '#6366f1'] }, // 粉紫蓝
          shape: {
            type: 'char',
            character: {
              value: '❤',
              font: 'Verdana',
              style: '',
              weight: '400',
              fill: true
            }
          },
          opacity: { value: 0.6 },
          size: { value: 12 },
          move: { enable: true, speed: 1.2 }
        },
        detectRetina: true
      }}
    />
  )
}

export default ParticlesBg
