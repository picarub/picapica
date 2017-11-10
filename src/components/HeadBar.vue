<template>
 <header class="header">
  <div class='hb'>
   <div class="hbb row" style="justify-items:center;height: 3.5em">
     <div class="col-50 sm-35 left" style='padding:.3em 0 0 .5em'>
       <a href='/jpop'><img class='hvr-grow' src="/r/l.png" style="height: 3em"/></a>
     </div>
     <search c="sm-30 center invisible-xs" s='padding:.1em .75em 0 0'/>
     <div class="col-50 sm-35 right" style="padding:.4em .5em 0 0">
      <div style="display: flex;align-items: center;">
        <div class="sm-30 invisible-xs"></div>
        <div class="col-50 sm-35">
          <router-link to='/music'><img class='hvr-grow' src='/r/maru.png' style='height:2.75em'/>听音乐</router-link>
        </div>
        <div class="col-50 sm-35">
          <router-link to='/idolpost'><img class='hvr-grow' src='/r/5.png' style='height:2.75em'/>看PO文</router-link>
        </div>
      </div>
     </div>
   </div>
  </div>
 </header>
</template>

<script>
import Search from './Search.vue'
export default {
 name: 'head-bar',
 components: { Search }
}
</script>

