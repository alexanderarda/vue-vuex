<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <ShowPost/>
    <HelloWorld msg="Hello Vue in CodeSandbox!"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ShowPost from "./components/ShowPost";

export default {
  name: "App",
  components: {
    HelloWorld,
    ShowPost
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
