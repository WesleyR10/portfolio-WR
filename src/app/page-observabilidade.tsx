'use client'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'

import Cube from '@/components/3D/cube'
import Developer from '@/components/3D/Developer'
import HeroCamera from '@/components/3D/Hero-camera'
import CanvasLoader from '@/components/3D/Loading'
import ReactLogo from '@/components/3D/React-logo'
import Rings from '@/components/3D/Rings'
import Target from '@/components/3D/Target'
import { EducationSection } from '@/components/education'
import { Navbar } from '@/components/menu-navbar'
import { calculateSizes } from '@/constants'

export default function Home() {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)
  console.log('Sizes:', sizes)

  return (
    <div className="flex h-screen bg-slate-600">
      <Canvas className="h-full w-full">
        <Suspense fallback={<CanvasLoader />}>
          {/* To hide controller */}
          <Leva hidden />
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <HeroCamera isMobile={isMobile}>
            <Developer
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
            />
          </HeroCamera>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>

      {/* <EducationSection />*/}
    </div>
  )
}
/* 

export default function Home() {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const { deskScale, deskPosition } = useControls({
    deskScale: { value: sizes.deskScale, min: 0, max: 10 },
    deskPosition: { value: sizes.deskPosition, min: -10, max: 10 },
  });

  return (
    <div className="bg-slate-600 h-screen flex px-8 py-4">
      <div>
        <div className="h-14 pl-2 flex justify-center">
          <TextHoverEffect text="Wesley Ribas" />
        </div>
        <Navbar className="top-4" />
      </div>
      <Leva />
      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
        

          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <HeroCamera isMobile={isMobile}>
            <Developer
              position={deskPosition}
              rotation={[0.1, -Math.PI, 0]}
              scale={[deskScale, deskScale, deskScale]}
            />
          </HeroCamera>

          <group>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <Rings position={sizes.ringPosition} />
            <Cube position={sizes.cubePosition} />
          </group>


          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense >
      </Canvas >

  <EducationSection />
    </div >
  );
}
*/
