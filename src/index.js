

/* import components */
import Headbar from './components/Headbar.vue'
import store from './store/store'
import Musicbox from './components/Musicbox.vue'
import Idolpost from './components/Idolpost.vue'
//import Idol from './vue/Idol.vue'
//import Tube from './vue/Tube.vue'
//import Motion from './vue/Motion.vue'

const Home = { template: "<div style='margin:1rem auto;max-width:1200px;text-align:center;'><router-view></router-view></div>" }
const Default = { template: "<div class='page'>coming soon ...</div>" }


/* setup router | 路由 */ 
Vue.use(VueRouter)

const router = new VueRouter({
 mode: 'history',  /* router working as on a web server */
 routes: [
  {path: '/', component: Home,
   children: [
    { path:'', component: Default },
     { path: 'music', component: Musicbox },
     { path: 'idolpost', component: Idolpost },
     { path: 'mv', component: Default }, /* This component is not ready for github */
     { path: 'video', component: Default }  /* This component is not ready for github */
   ]	
  }
 ]
})

/* custom Vue global functions | 自定义Vue全局方法 */
Vue.gofetch = (url, name, is_reverse) => {
 fetch(url).then(response => {
  return response.json()
 })
 .then(data => {
  if (data) {
//   data = JSON.parse(data)
   if (is_reverse) {
    return data.reverse().forEach(e => {
     store.commit('ADD_'+name,e)
    })
   } else {
    return data.forEach(e => {
     store.commit('ADD_'+name,e)
    })    
   }
  }  
 })       
}


/* setup root component | 根组件 */
new Vue({
  store,
  router,
  components: { headbar: Headbar },
  mounted: function(){
   /* get data from server when created */
   Vue.gofetch('/a/find?keyword=ok','SONG')
   Vue.gofetch('/a/find?timeline','IDOL_POST', 1)
   this.$router.push('music') 
  },
  template: `
    <div id='root'>
      <headbar/>
      <router-view></router-view>
    </div>
  `
}).$mount('#root')




