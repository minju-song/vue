export default {
    template : `
    <div>
        <h1>Todo List</h1>
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