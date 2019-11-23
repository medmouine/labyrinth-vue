<template>
  <p>allo</p>
</template>
<script>
import DIRECTIONS from '@/models/directions';

export default {
  name: 'KeyBoardDirectionListener',
  props: {
    onDirectionPress: { type: Function }
  },
  mounted() {
    window.addEventListener('keypress', e => {
      switch (e.code) {
        case 'ArrowLeft':
          this.onDirectionPress(DIRECTIONS.LEFT);
          break;
        case 'ArrowUp':
          this.onDirectionPress(DIRECTIONS.UP);
          break;
        case 'ArrowRight':
          this.onDirectionPress(DIRECTIONS.RIGHT);
          break;
        case 'ArrowDown':
          this.onDirectionPress(DIRECTIONS.DOWN);
          break;
      }
    });
  }
};
</script>
