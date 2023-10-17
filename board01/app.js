// app.js 파일

//컴포넌트에선 데이터 속성이 함수로 반환
const myHeader = {
    template : '',
    data : function() {
        return {

        }
    },
    methods : {

    }
}

const template = `
    <div>
        <my-header></my-header>
        <my-board-list></my-board-list>
        <my-board-read></my-board-read>
        <my-board-write></my-board-write>
    </div>
`;

const myBoardList = {

}

const myBoardRead = {
    
}



myBoardWrite.print();

new Vue({
    el : '#app',
    template : template,
    components : {
        'my-header' : myHeader,
        'my-board-list' : myBoardList,
        'my-board-read' : myBoardRead,
        'my-board-write' : myBoardWrite
    }
})