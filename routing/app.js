// app.js
import router from './router/router.js'

const template = `
    <div>
        <div class="header">
            <h1 class="headerText">(주)OpenSSG</h1>
            <nav>
                <router-link v-bind:to="{name:'home'}"><button>Home</button></router-link>
                <router-link :to="{name:'about'}"><button>About</button></router-link>
                <router-link :to="{name:'contact'}"><button>Contact</button></router-link>
            </nav>
        </div>
        <br>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
`;

new Vue({
    el : '#app',
    template,
    router
})

{/* <ul>
<li><router-link to="/home">Home</router-link></li>
<li><router-link to="/about">About</router-link></li>
<li><router-link to="/contact">Contact</router-link></li>
</ul> */}