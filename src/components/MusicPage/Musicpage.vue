<template>
  <div class='row page' style="justify-content:center;">
    <div class='sm-90 md-85 lg-80 center' style='max-width:900px'>
     <search c='visible-xs' s='padding:0 .75em .5em 0;'/>
     <music-bar :playplay='playplay' :show='show'/>
    </div>
  </div>
</template>

<script>
import MusicBar from './MusicBar.vue'
import Search from '../Search.vue'
export default {
 name: 'music-page',
 components: {
  MusicBar,
  Search
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