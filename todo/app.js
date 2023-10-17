import myAdd from "./components/addTodo.js";
import myList from "./components/listTodo.js";
import myHeader from "./components/myHeader.js";

const template = `
    <div>
        <my-header v-on:load-data="loadData"></my-header>
        <my-add v-if="addOK" v-on:add="add"></my-add>
        <my-list v-if="listOK" v-bind:lists="dataArray.todo"
                                v-on:todo-add="todoAdd"
                                v-on:remove="remove"
                                v-on:checking="checkTodo"></my-list>
    </div>
`

new Vue({
    el : '#app',
    template : template,
    data : {
        addOK : false,
        listOK : false,
        dataArray : {},
    },
    components : {
        'my-add' : myAdd,
        'my-list' : myList,
        'my-header' : myHeader
    },
    methods : {
        todoList() {
            this.addOK = false;
            this.listOK = true;
        },
        todoAdd() {
            this.addOK = true;
            this.listOK = false;
        },
        loadData(data) {
            // console.log(data.board);
            this.dataArray = data;
            this.todoList();
        },
        add(title, duedate) {
            console.log(title,duedate);
            let no = this.dataArray.todo.at(-1).no + 1;
            this.dataArray.todo.push({no:no, title, duedate, checked:""});
            this.todoList();
        },
        remove(no) {
            this.dataArray.todo = this.dataArray.todo.filter((item, idx, ary) => {
                return item.no != no;
            })
            console.log(this.dataArray.todo)
        },
        checkTodo(tno) {
            // console.log(todo)
            console.log(tno)
            let td = null;
            this.dataArray.todo.forEach(e => { 
                console.log(e)               
                if (e.no == tno) {
                    if(e.checked == "checked") e.checked = "";
                   else e.checked = "checked";

                }
            });

        }
    }
})