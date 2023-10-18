//uri == component 매칭
import Home from '../components/home.js'
import About from '../components/about.js'
import Contact from '../components/contact.js'
import ContactByNo from '../components/contactByNo.js'
const router = new VueRouter({
    routes: [
        {path: '/', component : Home},
        {path: '/home', name: 'home', component : Home},
        {path: '/about', name: 'about', component : About},
        {path: '/contact',
        name: 'contact', 
            component : Contact, 
            children: [{path: ':no', component : ContactByNo}]
        },
        // {path: '/contact/:no', component : ContactByNo}
    ]
})

export default router;