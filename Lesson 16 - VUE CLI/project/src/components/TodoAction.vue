<template>
  <div class="action">
    <div class="alert" :class="alertClasses">
      <h2>{{ title }}</h2>
      <div class="progress">
        <div class="progress-bar" :style="progressStyles"></div>
      </div>
      <hr>
      <h3 v-if="current === max">All done!</h3>
      <button @click="step" v-else type="button" class="btn btn-primary" :class="$style.appBtn">
        I make step!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }

  },
  computed: {
    rel() {
      return this.current / this.max;
    },
    progressStyles() {
      return {
        width: this.rel * 100 + '%'
      }
    },
    alertClasses() {
      return {
        'alert-danger': this.rel < 0.25,
        'alert-warning': this.rel >= 0.25 && this.rel < 0.75,
        'alert-success': this.rel >= 0.75
      }
    }
  },
  methods: {
    step() {
      this.$emit('step')
    },
  },
}
</script>


<!--<style scoped>-->
<!--.app-btn{-->
<!--  box-shadow: 5px 5px 10px #000;-->
<!--}-->
<!--</style>-->

<style module>
.appBtn{
  box-shadow: 5px 5px 10px #000;
}
</style>