<template>
  <p>allo</p>
</template>
<script>
export default {
  name: 'KeyBoardDirectionListener',
  mounted() {
    window.addEventListener('keypress', e => {
      console.log(e);
    });
  }
};
</script>
