<template>
 <div style='margin:0 auto;max-width: 640px;text-align:center'>
  <transition-group appear tag='div' appear-active-class='animated flipInX' enter-active-class='animated flipInX' style='margin:0 auto;padding:0;'>
   <div v-for='(ea, i) in list' :key='ea.songID' class='visible-xs' style='background-color: #fff;margin:.5em .3em;padding:0;border-radius:.35em;box-shadow: .2em .2em .4em #c5c5c5'>
    <div class='row' style='align-items:center'>
     <div class='col-3 sm-2 hvr-grow' style='position:relative;' @click='playplay(ea.url, i)'>
      <div class='right' style='position:absolute; width:50%;max-width:120px;right:.1em;bottom:.25em;color: rgba(255,255,255,.9);font-size: 2em'><i v-show='!show[i]' style='display: block' class='fa fa-play'/></div>    
      <div v-if='show[i]' class='line-scale-party' style='position:absolute;right: .1em;bottom: .1em'>
       <div></div><div></div><div></div><div></div>
      </div>  
      <img v-if='ea.imgUrl' :src='ea.imgUrl' class='rounded' style='width:100%;'/>
      <img v-else src='/r/5.png' class='rounded' style='width:100%;'/>
     </div>
     <div class='col-9 sm-10 left' style='padding:0 1em;'>
      <div class='col-12' style='font-weight: bolder;font-size:1.1em;'><a style='color: #000' target='_blank' :href='ea.songUrl'>{{ea.songName}}</a></div>
      <div class='col-12' style='[css.tof]'><a style='color: #666' target='_blank' :href='ea.artistUrl'>{{ea.artist}}</a></div>
      <div class='col-12' :style="'color:#aaa;'+[css.tof]">{{ea.albumName}}</div>
     </div>
    </div>
   </div>
  </transition-group> 

  <transition-group appear tag='div' appear-active-class='animated flipInX' enter-active-class='animated flipInX' class='row'>
   <div v-for='(ea, i) in list' :key='ea.songID' class='col-4 invisible-xs' style='padding: .6em'>
    <div style='margin: .3em 0;padding:0;background-color: #fff;border-radius: .35em;box-shadow: .25em .25em .5em #c5c5c5'>   
     <div class='hvr-grow' style='position:relative;' @click='playplay(ea.url, i)'>
      <div style='position:absolute; width:50%;max-width:100px;right:.1em;bottom:.25em;color: rgba(255,255,255,.9);font-size: 2em' class='right'><i v-show='!show[i]' style='display: block' class='fa fa-play'/></div>  
      <div v-if='show[i]' class='line-scale-party' style='position:absolute;right: .1em;bottom: .1em'>
       <div></div><div></div><div></div><div></div>
      </div>       
      <img v-if='ea.imgUrl' :src='ea.imgUrl' class='rounded' style='width:100%;'/>
      <img v-else src='/r/5.png' class='rounded' style='width:100%;'/>
     </div>
     <div class='left' style='padding:.5em;height:7em;'>
      <div style='font-weight: bolder;font-size:1.1em;'><a style='color: #000' target='_blank' :href='ea.songUrl'>{{ea.songName}}</a></div>
      <div :style='[css.tof]'><a style='color: #666' target='_blank' :href='ea.artistUrl'>{{ea.artist}}</a></div>
      <div :style="'color:#aaa;'+[css.tof]">{{ea.albumName}}</div>
     </div>
    </div>
   </div>
  </transition-group> 
  
 </div>
</template>


<script>
export default {
 name: 'musicbar',
 props: ['playplay','show'],
 data(){
  return {
   orig: this.$store.getters.ALL_SONG,
   list: this.$store.getters.ALL_SONG,
   stream: true, 
   css: {
    tof: 'white-space: nowrap;text-overflow: ellipsis;overflow: hidden;'
   }
  }
 },
 mounted: function(){
//  console.log(navigator.userAgent)
 },
 watch: {
  orig: function(){
   this.list = this.orig.filter(function(item, index, self) {
    return self.findIndex(function(t){ return t.songID === item.songID }) === index
   })
  }
 }
}
</script>