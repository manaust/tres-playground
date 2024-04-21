<script lang="ts" setup>
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas window-size clear-color="#000" :dpr="[1, 2]">
    <OrbitControls />
    <TresPerspectiveCamera :position="[4, -2, 7]" />
    <TresAmbientLight :intensity="1.0" />

    <!-- <MyBackground /> -->
    <Suspense>
      <MyTorus />
    </Suspense>
  </TresCanvas>
</template>
