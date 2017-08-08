<template>
	<Menus :Infos="Infos"></Menus>
</template>

<script>
	import Menus from '../../componets/header.vue'	
	/*import Vue from 'vue'
	Vue.component('menus', {
	  	functional: true,
	  	render:function(createElement, context){
	  		function header(){
	  			console.log(context);
	  			return Menus;
	  		}
	  		return createElement(
	  			header()
	  		)
	  	}
	});*/
	export default{
		data(){
			return{
				Infos:{},
				a:'aaa'
			}
		},
		created(){
			this.Infos = {
				name:'yoto',
				age:'22'
			}
		},
		components:{
			Menus
		}
	}
</script>