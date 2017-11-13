<template>
 <div class="margin-auto center">

  <transition-group appear tag='div' appear-active-class='animated flipInX' enter-active-class='animated flipInX' class="margin-auto">
   <div v-for='(ea, i) in list' :key='ea.songID' class='visible-xs rounded box-small'>
    <div class='row item-center'>

     <div class='col-25 cover-small' @click='playplay(ea.url, i)'> 
      <img v-if='ea.imgUrl' :src='ea.imgUrl' class='rounded img-cover w-100'/>
      <img v-else src='/r/5.png' class='rounded img-cover w-100'/>
      <div class='right icon-play'><i v-show='!show[i]' style='display: block' class='fa fa-play fa-2x'/></div>    
      <div v-if='show[i]' class='line-scale-party icon-playing'>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
      </div> 
     </div>

     <div class='col-75 left info-bar-small'>
      <div class="song-name">
        <a class="black" target='_blank' :href='ea.songUrl'>{{ea.songName}}</a>
      </div>
      <div class="ellipsis">
        <a class="gray-666" target='_blank' :href='ea.artistUrl'>{{ea.artist}}</a>
      </div>
      <div class="gray-aaa ellipsis">{{ea.albumName}}</div>
     </div>

    </div>
   </div>
  </transition-group> 

  <transition-group appear tag='div' appear-active-class='animated flipInX' enter-active-class='animated flipInX' class='row'>
   <div v-for='(ea, i) in list' :key='ea.songID' class='sm-33 md-25 lg-20 xl-20 invisible-xs' style='padding: .6em'>
    <div class="box-big">

     <div class='cover-big' @click='playplay(ea.url, i)'>       
      <img v-if='ea.imgUrl' :src='ea.imgUrl' class='rounded cover-big img-cover'/>
      <img v-else src='/r/5.png' class='rounded img-cover w-100'/>
      <div class='right icon-play'>
        <i v-show='!show[i]' style='display: block;' class='fa fa-play fa-3x'/>
      </div>  
      <div v-if='show[i]' class='line-scale-party icon-playing'>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
      </div>
     </div>

     <div class='left info-bar-big'>
      <div class="song-name">
        <a class="black" target='_blank' :href='ea.songUrl'>{{ea.songName}}</a>
      </div>
      <div class="ellipsis">
        <a class="gray-666" target='_blank' :href='ea.artistUrl'>{{ea.artist}}</a>
      </div>
      <div class="gray-aaa ellipsis">{{ea.albumName}}</div>
     </div>

    </div>
   </div>
  </transition-group> 
  
 </div>
</template>


<script>
export default {
 name: 'music-bar',
 props: ['playplay','show'],   /* 从父组件获取props */
 data(){
  return {
   orig: this.$store.getters.ALL_SONG,  /* 从vuex中获取的初始数组 */
   list: this.$store.getters.ALL_SONG  /* 实际渲染数组，根据$watch自动变化 */
  }
 },
 mounted: function(){
//  console.log(navigator.userAgent)
 },
 watch: {
  orig: function(){   /* 去除重复的数据子集 */
   this.list = this.orig.filter(function(item, index, self) {
    return self.findIndex(function(t){ return t.songID === item.songID }) === index
   })
  }
 }
}
</script>

<style scoped>
.box-small {
  margin:.6em .3em;
  background-color: #fff;
  box-shadow: .2em .2em .4em #c5c5c5;
}

.box-big {
  margin: .3em 0;
  padding:0;
  background-color: #fff;
  border-radius: .35em;
  box-shadow: .25em .25em .5em #c5c5c5
}

.cover-small {
  position:relative;
  margin-bottom:-.3em;
  overflow:hidden;
}

.cover-big {
  position:relative;
  width:100%;
  overflow:hidden;
}

.icon-play {
  position:absolute;
  right:.1em;
  bottom:.25em;
  width:50%;
  color: rgba(255,255,255,.9);
}

.icon-playing {
  position:absolute;
  right: .1em;
  bottom: .1em;
}

.info-bar-small { padding:0 1em; }
.info-bar-big {
  padding:.5em;
  height:7em;
}

.song-name {
  font-weight: bolder;
  font-size:1.1em;
}

.img-cover {
  width: 100%;
  transform: scale(1.0);
  -webkit-transition: transform 1s;
      -ms-transition: transform 1s;
     -moz-transition: transform 1s;
       -o-transition: transform 1s;
          transition: transform 1s;
}
.img-cover:hover {
  transform: scale(1.25);
}
</style>