<template>
  <div id="app">
    <div id="topMenu">
      <router-link to="/hello_world">Hello!</router-link>
       | 
      <router-link to="/home">Home!</router-link>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
//components
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/hello_world", component: HelloWorld },
  ]
});
export default {
  name: "App",
  router
};
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
