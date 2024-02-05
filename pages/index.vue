<template>
  <div>
    <TresCanvas clear-color=”#82DBC5” window-size>
      <TresPerspectiveCamera />
      <TresMesh >
        <TresBoxGeometry :args="[1, 1, 1]" />
        <TresMeshNormalMaterial />
      </TresMesh>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>
