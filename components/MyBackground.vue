<script setup lang="ts">
const columns = range(-7.5, 7.5, 2.5)
const rows = columns
</script>

<template>
  <TresGroup>
    <template v-for="i in columns" :key="i">
      <TresMesh
        v-for="j in rows"
        :key="j"
        :position="[i, j, -4]"
      >
        <TresIcosahedronGeometry :args="[0.25, 8]" />
        <TresMeshBasicMaterial color="white" />
      </TresMesh>
    </template>
  </TresGroup>
</template>
