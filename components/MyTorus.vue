<script setup lang="ts">
import { fragmentShader, uniforms, vertexShader } from '@/shaders'
</script>

<template>
  <TresMesh>
    <GLTFModel path="/models/david.gltf" draco />
    <TresIcosahedronGeometry :args="[2.84, 20]" />
    <TresShaderMaterial
      :vertex-shader="vertexShader"
      :fragment-shader="fragmentShader"
      :uniforms="uniforms"
    />
  </TresMesh>
</template>
