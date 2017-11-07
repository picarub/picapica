<template>
 <div class='row page' style="justify-content:center;">
  <div class='sm-1 md-2 lg-3 invisible-xs visible-xl'></div>
  <div class='col-12 sm-10 md-8 lg-6 center'>
   <search c='visible-xs col-12' s='margin:.5em 0 -1em 0'/>
   <transition-group appear tag='div' appear-active-class='magictime vanishIn' enter-active-class='magictime vanishIn' class='col-12' style='margin:0 auto; max-width:600px'>     
    <div v-for='po in list' :key='po.post_id' class='post-margin'> 
     <div class='post'>
      <div class='left row' style='align-items:center;padding:1em 0 1em 1em;border-bottom: solid 1px #e9e9e9'>
       <a target='_blank' :href='po.twitter'><img :src='po.icon' class='circle' style='max-width:32px;border:solid 1px #e9e9e9'/></a>
       <a target='_blank' :href='po.twitter' style='font-weight:bolder;color: #000'>&nbsp;&nbsp;{{po.name}}</a>                       
      </div>
      <div style='background:#fff'>
       <img :src='po.thumbnail_url' style='width:100%' @dblclick='likeit(po.thumbnail_url)'/>
      </div> 
      <div style='padding: 1em;' class='left'>
        <div v-html='htmlstr(po.content)'></div>
        <div style='color: #aaa;font-size: .75em'>
         {{timetonow(po.post_date)}}
        </div>
        <hr class='visible-xs' style='width:100%;height:0;border:0; border-top:solid 1px #e6e6ea;margin-top:2.5em'/>        
      </div>
     </div>
    </div>
   </transition-group>  
  </div>
  <div class='sm-1 md-2 lg-3 invisible-xs visible-xl'></div>
 </div>
</template>

<script>
import { urlrify } from '../store/util'
import Search from './Search.vue'
export default {
 name: 'idol-post',
 components: { search: Search },
 data() {
  return {
   orig: this.$store.getters.ALL_IDOL_POST,   /* 从vuex中获取的初始数组 */
   list: this.$store.getters.ALL_IDOL_POST,   /* 实际渲染数组，根据$watch自动变化 */
   now: moment()  /* 组件创建时时刻，即现在 */
  }
 },
 watch: {
  orig: function(){   /* avoid duplicate items | 去除重复的数据子集 */
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