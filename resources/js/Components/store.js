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
            state.todolists.filter((todo) => {
                if(todo.id === todolist.id){
                    console.log(todo);
                }
            })
        },

        delete_todolist(state, todolistID){
            for(let i = 0; i < state.todolists.length; i++){
                if(state.todolists[i].id === todolistID) state.todolists.splice(i, 1)
            }
        }
    }
})