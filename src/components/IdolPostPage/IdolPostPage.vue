<template>
  <div class='row page justify-center'>
    <div class='sm-10 md-15 lg-20 invisible-xs visible-xl'></div>

    <div class='sm-80 md-70 lg-60 center'>
      <search c='visible-xs col-12' s='padding:.5em .5em 0 0'/>

      <div class="instagram">     
        <div v-for='po in list' :key='po.post_id' class='post-margin'>    
         <div class='post'>

           <div class='left row ins-icon'>
             <a target='_blank' :href='po.twitter'>
               <img :src='po.icon' class='circle ins-icon-img'/>
             </a>
             <a class="ins-name" target='_blank' :href='po.twitter'>&nbsp;&nbsp;{{po.name}}</a>                       
           </div>

           <div style='background:#fff'>
             <img class="w-100" :src='po.thumbnail_url' @dblclick='likeit(po.thumbnail_url)'/>
           </div>

           <div class='ins-content left'>
             <div v-html='htmlstr(po.content)'></div>
             <div class="ins-time">{{timetonow(po.post_date)}}</div>
             <hr class='visible-xs ins-seperate'/>        
           </div>
           
         </div>
      </div>

      </div>  
    </div>

    <div class='sm-10 md-15 lg-20 invisible-xs visible-xl'></div>
  </div>
</template>

<script>
import { urlrify } from '../../store/util'
import Search from '../Search.vue'
export default {
 name: 'idol-post',
 components: { search: Search },
 data() {
  return {
   orig: this.$store.getters.ALL_IDOL_POST,   /* 从vuex中获取的初始数组 */
   list: this.$store.getters.ALL_IDOL_POST,   /* 实际渲染数组，根据$watch自动变化 */
   now: moment()  /* 组件创建时时间 */
  }
 },
 watch: {
  orig: function(){   /* 去除重复的数据 */
   this.list = this.orig.filter(function(item, index, self) {
    return self.findIndex(function(t){ return t.post_id === item.post_id }) === index
   })
  }
 },
 methods: {
  timetonow: function(t){
   return moment(t).from(this.now)  /* 现在离t的时间距离 */
  },
  htmlstr: function(s){
   return urlrify(s) 	 /* 返回innerHTML数据 */
  },
  likeit: function(l){
   console.log('i like this picture : ' + l)
  }
 }
}
</script>

<style scoped>
.instagram {
  margin:0 auto; 
  max-width:600px;
}
.ins-icon {
  padding:1em 0 1em 1em;
  align-items:center;
  border-bottom: solid 1px #e9e9e9;
}

.ins-icon-img {
  max-width:32px;
  border:solid 1px #e9e9e9;
}

.ins-name {
  font-weight:bolder;
  color: #000;
}

.ins-content {
  padding: 1em;
}

.ins-time {
  color: #aaa;
  font-size: .75em;
}

.ins-seperate {
  margin-top:2.5em;
  width:100%;
  height:0;
  border:0; 
  border-top:solid 1px #e6e6ea;
}

</style>