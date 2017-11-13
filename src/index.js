

/* import components */
import HeadBar from './components/HeadBar.vue'
import store from './store/store'
import MusicPage from './components/MusicPage/MusicPage.vue'
import IdolPost from './components/IdolPostPage/IdolPostPage.vue'


const Home = { template: "<div style='margin:1em auto;max-width:1200px;text-align:center;'><router-view></router-view><footer style='color:#777'>(c) 2017 picarub</footer></div>" }
const Default = { template: "<div class='page'>coming soon ...</div>" }


/* 路由 */ 
Vue.use(VueRouter)

const router = new VueRouter({
 mode: 'history',
 routes: [
  {path: '/', component: Home,
   children: [
    { path:'', component: Default },
    { path: 'music', component: MusicPage },
    { path: 'idolpost', component: IdolPost }
   ]	
  }
 ]
})

/* 自定义Vue全局方法 */ 
Vue.gofetch = (url, name, is_reverse, is_local_storage) => {
 if (window.fetch) {
  fetch(url).then(response => {
   return response.json()
  })
  .then(data => {
   if (data) {
 //   data = JSON.parse(data)
    if (is_local_storage) localStorage.setItem(name, JSON.stringify(data))
    if (is_reverse) {
     return data.reverse().forEach(e => {
      store.commit('ADD_'+name,e)
     })
    } 
    else {
     return data.forEach(e => {
      store.commit('ADD_'+name,e)
     })    
    }
   }
   else { console.log('no fetch data') }  
  })
 }
 else {
/*
  let xhr = new XMLHttpRequest()
  if (xhr != null) {
   xhr.onreadystatechange = stateChange
   xhr.open('GET', url, true)
   xhr.send()
  }
  else {
   alert('Not surport for current browser, update please.') 
  }
  function stateChange(){
   if (xhr.readyState == 4){
    if (xhr.status == 200 || xhr.status == 304) {
     console.log('Do Something')
    }
   }
  }
*/
  alert('Not surport for current browser, update please.')
 }     
}


/* 根组件 */
new Vue({
  store,
  router,
  components: { HeadBar },
  mounted: function(){
   if (localStorage.SONG && localStorage.SONG != '') {
    var songs = JSON.parse(localStorage.getItem('SONG'))
    songs.forEach(e => ( store.commit('ADD_SONG',e) ))
   } 
   else Vue.gofetch('/a/find?keyword=ok','SONG',0,1)   /* 组件挂载后从服务器获取数据 */
   Vue.gofetch('/a/find?timeline','IDOL_POST', 1)
//    this.$router.push('a/music') /* 转到 music 页面 */
  },
  template: `
   <div id='root'>
    <head-bar/>
    <router-view></router-view>
   </div>
  `
}).$mount('#root')




