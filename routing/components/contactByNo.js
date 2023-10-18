import contactlist from '../assets/contactlist.js'

const template =`
    <div>
        <h3>연락처 상세</h3>
        <hr class="divider">
        <div class="card">
            <table class="detail table">
                <tbody>
                    <tr class="active">
                        <td>일련번호</td>
                        <td>{{contact.no}}</td>
                    </tr>
                    <tr class="active">
                        <td>이름</td>
                        <td>{{contact.name}}</td>
                    </tr>
                    <tr class="active">
                        <td>전화번호</td>
                        <td>{{contact.tel}}</td>
                    </tr>
                    <tr class="active">
                        <td>주소</td>
                        <td>{{contact.address}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
`;

export default {
    template,
    data : function() {
        return {
            contacts : contactlist.contacts,
            no : 0
        }
    },
    computed : {
        contact: function() {
            console.log(this.$route.params.no);
            this.no = this.$route.params.no;
            var ary = this.contacts.filter(contact => {
                if(this.no == contact.no) {
                    return true;
                }
            })
            if (ary.length > 0) return ary[0];
            else return {}
        }
    }
}