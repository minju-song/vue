export default {
    template : `
    <div>
    <h3>상세</h3>
    <table id="list">
      <tbody>
        <tr>
          <td style="width: 50px;">글번호</td>
          <td>{{board.no}}</td>
          <td style="width: 50px;">조회수</td>
          <td>{{board.view}}</td>
        </tr>
        <tr>
          <td style="width: 50px;">글제목</td>
          <td colspan="3">{{board.title}}</td>
        </tr>
        <tr style="height: 150px;">
          <td colspan="4">{{board.content}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <button @click="boardList">목록보기</button>
    </div>
    `,
    props : ['board'],
    methods : {
        boardList() {
            this.$emit('board-list')
        }
    }
}
