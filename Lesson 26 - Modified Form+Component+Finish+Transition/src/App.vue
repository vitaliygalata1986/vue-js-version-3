<template>
  <div class="container mt-2">
    <form v-if="!formDone" @submit.prevent="sendForm">
      <app-progress :current="fieldDone" :max="info.length"/>
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

    <h2 v-else>All done</h2>
    <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
      <table class="table table-bordered">
        <tbody>
        <tr
            v-for="(field,i) in info"
            :key="i"
        >
          <th>{{ field.label }}</th>
          <td>{{ field.value }}</td>
        </tr>
        </tbody>
      </table>
      <hr>
      <div class="d-flex">
        <button class="btn btn-success me-1" @click="onConfirm">Ok</button>
        <button class="btn btn-danger" @click="showModal = false">Cancel</button>
      </div>
    </vue-final-modal>
  </div>

</template>

<script>
import AppField from "@/components/Field";
import AppProgress from "@/components/ProgressBar";
import {VueFinalModal} from 'vue-final-modal'

export default {
  name: 'App',
  components: {AppField, AppProgress, VueFinalModal},
  data: () => ({
    formDone: false,
    showModal: false,
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
        this.showModal = true
      }
    },
    onConfirm(){
      this.showModal = false
      this.formDone = true
    }
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

<style scoped>

::v-deep .modal-container { /* стили будут применены в том числе и для его дочерних компонентов */
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  width: 25%;
}
</style>
