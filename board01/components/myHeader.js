//myHeader

export default {
    template : `
    <div>
        <h3>간단한 게시판</h3>
        <p>게시판의 데이터는 board.json을 활용해서 초기화</p>
        <input type="file" v-on:change="loadData">
    </div>
    `,
    methods : {
        loadData(e) {
            let file = e.target.files[0];

            let reader = new FileReader();
            reader.addEventListener('loadend', () => {
                let jsonData = JSON.parse(reader.result);

                this.$emit('load-data',jsonData);
            })

            reader.readAsText(file);
        }
    }
}