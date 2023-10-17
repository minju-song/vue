export default {
    template : `
    <div>
        <table id="list">
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>글제묙</th>
                    <th>조회수</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="b in boards">
                    <td>{{b.no}}</td>
                    <td v-on:click="boardRead(b)">{{b.title}}</td>
                    <td>{{b.view}}</td>
                    <td>
                        <button v-on:click="boardDelete(b.no)">삭제</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <button v-on:click="boardWrite">글쓰기</button>
    </div>
    `,
    props : ['boards'],
    methods : {
        boardWrite () {
            this.$emit('board-write');
        },
        boardDelete(no) {
            this.$emit('board-delete', no);
        },
        boardRead(b) {
            this.$emit('board-read', b)
        }
    }
}