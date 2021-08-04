<template>
    <v-row>
        <v-col cols="10"> 
             <v-text-field solo v-model="task.task_information"  @keyup.enter.native="update_task"></v-text-field>
        </v-col>

        <v-col cols="1" class="mt-4"> 
            <v-btn color="red" icon x-small @click="delete_task">
                <v-icon>mdi-minus</v-icon>
            </v-btn>
        </v-col>
        <v-col cols="1" class="mt-4">
            <v-checkbox v-model="task.checked" @click="update_task" style="margin-top: -3px"></v-checkbox>
        </v-col>
    </v-row>
</template>

<script src="./js/Task.js"> </script>
