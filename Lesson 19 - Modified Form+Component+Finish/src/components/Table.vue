<template>
  <table class="table table-bordered">
    <tbody>
    <tr
        v-for="(field,i) in info"
        :key="i"
    >
      <th>{{field.label}}</th>
      <td>{{field.value}}</td>
    </tr>
    </tbody>
  </table>
  <a href="/">Home</a>
</template>

<script>
export default {
  name: "InfoTable",
  props:{
    props:{
      info: { type: Array, required: true },
    }
  }
}
</script>