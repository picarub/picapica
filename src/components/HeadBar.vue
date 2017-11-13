<template>
 <header class="header">
  <div class='header-sub'>
   <div class="row header-row">

     <div class="col-50 sm-35 left logo">
       <a href='/jpop'><img class='hvr-grow logo-img' src="/r/l.png"/></a>
     </div>

     <search c="sm-30 center invisible-xs" s='padding:.1em .75em 0 0'/>

     <div class="col-50 sm-35 right header-menu">
        <div class="sm-30 invisible-xs"></div>
        <div class="col-50 sm-35">
          <router-link to='music' class="menu-font">
          	<img class='hvr-grow img-menu' src='/r/maru.png'/>听音乐
          </router-link>
        </div>
        <div class="col-50 sm-35">
          <router-link to='idolpost' class="menu-font">
          	<img class='hvr-grow img-menu' src='/r/5.png'/>看PO文
          </router-link>
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

<style scoped>
.header {
 position: fixed;
 left:0;
 right: 0;
 margin: 0 auto;
 width: 100%;
 background: #fff; 
 text-align: center;
 border-bottom: solid 1px #ddd;
 z-index: 99999;
}

.header-sub {
  max-width:900px;
  height: 3.5em;
  margin: 0 auto;
  background: #fff;
  text-align: center;
}

.header-row {
  justify-items:center;
  height: 3.5em;
}
.header-menu {
  padding-top:.2em;
  padding-right: .75em;
  display: flex;
  align-items: center;
}
.logo {
  padding-top: .3em;
  padding-left: .5em;
}
.logo-img { height: 3em; }
.img-menu { height:2.75em; }
.menu-font {
	color:#555;
	overflow: hidden;
  white-space: nowrap;
}
</style>