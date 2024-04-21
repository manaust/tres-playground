<script setup lang="ts">
import { ShaderMaterial } from 'three'
import { fragmentShader, uniforms, vertexShader } from '@/shaders'

const { nodes } = await useGLTF('/models/david.gltf', { draco: true })

const david = computed(() => {
  const res = nodes.david

  if (res) {
    res.material = new ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    })
  }

  return res
})
</script>

<template>
  <TresMesh>
    <primitive :object="david" />
  </TresMesh>
</template>
