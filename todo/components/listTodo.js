export default {
    template :`
        <div>
        <ul id="myUL">
            <li v-for="todo in lists" v-on:click="checkTodo(todo.no)" v-bind:class="todo.checked">{{todo.title}} ({{todo.duedate}})
            <span class="close" v-on:click.stop="todoDelete(todo.no)">X</span></li>           
        </ul>
        <br>
        <button v-on:click="todoAdd">등록하기</button>
        </div>
    `,
    props : ['lists'],
    methods : {
        todoAdd() {
            this.$emit('todo-add');
        },
        todoDelete(no) {
            // e.stopPropagation();
            this.$emit('remove', no);
        },
        checkTodo(no) {
            this.$emit('checking', no);

        }
    }
}


// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
