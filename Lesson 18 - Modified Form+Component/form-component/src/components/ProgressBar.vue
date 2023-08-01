<template>
  <div class="progress mb-3">
    <div class="progress-bar" :style="progressStyles"></div>
  </div>
</template>

<script>
export default {
  props: {
    fieldDone:{
      type: Number,
      required: true
    },
    inputCount:{
      type: Number,
      required: true
    }
  },
  name: "ProgressBar",
  computed:{
    progressStyles() {
      const rel = this.fieldDone / this.inputCount * 100
      return {width: rel + '%'}
    },
  }
}
</script>

<style scoped>

</style>