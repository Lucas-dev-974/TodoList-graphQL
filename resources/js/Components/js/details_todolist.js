import todolist from "./todolist";
import Axios from "axios"

export default{
    props: {
        Todolist: {
            required: false
        }
    },

    data(){
        return {
            dialog: false,
            todo_name: this.Todolist ? this.Todolist.todo_name : '',
            priority: this.Todolist ? this.Todolist.priority : '',
            date: this.Todolist ? this.Todolist.to_date : (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            details: this.Todolist ? this.Todolist.details : ''
         }
    },

    methods:{
        update_todolist(){
            console.log('okok');
            if(this.Todolist){ // Si il y'a déjà une todolist
                Axios({
                    url: 'http://127.0.0.1:8000/graphql/',
                    method: 'post',
                    data: {
                    query: `
                    mutation{
                        updateTodoList(
                            id: ${this.Todolist.id},
                            todo_name: "${this.todo_name}",
                            to_date: "${this.date}",
                            priority: "${this.priority}",
                            details: "${this.details}"
                        ){
                            todo_name, to_date, id, details, priority, 
                            TodoTasks{
                                task_information, id, checked
                            }
                        }
                        
                    }
                        `
                    }
                }).then(result => {
                    if(result.data.data.updateTodoList) this.$emit('updateTodo', result.data.data.updateTodoList)
                })
            }
        },

        add_todolist: function(){
            Axios({
                url: 'http://127.0.0.1:8000/graphql/',
                method: 'post',
                data: {
                query: `
                    mutation{
                            createTodoList(
                            todo_name: "${this.todo_name}",
                            to_date: "${this.date + " 00:00:00"}",
                            priority: "${this.priority}",
                            details: "${this.details}"
                            ){
                                todo_name, to_date, id, details, priority
                            }
                            
                        }
                    `
                }
            }).then((result) => {
            if(result.status === 200){
                this.$store.commit('add_todolist', result.data.data.createTodoList)
                this.dialog = false
            }
            }).catch(e => {
                console.log(e);
            })
        },

        delete_todolist(){
            Axios({
                url: 'http://127.0.0.1:8000/graphql/',
                method: 'post',
                data: {
                  query: `
                  mutation{
                    delete_TodoList(id: ${this.Todolist.id}){
                        id, todo_name
                    }
                  }
                `}
            }).then((result) => {
                if(result.status === 200){
                    console.log(result);
                    this.$store.commit('delete_todolist', this.Todolist.id)
                }
            });
        },
    }
}