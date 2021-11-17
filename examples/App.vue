<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
	<Demo />
	<z-card 
	imgSrc="course.png"
	summary="2021Android从零入门到实战(Kotlin版)"
	/>
	<z-card
	imgSrc="course.png"
	summary="2021Android从零入门到实战(Kotlin版)"
	>
		<template v-slot:footer>
			<div>this is a footer</div>
		</template>
	</z-card>
	
	<z-card
	imgSrc="course.png"
	:width="370"
	:imgHeight="90"
	>
		2021Android从零入门到实战(Kotlin版)
	</z-card>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
