<template>
 <div>  
  <div v-for='po in list' style='background: #fff;border:solid 1px #e6e6e6; border-bottom:0'>
   <div style='display: flex; width: 100%; align-items: center;padding: .5em;margin: .5em 0'>
	<a target='_blank' :href='po.twitter'>
	 <img :src='po.icon' class='circle' style='max-width: 32px' />
	</a>
	<a target='_blank' :href='po.twitter' style='color: #000;'>&nbsp;&nbsp;{{po.name}}</a>	 	 
   </div>
   <div style='font-size: .9em;padding: .5em;text-align: left'>{{po.title}}</div>
   <div style='color:#ccc;font-size: .75em;text-align: left;padding: .5em'>{{timetonow(po.post_date)}}</div><br/>	 
  </div>
 </div>
</template>

<script>
export default {
 name:'idolposttiny',
 data() {
 	return {
 	 list: this.$store.getters.ALL_IDOL_POST,
 	 now: moment()
 	}
 },
 methods: {
 	timetonow: function(t){
 	 return moment(t).from(this.now)
 	}
 }
}
</script>