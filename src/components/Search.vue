<template>
 <div :class='c' :style='s'>
  <div class="input">
   <i class='fa fa-search hvr-grow input-icon' @click.prevent='searchit'></i>
   <input class='search input-search' type='text':placeholder='placeholder' v-model='value' @keyup.enter.prevent='searchit'/>
  </div>
 </div>
</template>

<script>
export default {
 name: 'search',
 props: ['c','s'],
 data(){
  return {
   value: '',
   placeholder: '搜JPOP试听'
  }
 },
 created: function(){
  setInterval(()=>{   /* 每秒检测当前所在页面而设定input的placeholder属性，有待改进 */
   if (this.$route.path === '/music') { return this.placeholder = '搜JPOP试听' }
   if (this.$route.path === '/idolpost') { return this.placeholder = '搜爱豆po文' }
   if (this.$route.path === '/idol') { return this.placeholder = '搜爱豆' }
   if (this.$route.path === '/mv') { return this.placeholder = '搜JPOP MV' }
   if (this.$route.path === '/video') { return this.placeholder = '搜影片' }
   if (this.$route.path === '/drama') { return this.placeholder = '搜剧集' }
  },1000)
 },
 methods: {
  searchit: function(){   /* 获取当前input输入数据根据当前页面pathname进行request获取数据 */ 
   let q = this.value.trim()
   let loc = this.$route.path
   let url = ''
   if (loc==='/music') {  /* 歌曲 */
    url = '/a/find?keyword=' + q
    Vue.gofetch(url, 'SONG', 0 , 1)
    return this.value = ''
   }
   if (loc==='/idolpost') { /* PO文 */
    url = '/a/find?timeline=' + q
    Vue.gofetch(url, 'IDOL_POST',1)
    return this.value = ''
   }
   if (loc==='/idol') {
    url = '/a/find?member=' + q
    Vue.gofetch(url, 'IDOL')
    return this.value = ''
   }
   if (loc==='/mv') {
    url = '/a/find?yt=' + q
    Vue.gofetch(url, 'TUBE',1)
    return this.value = ''
   }
   if (loc==='/video') {
    url = '/a/find?dm=' + q
    Vue.gofetch(url, 'MOTION',1)
    return this.value = ''
   }
  }
 }
}

</script>

<style scoped>
.input {
  position: relative;
  margin:0 auto; 
  padding: .3em 0 0; 
  max-width: 16em; 
  width: 100%;
  height: 3em;
}

.input-icon {
  position: absolute;
  right: 0;
  margin: .75em 0 0;
  padding: 0;
  color:#bbb;
}

.input-search {
  margin: 0;
  padding: 0 .5em;
  width: 100%;
  height: 2.5em;
  border-radius:.5em;
  border:solid 1px #ccc; 
  -webkit-appearance:none;
}
</style>