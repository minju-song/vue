//myBoardWrite.js

export default {
    template : `
    <div>
        <table id="list">
            <tr>
                <th>글제목</th>
                <td><input type="text" style="width:90%" v-model="title"></td>
            </tr>
            <tr>
                <td colspan = "2">
                    <textarea style = "width:100%" v-model = "content"></textarea>
                </td>
            </tr>
        </table>
        <br>
        <button v-on:click="boardSave">저장</button>
        <button v-on:click="boardList">목록</button>
    </div>
    `,
    data : function() {
        return {
            title : '',
            content : ''
        }
    },
    methods : {
        boardSave() {
            this.$emit('board-save',this.title,this.content);
            [this.title, this.content] = ['',''];
        },
        boardList() {
            this.$emit('board-list')
        }
    }
}