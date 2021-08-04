<template>
    <v-container grid-list-xs>
        <div class="d-flex justify-center">
            <h3 class="mr-4">TodoLists</h3>
            <DetailsTodolist />    
        </div>

        <div class="d-flex justify-center">
            <div v-for="todolist in $store.state.todolists" :key="todolist.id" class="mx-2 mt-15">
                <TodoList :todolist="todolist"/>
            </div>
        </div>
    </v-container>
</template>

<script src="./js/home.js"></script>
