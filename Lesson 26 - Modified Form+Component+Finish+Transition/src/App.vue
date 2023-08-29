<template>
  <div class="container mt-2">
  <form v-if="!formDone" @submit.prevent="sendForm">
    <app-progress :current="fieldDone" :max="info.length" />
    <div>
      <app-field
          v-for="(field,i) in info"
          :key="i"
          :label="field.label"
          :value="field.value"
          :valid="field.valid"
          @updatedvalue="onInput(i, $event)"
      ></app-field>
    </div>
    <button :disabled="!formReady" class="btn btn-primary mt-4">
      Send Data
    </button>
  </form>

  <div v-else>
<!--    <modal-info />-->
    <info-table :info="this.info"/>
  </div>

  </div>
</template>

<script>
import AppField from "@/components/Field";
import AppProgress from "@/components/ProgressBar";
import InfoTable from "@/components/Table";
// import ModalInfo from "@/components/VueFinalModal";

export default {
  name: 'App',
  components: { AppField, AppProgress, InfoTable },
  data: () => ({
    formDone: false,
    info: [
      {
        label: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        label: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/
      },
      {
        label: 'Email',
        value: '',
        pattern: /.+/
      },
      {
        label: 'Some Field 1',
        value: '',
        pattern: /.+/
      },
      {
        label: 'Some Field 2',
        value: '',
        pattern: /.+/
      }
    ]
  }),
  methods: {
    onInput(i, val) {
      let field = this.info[i];
      field.value = val.trim();
      field.valid = field.pattern.test(field.value);
    },
    sendForm() {
      if (this.formReady) {
        this.formDone = true
      }
    },
  },
  created() {
    this.info.forEach(field => {
      field.valid = false;
    })
  },
  computed: {
    fieldDone() {
      return this.info.filter(field => field.valid).length
    },
    formReady() {
      // return this.info.every(val => val.valid)
      return this.fieldDone >= this.info.length
    },
  }
}
</script>