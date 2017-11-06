
Vue.use(Vuex)


export default new Vuex.Store({
 state: {
  songs: [],
  idol_posts: [],
  idols: [],
  tubes: [],
  motions: []
 },
 getters: {
  ALL_SONG: state => (state.songs),
  ALL_IDOL_POST: state => (state.idol_posts),
  ALL_IDOL: state => (state.idols),
  ALL_TUBE: state => (state.tubes),
  ALL_MOTION: state => (state.motions)
 },
 mutations: {
  ADD_SONG(state, v) {
   state.songs.unshift(v)
  },
  DEL_SONG(state){
   state.songs = []
  },
  ADD_IDOL_POST(state, v) {
   state.idol_posts.unshift(v)
  },
  DEL_IDOL_POST(state){
   state.idol_posts = []
  },
  ADD_IDOL(state, v) {
   state.idols.unshift(v)
  },
  DEL_IDOL(state){
   state.idols = []
  },
  ADD_TUBE(state, v) {
   state.tubes.unshift(v)
  },
  DEL_TUBE(state){
   state.tubes = []
  },
  ADD_MOTION(state, v) {
   state.motions.unshift(v)
  },
  DEL_MOTION(state){
   state.motions = []
  }
 }
})