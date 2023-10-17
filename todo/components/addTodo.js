export default {
    template :`
        <div>
            <div id="myDIV" class="header">
                <h2 style="margin:5px">My To Do List</h2>
                <input type="text" id="myInput" placeholder="할 일" v-model="title">
                <input type="text" id="myDuedate" placeholder="기한(YYYY-MM-DD)" v-model="duedate">
                <br><br>
                <span v-on:click="addTodo" class="addBtn">Add</span>
            </div>
        </div>
    `,
    data : function() {
        return {
            no:0,
            title : '',
            duedate : '',
            checked : false
        }
    },
    methods : {
        addTodo() {
            this.$emit('add', this.title, this.duedate);
            [this.title, this.duedate] = ['','']
        }
    }
}