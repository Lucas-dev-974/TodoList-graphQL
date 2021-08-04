<template>
    <v-card elevation="2" min-height="400" min-width="300">
        <v-card-title class="d-flex justify-space-around">
            
            <v-badge class=" mx-2" :color="priority_color">
                <span><h5 class="fs-3"> {{ todo.todo_name }} </h5></span>
                <span slot="badge" >{{ todo.priority }}</span>
            </v-badge>
            <DetailsTodolist :Todolist="todo" @updateTodo="updateTodo" />
        </v-card-title>

        <v-container>
            <div v-for="task in todolist.TodoTasks" :key="task.id" class="px-4">
                <Task :task="task" :todolistID="todo.id" />
            </div> 
        </v-container>

        <Add_task :todolist_id="todo.id" />

        <v-expansion-panels style="position: relative; bottom: 0px">
            <v-expansion-panel expand focusable>
                <v-expansion-panel-header> <span style="width: 45%;">Détails </span> <span style="color: red;">{{ todo.to_date.split(' ')[0] }}</span></v-expansion-panel-header>
                <v-expansion-panel-content>
                    {{ todo.details }}
                </v-expansion-panel-content>
            </v-expansion-panel>            
        </v-expansion-panels>
    </v-card>
</template>

<script src="./js/todolist.js"></script>
