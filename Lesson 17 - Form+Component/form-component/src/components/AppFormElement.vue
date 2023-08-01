<template>
  <div class="form-group" :class="$style.appGroup">
    <label class="form-label">
      {{ label }}
      <font-awesome-icon :class="iconsClasses" v-if="activated" :icon="icons" />
    </label>
    <input type="text" class="form-control" :value="value" @input="onInput">
  </div>
</template>

<script>

export default {
  name: "AppFormElement",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    valid: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      activated: this.value !== ''
    }
  },
  methods: {
    onInput(event) {
      this.activated = true;
      const value = event.target.value
      this.$emit('updatedvalue', value)
    }
  },
  computed: {
    icons() {
      return this.value ? 'fa-check-circle' : 'fa-exclamation-circle'
    },
    iconsClasses() {
      return {
        'text-success': this.valid,
        'text-danger': !this.valid
      }
    },
  },
}
</script>


<style module>
.appGroup{
  display: block;
  margin-bottom: 5px;
}
</style>