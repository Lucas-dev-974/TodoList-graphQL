import Axios from 'axios'

import TodoList from "../../Components/todolist.vue"
import DetailsTodolist from '../../Components/details_todolist.vue'

export default{
    components:{
        TodoList, DetailsTodolist, 
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
                        to_date,
                        priority,
                        details,
                        TodoTasks{
                            task_information, id, checked
                        }
                    }
                }
                `
            }
          }).then((result) => {
              console.log('result');
              console.log(result);
              this.$store.commit('set_todolists', result.data.data.todo_lists)
          });
    }
}