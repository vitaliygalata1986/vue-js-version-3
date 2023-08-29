<template>
  <div class="form-group" :class="appGroup">
    <label class="form-label">
      {{ label }}
<!--      <font-icon :class="iconsClasses" v-if="activated" :icon="nameIcon" />-->
      <transition name="fade">
        <!--
        <font-icon
            v-if="valid"
            :class="iconsClasses"
            :icon="valid ? 'check-circle' : 'exclamation-circle' "
        />
        <font-icon
            v-else
            :class="iconsClasses"
            :icon="valid ? 'check-circle' : 'exclamation-circle' "
        />
        -->
        <font-icon
          v-if="activated"
          :key="valid"
          :class="iconsClasses"
          :icon="valid ? 'check-circle' : 'exclamation-circle' "
        />


      </transition>
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
    nameIcon() {
      return this.value ? 'check-circle' : 'exclamation-circle'
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


<style scoped>
.appGroup{
  display: block;
  margin-bottom: 5px;
}

.fade-enter-active{
  animation: fadeIn 0.5s;
}

.fade-leave-active{
  animation: fadeOut 0.5s;
}

@keyframes fadeIn {
  from{opacity: 0; transform: translateX(-100px)}
  to{opacity: 1; transform: translateX(0)}
}

@keyframes fadeOut {
  from{opacity: 1}
  to{opacity: 0}
}

</style>