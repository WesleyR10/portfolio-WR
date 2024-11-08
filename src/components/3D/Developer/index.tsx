'use client'

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft001: THREE.SkinnedMesh
    EyeRight001: THREE.SkinnedMesh
    Wolf3D_Body001: THREE.SkinnedMesh
    Wolf3D_Glasses001: THREE.SkinnedMesh
    Wolf3D_Hair001: THREE.SkinnedMesh
    Wolf3D_Head001: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom001: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear001: THREE.SkinnedMesh
    Wolf3D_Outfit_Top001: THREE.SkinnedMesh
    Wolf3D_Teeth001: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    Wolf3D_Teeth: THREE.Material | THREE.Material[] | undefined
    Wolf3D_Outfit_Top: THREE.Material | THREE.Material[] | undefined
    Wolf3D_Outfit_Footwear: THREE.Material | THREE.Material[] | undefined
    Wolf3D_Outfit_Bottom: THREE.Material | THREE.Material[] | undefined
    Wolf3D_Skin: THREE.Material | THREE.Material[] | undefined
    Wolf3D_Eye: THREE.MeshStandardMaterial
    Wolf3D_Body: THREE.MeshStandardMaterial
    Wolf3D_Glasses: THREE.MeshStandardMaterial
    Wolf3D_Hair: THREE.MeshStandardMaterial
  }
}

