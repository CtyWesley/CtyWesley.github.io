<template>
  <div class="home">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <body>
<div id = "TitleDiv"  >
  <p id= "Title" style = "color: #fff">FestivalLife</p>
</div>
<div id = "LoginDiv" >
  <div id = "CenteredLogin" >
    <div>
      <label class="texter" for="email" style = "display: inline-block">Enter your Email:</label>
      <input class="regentry" type="email" id="email" name="email" style = "display: inline-block">
    </div>
    <div style="height: 5px"></div>
    <div>
    
      <label class="texter" for="email" style = "display: inline-block">Enter your Password:</label>
      <input class="regentry" type="email" id="regpass" name="email" style = "display: inline-block">
    </div>
    
    <div id = "butcen">
    <button class ="button" id = "regenter" style="margin:auto;" 
    v-on:click="reverseMessage">{{Register}}</button>
    </div>
  </div>
</div>
</body>
    
  </div>
</template>


<style>
  @import '../assets/styles/thisbase.css';
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
