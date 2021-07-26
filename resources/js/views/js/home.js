import Axios from 'axios'

import TodoList from "../../Components/todolist.vue"
import Add_todo from "../../Components/add_todolist.vue" 

export default{
    components:{
        TodoList, Add_todo
    },

    data(){
        return{
            
        }
    },

    mounted(){
        Axios({
            url: 'http://127.0.0.1:8000/graphql/',
            method: 'post',
            data: {
              query: `
                {
                    todo_lists{
                        id,
                        todo_name,
                        to_date
                    }
                }
                `
            }
          }).then((result) => {
              console.log(result);
              this.$store.commit('set_todolists', result.data.data.todo_lists)
          });
    }
}