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
     <music-bar :playplay='playplay' :show='show'/>
     <footer style='color:#777'>(c) 2017 c.z.y.</footer>
    </div>
    <div class='sm-1 md-2 lg-3 invisible-xs visible-xl' style='margin:.8em 0;padding:0 1em'>
     <idol-post-tiny/>
    </div>
  </div>
</template>

<script>
import MusicBar from './MusicBar.vue'
import Search from './Search.vue'
import IdolPostTiny from './IdolPostTiny.vue'
export default {
 name: 'music-page',
 components: {
  MusicBar,
  Search,
  IdolPostTiny
 },
 beforeDestroy: function(){
  this.music.pause()   /* 转到其它页面时暂停播放 */
 },
 data() {
  return {
   volume: .4,
   show: Array(500).fill(false),  /* 歌曲播放提示动画，初始值为false不显示，歌曲列表数组总长度限制在500个 */
   playing: Array(500).fill(false), /* 歌曲是否在播放的状态，初始值长度为500，填充了 false 布尔值的数组 */
   music: new Audio()   /* HTML5 Audio组件 */
  }
 },
 methods: {
  playplay: function(s, i){
   if(!this.music.src || this.music.src !== s) { this.music.src = s }  /* 点击时初始化music的src属性 */
   this.music.volume = .38  /* 音量 */
   if (this.playing[i] === true) {  /* 如果点击时歌曲正在播放，所有歌曲的播放状态设为false，播放提示动画设为false，暂停播放音乐 */
    this.playing = Object.assign({}, this.playing, Array(500).fill(false))
    this.show = Object.assign({}, this.show, Array(500).fill(false))
    this.music.pause()
    console.log('stop')
    return
   }
   if (this.playing[i] === false) {   /* 如果点击时歌曲处于暂停状态，仅将当前歌曲的播放状态设为true，当前播放提示动画设为true，播放音乐 */
    this.playing = Object.assign({}, this.playing, Array(500).fill(false))
    this.show = Object.assign({}, this.show, Array(500).fill(false))
    this.$set(this.playing,i,true)
    this.$set(this.show,i,true)
    this.music.play()
    console.log('play')
    this.music.onended = () => {  /* 处理歌曲播放完成事件 */
     this.$set(this.playing,i,false)
     this.$set(this.show,i,false)
    }
    return
   }
  }
 }
}
</script>