<template>
  <div id="app">
    <heading></heading>
   <router-view/>
    <footing></footing>
    
  </div>
</template>

<script>
import heading from './components/public/heading'
import footing from './components/public/footing'
import index from './views/index'
export default {
  name: 'App',
  components:{
  	heading,footing,index
  },
	created(){
		// alert(this.)
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	
}
</style>
