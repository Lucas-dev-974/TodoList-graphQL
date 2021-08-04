import Axios from "axios"

import Add_task from "../add_task.vue" 
import Task from "../Task.vue"
import DetailsTodolist from '../details_todolist.vue'

export default{
    components:{
        Add_task, Task, DetailsTodolist
    }, 

    props:{
        todolist: {
            required: true
        }
    },

    data(){
        return{
            todo: this.todolist,
            priority_color: ""
        }
    },
    
    mounted(){
        console.log(this.todo);
        this.set_badgeColor()
    },

    methods: {
        updateTodo: function(todo){
            this.todo = todo
        },

        updateTodoTask: function(tasks){
            this.todo.tasks = tasks
        },

        set_badgeColor: function(){
            switch(this.todolist.priority){
                case "Faible":  
                    this.priority_color = "primary"
                    break
                case 'Moyenne':
                    this.priority_color = 'orange'
                    break
                case 'Forte':
                    this.priority_color = 'red'
                    break
            }
        }
    }
}