const Developer = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null)

  const continencia = useGLTF(
    'models/animation-social-continencia-1.0.glb'
  ) as GLTFResult
  const killer = useGLTF('models/Animation-social-killer-1.0.glb') as GLTFResult
  const sitting = useGLTF('models/animation-sitting.glb') as GLTFResult

  const { actions: continenciaActions } = useAnimations(
    continencia.animations,
    group
  )
  const { actions: killerActions } = useAnimations(killer.animations, group)
  const { actions: sittingActions } = useAnimations(sitting.animations, group)

  useEffect(() => {
    console.log('Continencia Animations:', continencia.animations)
    console.log('Killer Animations:', killer.animations)
    console.log('Sitting Animations:', sitting.animations)
    console.log('Continencia Actions:', continenciaActions)
    console.log('Killer Actions:', killerActions)
    console.log('Sitting Actions:', sittingActions)

    // Iniciar a animação de sentar automaticamente
    if (sittingActions['Armature|mixamo.com|Layer0']) {
      sittingActions['Armature|mixamo.com|Layer0'].reset().fadeIn(0.5).play()
    } else {
      console.error('Animation "Armature|mixamo.com|Layer0" not found')
    }
  }, [
    continencia.animations,
    killer.animations,
    sitting.animations,
    continenciaActions,
    killerActions,
    sittingActions,
  ])

  const stopAllActions = () => {
    Object.values(continenciaActions).forEach((action) => action?.stop())
    Object.values(killerActions).forEach((action) => action?.stop())
    Object.values(sittingActions).forEach((action) => action?.stop())
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log('Key pressed:', event.key)
    stopAllActions()
    switch (event.key) {
      case '1':
        if (continenciaActions['Armature.001|mixamo.com|Layer0']) {
          continenciaActions['Armature.001|mixamo.com|Layer0']
            .reset()
            .fadeIn(0.5)
            .play()
        } else {
          console.error('Animation "Armature.001|mixamo.com|Layer0" not found')
        }
        break
      case '3':
        if (killerActions['Armature|mixamo.com|Layer0.001']) {
          killerActions['Armature|mixamo.com|Layer0.001']
            .reset()
            .fadeIn(0.5)
            .play()
        } else {
          console.error('Animation "Armature|mixamo.com|Layer0.001" not found')
        }
        break
      default:
        // Reiniciar a animação de sentar se nenhuma tecla relevante for pressionada
        if (sittingActions['Armature|mixamo.com|Layer0']) {
          sittingActions['Armature|mixamo.com|Layer0']
            .reset()
            .fadeIn(0.5)
            .play()
        } else {
          console.error('Animation "Armature|mixamo.com|Layer0" not found')
        }
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [continenciaActions, killerActions, sittingActions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature001"
          rotation={[Math.PI / 2, 0, 179]}
          scale={0.7}
          userData={{ name: 'Armature.001' }}
        >
          <skinnedMesh
            name="EyeLeft001"
            geometry={continencia.nodes.EyeLeft001.geometry}
            material={continencia.materials.Wolf3D_Eye}
            skeleton={continencia.nodes.EyeLeft001.skeleton}
            morphTargetDictionary={
              continencia.nodes.EyeLeft001.morphTargetDictionary
            }
            morphTargetInfluences={
              continencia.nodes.EyeLeft001.morphTargetInfluences
            }
            userData={{
              targetNames: ['mouthOpen', 'mouthSmile'],
              name: 'EyeLeft.001',
            }}
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={continencia.nodes.EyeRight001.geometry}
            material={continencia.materials.Wolf3D_Eye}
            skeleton={continencia.nodes.EyeRight001.skeleton}
            morphTargetDictionary={
              continencia.nodes.EyeRight001.morphTargetDictionary
            }
            morphTargetInfluences={
              continencia.nodes.EyeRight001.morphTargetInfluences
            }
            userData={{
              targetNames: ['mouthOpen', 'mouthSmile'],
              name: 'EyeRight.001',
            }}
          />
          <skinnedMesh
            name="Wolf3D_Body001"
            geometry={continencia.nodes.Wolf3D_Body001.geometry}
            material={continencia.materials.Wolf3D_Body}
            skeleton={continencia.nodes.Wolf3D_Body001.skeleton}
            userData={{ name: 'Wolf3D_Body.001' }}
          />
          <skinnedMesh
            name="Wolf3D_Glasses001"
            geometry={continencia.nodes.Wolf3D_Glasses001.geometry}
            material={continencia.materials.Wolf3D_Glasses}
            skeleton={continencia.nodes.Wolf3D_Glasses001.skeleton}
            userData={{ name: 'Wolf3D_Glasses.001' }}
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            geometry={continencia.nodes.Wolf3D_Hair001.geometry}
            material={continencia.materials.Wolf3D_Hair}
            skeleton={continencia.nodes.Wolf3D_Hair001.skeleton}
            userData={{ name: 'Wolf3D_Hair.001' }}
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={continencia.nodes.Wolf3D_Head001.geometry}
            material={continencia.materials.Wolf3D_Skin}
            skeleton={continencia.nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={
              continencia.nodes.Wolf3D_Head001.morphTargetDictionary
            }
            morphTargetInfluences={
              continencia.nodes.Wolf3D_Head001.morphTargetInfluences
            }
            userData={{
              targetNames: ['mouthOpen', 'mouthSmile'],
              name: 'Wolf3D_Head.001',
            }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={continencia.nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={continencia.materials.Wolf3D_Outfit_Bottom}
            skeleton={continencia.nodes.Wolf3D_Outfit_Bottom001.skeleton}
            userData={{ name: 'Wolf3D_Outfit_Bottom.001' }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={continencia.nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={continencia.materials.Wolf3D_Outfit_Footwear}
            skeleton={continencia.nodes.Wolf3D_Outfit_Footwear001.skeleton}
            userData={{ name: 'Wolf3D_Outfit_Footwear.001' }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={continencia.nodes.Wolf3D_Outfit_Top001.geometry}
            material={continencia.materials.Wolf3D_Outfit_Top}
            skeleton={continencia.nodes.Wolf3D_Outfit_Top001.skeleton}
            userData={{ name: 'Wolf3D_Outfit_Top.001' }}
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={continencia.nodes.Wolf3D_Teeth001.geometry}
            material={continencia.materials.Wolf3D_Teeth}
            skeleton={continencia.nodes.Wolf3D_Teeth001.skeleton}
            morphTargetDictionary={
              continencia.nodes.Wolf3D_Teeth001.morphTargetDictionary
            }
            morphTargetInfluences={
              continencia.nodes.Wolf3D_Teeth001.morphTargetInfluences
            }
            userData={{
              targetNames: ['mouthOpen', 'mouthSmile'],
              name: 'Wolf3D_Teeth.001',
            }}
          />
          <primitive object={continencia.nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

export const DeveloperInstructions = () => {
  const instructions = [
    { key: '1', action: 'Continência' },
    { key: '3', action: 'Killer' },
    { key: 'Outra tecla', action: 'Voltar a sentar' },
  ]

  return (
    <div className="absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded p-2 text-white lg:left-2 lg:translate-x-0">
      <h2 className="text-sm font-bold">Instruções:</h2>
      <ul className="text-xs">
        {instructions.map((instruction, index) => (
          <li key={index}>
            {instruction.key}: {instruction.action}
          </li>
        ))}
      </ul>
    </div>
  )
}

useGLTF.preload('models/animation-social-continencia-1.0.glb')
useGLTF.preload('models/Animation-social-killer-1.0.glb')
useGLTF.preload('models/animation-sitting.glb')

export default Developer
