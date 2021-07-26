import Axios from "axios"

export default{
    data(){
        return{
            todo_name: "",
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            tasks: [],
            dialog: false
        }
    },

    mounted(){

    },

    methods: {
        add_todolist: function(){
            Axios({
                url: 'http://127.0.0.1:8000/graphql/',
                method: 'post',
                data: {
                  query: `
                  mutation{
                    createTodoLists(
                      todo_name: "${this.todo_name}",
                      to_date: "${this.date}"
                    ){
                      todo_name, to_date, id
                    }
                    
                  }
                    `
                }
            }).then((result) => {
              if(result.status === 200){
                this.$store.commit('add_todolist', result.data.data.createTodoLists)
                this.dialog = false
              }
            }).catch(e => {
              console.log(e);
            })
        }
    }
}