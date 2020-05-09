<template>
  <div class="container">
    <md-card>
      <md-card-header>
        <div class="md-card-title">
          To
          <img src="./assets/logo.png" />
          Do
        </div>
      </md-card-header>
      <md-card-content class="md-card-content">
        <md-field class="md-field">
          <md-input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo.."></md-input>
          <md-button class="fa fa-plus" @click="addTodo()">
            <md-icon>add</md-icon>
            <md-tooltip md-direction="top" md-delay="1000">Add</md-tooltip>
          </md-button>
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
              </span>

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
    <div class="media">
      <a
        href="https://github.com/lucianmurmurache/ToDo"
        aria-label="Social media logo - github"
        alt="Github logo"
        target="_blank"
      >
        <img src="./assets/github64.png" />
      </a>
      <a
        href="https://de.linkedin.com/in/lucian-murmurache-88155473"
        aria-label="Social media logo - linkedin"
        alt="LinkedIn logo"
        target="_blank"
      >
        <img src="./assets/linkedin64.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
      editedTodo: "",
      hasError: false
    };
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
  },
  methods: {
    addTodo() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);

      if (!this.currentTodo) {
        // stop submit if the current todo is empty
        this.hasError = true;
        return;
      }
      this.hasError = false;
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
      localStorage.removeItem("todos");
    },
    editTodo(todo) {
      todo.editing = true;
    },
    stopEdit(todo) {
      todo.editing = false;
    },
    toggleCompleted() {
      this.todos.completed = !this.todos.completed;
    },
    persist() {
      localStorage.todo = this.todos;
    }
  }
};
</script>

<style>
.md-card {
  overflow: auto;
  max-width: 70%;
  margin: auto;
}

.md-card-header {
  background-color: #00004c;
  text-align: center;
  color: #808080;
}

.md-card-title {
  font-size: 3rem;
}

.md-card-title img {
  max-width: 64px;
  max-height: 64px;
  margin: 0 -15px;
}

.md-card-content {
  margin-left: 1%;
}

.md-field {
  border-bottom: 1px solid #808080;
  font-size: 1rem;
  min-width: 40%;
  max-width: 400px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.todo-list {
  display: flex;
  flex-direction: row;
}

.todo-item {
  border-bottom: 1px solid #808080;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  display: flex;
}

.todo-item-label {
  margin: 0 1rem;
  color: #fff;
}

.is-complete {
  text-decoration: line-through;
  color: #808080;
}

.media {
  top: 45%;
  position: fixed;
  z-index: 1;
}

.media a {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: block;
  padding: 10px;
}

@media screen and (max-width: 550px) {
  .md-card {
    max-width: 95%;
  }
  .media {
    display: none;
  }

  .md-field {
    min-width: 60%;
    max-width: 350px;
    font-size: 2rem;
  }

  .md-card-title {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 420px) {
  .md-card {
    max-width: 100%;
  }
  .media {
    display: none;
  }
}

@media screen and (max-width: 370px) {
  .md-card {
    max-width: 95%;
  }
  .media {
    display: none;
  }

  .todo-item-label {
    margin: 0 0.1rem;
    color: #fff;
  }
}
</style>
