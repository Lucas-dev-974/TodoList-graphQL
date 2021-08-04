import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const VuexLocal = new VuexPersist({
    storage: window.localStorage
})


export default new Vuex.Store({
    plugins: [VuexLocal.plugin],

    state: {
        todolists: [],
    }, 

    mutations: {
        set_todolists(state, todolists){
            state.todolists = []
            state.todolists = todolists
        },

        add_todolist(state, todolist){
            state.todolists.push(todolist)
        },

        update_todolist(state, todolist){
            for(let i = 0; i < state.todolists.length; i++){
                if(state.todolists[i].id === todolist.id){
                    state.todolists[i] = todolist
                }

            }      
        },

        delete_todolist(state, todolistID){
            for(let i = 0; i < state.todolists.length; i++){
                if(state.todolists[i].id === todolistID) state.todolists.splice(i, 1)
            }
        },


        add_task(state, task){
            for(let i = 0; i < state.todolists.length; i++){
                if(state.todolists[i].id === task.todolistID){
                    if(typeof(state.todolists[i].TodoTasks) === "undefined"){
                        state.todolists[i].TodoTasks = new Array(task.task)
                    }else{
                        state.todolists[i].TodoTasks.push(task.task)
                    } 
                } 
                    
            }
        },

        delete_task(state, task){
            let index
            for(let i = 0; i < state.todolists.length; i++){ if(state.todolists[i].id === task.todolistID) index = i }
            state.todolists[index].TodoTasks = state.todolists[index].TodoTasks.filter(tsk => tsk.id !== task.taskID)
        },

        update_task(state, task){
            let index
            state.todolists.filter(todo => {
                if(todo.id == task.todo_list_id){
                    todo.TodoTasks.filter(tsk => {
                        if(tsk.id == task.id){
                            tsk = task
                        }
                    })
                }
            })
        }
    }
})