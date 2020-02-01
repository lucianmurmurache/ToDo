<template>
  <div class="container">
    <md-card>
      <md-card-header>
        <div class="md-card-title">ToDo List</div>
      </md-card-header>
      <md-card-content class="md-card-content">
        <md-field class="md-field">
          <md-input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo.."></md-input>
        </md-field>
        <div class="todo-list">
          <ul class="todos">
            <li class="todo-item" v-for="todo in todos" :key="todo.id">
              <span>
                <md-checkbox
                  class="completed md-primary"
                  type="checkbox"
                  @change="toggleCompleted"
                  v-model="todo.completed"
                />
                <span
                  v-if="todo.editing === false"
                  class="todo-item-label"
                  :class="{'is-complete' : todo.completed}"
                  @dblclick="editTodo(todo)"
                >{{ todo.label }}</span>
                <div v-if="todo.editing">
                  <md-field>
                    <md-input
                      type="text"
                      v-model="todo.label"
                      @keyup.enter="stopEdit(todo)"
                      @keyup.esc="stopEdit(todo)"
                      @focusout="stopEdit(todo)"
                      placeholder="Edit.."
                    />
                  </md-field>
                </div>
              </span>
              <span>
                <md-button class="md-fab md-mini md-primary" @click="editTodo(todo)">
                  <md-icon>edit</md-icon>
                  <md-tooltip md-direction="top" md-delay="1000">edit</md-tooltip>
                </md-button>
                <md-button class="md-fab md-mini" @click="removeTodo(todo)">
                  <md-icon>delete</md-icon>
                  <md-tooltip md-direction="top" md-delay="1000">delete</md-tooltip>
                </md-button>
              </span>
            </li>
          </ul>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
      editedTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
        editing: false
      });
      this.currentTodo = ""; //reset input field
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      todo.editing = true;
    },
    stopEdit(todo) {
      todo.editing = false;
    },
    toggleCompleted() {
      this.todos.completed = !this.todos.completed;
    }
  }
};
</script>

<style>
.md-card {
  max-width: 80%;
  margin: auto;
}

.md-card-header {
  text-align: center;
  color: #fff;
  background-color: #00004c;
}

.md-card-title {
  font-size: 32px;
}

.md-card-content {
  margin-left: 1%;
  font-size: 22px;
}

.md-field {
  min-width: 40%;
  max-width: 50%;
  font-size: 22px;
  border-bottom: 1px dotted #808080;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.todo-item {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #808080;
}

.todo-item-label {
  color: #fff;
  margin-left: 1%;
}

.is-complete {
  text-decoration: line-through;
  color: #808080;
}
</style>
