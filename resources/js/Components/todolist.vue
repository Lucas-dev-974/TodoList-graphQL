<template>
    <v-card elevation="2" height="400" width="300">
        <v-card-title class="d-flex justify-space-around">
            {{todolist.todo_name}}
            <v-btn color="error" icon @click="delete_todolist">
                <v-icon>mdi-minus</v-icon>
            </v-btn>
        </v-card-title>

        <div id="todo-content">

        </div>

        <Add_task :todolist_id="todolist.id" />
    </v-card>
</template>

<script src="./js/todolist.js"></script>
