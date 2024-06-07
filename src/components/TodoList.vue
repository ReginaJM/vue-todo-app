<script setup lang="ts">

import { ref } from 'vue';
import { Todo } from '../models/Todo.js';



const addTodo = () => {
    todos.value.push(new Todo(todoText.value));
    todoText.value = "";
}

const handleInput = (e: any) => {
    todoText.value = e.target.value;
}

const toggleTodo = (i: number) => {
    todos.value[i].done = !todos.value[i].done;
}

const removeTodo = (i: number) => {
    todos.value.splice(i, 1);

}

//vi behöver ett state som kommer att vara en ref som innehåller en lista med Todo objekt 
// datatypen är Todo
// ref behöver vi när vi har en variabel som vi vill kunna uppdatera!
//och från början vill vi att den ska vara en tom lista.
const todos = ref<Todo[]>([]);

// här behöver vi inte ange datatyp eftersom datatypen är string, och det är en enkel datatyp.
const todoText = ref("");

</script>



<template>
    
    <div>
        <input type="text" :value="todoText" @input="handleInput" />
        <button @click="addTodo">Spara</button>
    </div>

    <ul>
        <li v-for="(todo, i) in todos" :key="todo.id">
            <span :class="todo.done ? 'done' : ''">{{ todo.text }}</span>
            <button @click="() => toggleTodo(i)">Ändra</button>
            <button @click="() => removeTodo(i)">Ta bort</button>
        </li>
    </ul>

</template>




<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li > span.done {
    text-decoration: line-through;
}


</style>
