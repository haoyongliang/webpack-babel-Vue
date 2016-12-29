<template>
	<h1>welcome Vue</h1>
	<span @click='change' v-text="message"></span>
</template>
<script>
	export default {
		data(){
			return{
				message:"Hinihaoo"
			}
		},
		methods:{
			change(){
				this.message = 'hehe'
			}
		}

	}
</script>
<style>
	body{
		background: #abc
	}
</style>