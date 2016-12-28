<template>
	<div>
		<h1>name:{{name}}</h1>
		<h3>age:{{age}}</h3>
		<p>my favorite is:</p>
		<ol>
			<li v-for='fav in favs'>
				{{fav}}
			</li>
		</ol>
		<section v-on:mouseover='over'>	
			<input ref='input' v-model='msg'></input>{{msg}}
		</section>

		<list v-bind:citys='citys'>

		</list>
	</div>
</template>

<script>
	import Vue from 'vue';
	Vue.component('list', {
		props:['citys'],
		template: "<ol><li v-for='city in citys'>The city name is: {{city.name}}</li></ol>"
	});
	export default{
		data(){
			return {
				name:'yoto',
				age:'22',
				favs:['sing','run','swimming'],
				msg:'hello',
				citys:[
					{name:'sicuan'},
					{name:'guangdong'},
					{name:'beijing'},
				]
			}
		},
		methods:{
			over:function(){
				alert('input value is:'+this.$refs.input.value);
			}
		}
	}
</script>

<style>
	h1{
		color:red;
	}
	h3{
		color:blue;
	}
	span{
		color:gray;
	}
</style>