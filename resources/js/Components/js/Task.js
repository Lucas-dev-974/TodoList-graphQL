import Axios from "axios";

export default{
    props:{
        task:{
            required: true
        },
        todolistID:{
            required: true
        }
    },

    methods:{
        delete_task(){
            Axios({
                url: 'http://127.0.0.1:8000/graphql/',
                method: 'post',
                data: {
                  query: `
                  mutation{
                    delete_Task(id: ${this.task.id}){
                        id, 
                    }
                  }
                `}
            }).then((result) => {
                if(result.status === 200){
                    console.log(result);
                    let task = {
                        taskID: this.task.id,
                        todolistID: this.todolistID
                    }

                    this.$store.commit('delete_task', task)
                }
            });
        },

        update_task: function(){
            Axios({
                url: 'http://127.0.0.1:8000/graphql/',
                method: 'post',
                data: {
                  query: `
                  mutation{
                    updateTask(
                        id: ${this.task.id}
                        task_information: "${this.task.task_information}",
                        checked: ${this.task.checked}
                    ){
                        id, task_information, checked, todo_list_id
                    }
                  }
                `}
            }).then(result => {
                if(result.data.data.updateTask){
                    console.log(result.data.data.updateTask);
                    this.$store.commit('update_task', result.data.data.updateTask)
                }
            })
        }
    }
}