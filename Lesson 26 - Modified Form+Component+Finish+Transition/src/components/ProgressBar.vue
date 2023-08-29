<template>
  <div class="progress mb-3">
    <div class="progress-bar" :style="styles"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    current:{ type: Number, required: true },
    max:{ type: Number, default: 100 }
  },
  computed:{
    value(){
      return this.current / this.max;
    },
    styles() {
      return {width: this.value * 100 + '%'}
    },
  }
}
</script>