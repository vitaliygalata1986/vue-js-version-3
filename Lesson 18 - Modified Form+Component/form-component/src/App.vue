<template>
  <div class="container mt-2">
  <form v-if="!formDone" @submit.prevent="sendForm">
    <ProgressBar :fieldDone="this.fieldDone" :inputCount="this.inputCount" />
    <div>
      <app-form-element
          v-for="(field,i) in info"
          :key="i"
          :label="field.label"
          :value="field.value"
          :valid="field.valid"
          @updatedvalue="onInput(i, $event)"
      ></app-form-element>
    </div>
    <button :disabled="!formReady" class="btn btn-primary mt-4">
      Send Data
    </button>
  </form>

  <div v-else>
    <info-table :info="this.info"/>
  </div>

  </div>
</template>

<script>
import AppFormElement from "@/components/AppFormElement";
import ProgressBar from "@/components/ProgressBar";
import InfoTable from "@/components/Table";

export default {
  name: 'App',
  components: {
    AppFormElement,
    ProgressBar,
    InfoTable
  },
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
    inputCount(){
      console.log(this.info.length)
      return Number(this.info.length)
    }
  }
}
</script>