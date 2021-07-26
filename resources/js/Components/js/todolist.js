import Axios from "axios"

import Add_task from "../add_task.vue" 

export default{
    components:{
        Add_task
    }, 

    props:{
        todolist: {
            required: true
        }
    },

    data(){
        return{
            
        }
    },

    mounted(){
        console.log(this.todolist);
    },

    methods: {
        delete_todolist(){
            Axios({
                url: 'http://127.0.0.1:8000/graphql/',
                method: 'post',
                data: {
                  query: `
                  mutation{
                    delete_TodoList(id: ${this.todolist.id}){
                        id, todo_name
                    }
                  }
                    `
                }
            }).then((result) => {
                if(result.status === 200){
                    console.log(result);
                    this.$store.commit('delete_todolist', this.todolist.id)
                }
            });
        }
    }
}