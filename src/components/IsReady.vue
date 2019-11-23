<template>
  <strong v-if="isReady" class="ready">Est prêt à l'aventure!</strong>
  <strong v-else class="disconnected">Est déjà perdu!</strong>
</template>

<script>
export default {
  name: 'IsReady',
  props: {
    isReady: Boolean
  }
};
</script>

<style>
.ready {
  color: #0a0;
}
.disconnected {
  color: #f00;
}
</style>