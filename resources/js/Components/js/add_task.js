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
            entry: ""
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