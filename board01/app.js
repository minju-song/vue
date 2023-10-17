// app.js 파일
import myBoardWrite from "./components/myBoardWrite.js";
import myHeader from "./components/myHeader.js";
import myBoardList from "./components/myBoardList.js";
import myBoardRead from "./components/myBoardRead.js";
//컴포넌트에선 데이터 속성이 함수로 반환


const template = `
    <div>
        <my-header v-on:load-data="loadData"></my-header>
        <br>
        <my-board-list v-if="listOK" v-bind:boards="dataArray.board"
                                    v-on:board-write="boardWrite"
                                    v-on:board-read="boardRead"
                                    v-on:board-delete="boardDelete"></my-board-list>
        <my-board-read v-if="readOK" v-bind:board="board"
                                    v-on:board-list="boardList"></my-board-read>
        <my-board-write v-if="writeOK"
                        v-on:board-list="boardList"
                        v-on:board-save="boardSave"></my-board-write>
    </div>
`;

new Vue({
    el : '#app',
    template : template,
    data : {
        board : null,
        listOK : false,
        readOK : false,
        writeOK : false,
        dataArray : {}, //board.json
    },
    components : {
        'my-header' : myHeader,
        'my-board-list' : myBoardList,
        'my-board-read' : myBoardRead,
        'my-board-write' : myBoardWrite
    },
    methods : {
        boardList() { //목록화면 출력
            this.listOK = true;
            this.readOK = false;
            this.writeOK = false;

            this.board = null;
        },
        boardWrite() { //작성화면 출력
            this.listOK = false;
            this.readOK = false;
            this.writeOK = true;
        },
        boardRead(b) { //상세화면 출력
            this.listOK = false;
            this.readOK = true;
            this.writeOK = false;
            b.view++;
            this.board = b;
        },
        boardSave(title, content) {
            // this.board = {"title":title, "content":content};
            let no = Number(this.dataArray.board.at(-1).no) + 1;
            this.dataArray.board.push({no: no,title,content,view: 0});
            this.boardList();
            //초기화
        },
        boardDelete(no) {
                      // this.boards.splice((bno-1),1);
            let answer = confirm(no+"번 게시글을 삭제하시겠습니까?");
            if(answer) {
                this.dataArray.board = this.dataArray.board.filter((item, idx, ary) => {
                return item.no != no;
            })
            }
        },
        loadData(data) {
            // console.log(data.board);
            this.dataArray = data;
            this.boardList();
        }
        
    },
    created : function() {
        //board.json 데이터를 목록에 출력
        // fetch('./data/board.json')
        // .then(response => response.json())
        // .then(result => {
        //     this.dataArray = result;
        //     this.boardList();
        // })
        // .catch(err => {
        //     console.log('err : '+err);
        // })
    },

})