<template>
  <div class='row page' style="justify-content:center;">
    <div class='sm-1 md-2 lg-3 invisible-xs visible-xl' style='margin:.75em 0;padding:0 1em;'>
     <div style='background: #fff;padding: .5em;border: solid 1px #eee'>
      <a href='/jpop'><img src='http://www.at-x.com/images/program/fdaccd90caae36823ecb25a795e9c5b2.jpg' style='width: 100%'></a>
      <a href='/jpop'><img src='http://umaru-ani.me/img/story/2zTjDheu/img01.jpg' style='width: 100%'></a>
     </div>
    </div>
    <div class='col-12 sm-10 md-8 lg-6 center'>
     <search c='col-12 visible-xs' s='padding:0 .75em .5em 0;'/>
     <musicbar :playplay='playplay' :show='show'/>
     <footer style='color:#777'>(c) 2017 c.z.y.</footer>
    </div>
    <div class='sm-1 md-2 lg-3 invisible-xs visible-xl' style='margin:.8em 0;padding:0 1em'>
     <idolposttiny/>
    </div>
  </div>
</template>

<script>
import Musicbar from './Musicbar.vue'
import Search from './Search.vue'
import Idolposttiny from './Idolposttiny.vue'
export default {
 name: 'musicbox',
 components: {
  Musicbar,
  Search,
  Idolposttiny
 },
 beforeDestroy: function(){
  this.music.pause()
 },
 data() {
  return {
   volume: .4,
   show: Array(500).fill(false),
   playing: Array(500).fill(false),
   img: Array(500).fill('/r/play.png'),
   music: new Audio()
  }
 },
 methods: {
  playplay: function(s, i){
   if(!this.music.src || this.music.src !== s) { this.music.src = s }
   this.music.volume = .38
   if (this.playing[i] === true) {
    this.playing = Object.assign({}, this.playing, Array(500).fill(false))
    this.show = Object.assign({}, this.show, Array(500).fill(false))
    this.music.pause()
    console.log('stop')
    return
   }
   if (this.playing[i] === false) {
    this.playing = Object.assign({}, this.playing, Array(500).fill(false))
    this.show = Object.assign({}, this.show, Array(500).fill(false))
    this.$set(this.playing,i,true)
    this.$set(this.show,i,true)
    this.music.play()
    console.log('play')
    this.music.onended = () => {
     this.$set(this.playing,i,false)
     this.$set(this.show,i,false)
    }
    return
   }
  }
 }
}
</script>