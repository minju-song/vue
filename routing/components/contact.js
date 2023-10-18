import contactlist from '../assets/contactlist.js'

const template = `
    <div>
        <h1>Contact</h1>
        <div class="wrapper">
            <router-link :to='"/contact/"+c.no' v-for="c in contacts">
                <div class="box btn">
                    {{c.name}}
                </div>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
`;

export default {
    template,
    data : function() {
        return {
            contacts : contactlist.contacts
        }
    }
}