<template>
  <vue-final-modal v-slot="{ params, close }" v-bind="$attrs" classes="modal-container" content-class="modal-content">
    <span class="modal__title">
      <slot name="title"></slot>
    </span>
    <div class="modal__content">
      <slot :params="params"></slot>
    </div>
    <div class="modal__action">
      <v-button @click="$emit('confirm', close)">confirm</v-button>
      <v-button @click="$emit('cancel', close)">cancel</v-button>
    </div>
    <button class="modal__close" @click="close">
      <mdi-close></mdi-close>
    </button>
  </vue-final-modal>
</template>


<script>
export default {
  name: 'CustomModal',
  inheritAttrs: false,
  emits: ['confirm', 'cancel']
}
</script>