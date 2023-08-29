<template>
  <div class="form-group appGroup">
    <label class="form-label">
      {{ label }}
<!--      <font-icon :class="iconsClasses" v-if="activated" :icon="nameIcon" />-->
      <transition
          name="icon"
          v-if="activated"
          mode="out-in"
          appear
          appear-active-class="icon-appear"
      >
        <!-- mode="out-in" - анимация сработает на переключение иконок-->
        <!-- appear" - первая иконка -->
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

.icon-enter-active{
  animation: iconIn 0.5s;
}

.icon-leave-active{
  animation: iconIn 0.5s;
}

.icon-appear{
  animation: iconAppear 0.5s;
}

@keyframes iconIn {
  from{transform: rotateY(-90deg)}
  to{transform: rotateY(0)}
}

@keyframes iconOut {
  from{transform: rotateY(0)}
  to{transform: rotateY(90deg)}
}

@keyframes iconAppear {
  from{opacity:0}
  to{opacity: 1}
}

</style>