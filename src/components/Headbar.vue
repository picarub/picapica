<template>
 <header class="header">
  <div class='hb'>
  <div class="hbb row" style="justify-items:center;height: 3.5em">
     <div class="col-6 sm-4 left" style='padding:.3em 0 0 .5em'>
       <router-link to='/music'><img class='hvr-grow' src="/r/l.png" style="height: 3em"/></router-link>
     </div>
     <search c="sm-4 center invisible-xs" s='padding:.1em .75em 0 0'/>
     <div class="col-6 sm-4 right" style="padding:.4em .5em 0 0">
      <div style="display: flex;align-items: center;">
        <div class="col-3 sm-6"></div>
        <div class="col-3 sm-2"><router-link to='/idolpost'><img class='hvr-grow' src='/r/5.png' style='height:2.5em'/></router-link></div>
        <div class="col-3 sm-2"><router-link to='/mv'><img class='hvr-grow' src='/r/maru.png' style='height:2.5em'/></router-link></div>
        <div class="col-3 sm-2"><router-link to='/video'><img class='hvr-grow' src='/r/sun5.png' style='height:2.5em'/></router-link></div>
      </div>
     </div>
   </div>
  </div>
 </header>
</template>

<script>
import Search from './Search.vue'
export default {
 name: 'headbar',
 data () {
  return {
    msg: 'non'
  }
 },
 components: { Search }
}
</script>


