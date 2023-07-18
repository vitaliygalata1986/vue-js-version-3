<template>
  <div class="container mt-2">
    <div class="Todo">
      <h1>Your actions</h1>
      <app-todo-action
          v-for="(action, i) in todoList"
          :key="i"
          :title="action.title"
          :current="action.current"
          :max="action.max"
          @step="makeStep(i)"
      >
      </app-todo-action>
      <hr>
      <div class="btn btn-success" :class="$style.appBtn">Finish</div>
    </div>
  </div>
</template>

<script>
import AppTodoAction from './components/TodoAction.vue'

export default {
  components: {
    AppTodoAction
  },
  data: () => ({
    todoList: [
      {title: 'First action', current: 0, max: 5},
      {title: 'Other work', current: 0, max: 10},
      {title: 'Some fun', current: 0, max: 7}
    ]
  }),
  methods: {
    makeStep(i) {
      // console.log(event)
      let action = this.todoList[i];
      if (action.current < action.max) {
        action.current++;
      }
    }
  }
}
</script>


<style module>
.appBtn{
  display: block;
}
</style>