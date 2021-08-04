import Axios from 'axios'

export default{
    props:{
        todolist_id:{
            required: true
        }
    },
    
    data(){
        return{
            dialog: false,
            entry: "",
        }
    },

    methods:{
        enterpressed(object){
            Axios({
                url: 'http://127.0.0.1:8000/graphql/',
                method: 'post',
                data: {
                  query: `
                  mutation{
                    createTask(
                        todo_list_id: ${this.todolist_id},
                        task_information: "${this.entry.toString()}"
                    ){
                        id, task_information
                    }
                  }
                    `
                }
            }).then((result) => {
                if(result.status === 200){
                    console.log(result);
                    let task = {
                        todolistID: this.todolist_id,
                        task: result.data.data.createTask
                    }
                    this.$store.commit('add_task', task)
                }
            });
        }
    }
}