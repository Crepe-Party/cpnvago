<template>
  <div id="app">
    <!--top menu -->
    <top-menu/>
    <!-- content -->
    <router-view/>
  </div>
</template>

<script>

import Vue from "vue";
import VueRouter from "vue-router";
//components
import TopMenu from "./components/TopMenu.vue";
//views
import HelloWorld from "./views/HelloWorld.vue";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/hello_world", component: HelloWorld },
  ]
});
const components = {
  TopMenu
};
export default {
  name: "App",
  router,
  components
};
</script>
<style lang="css">
@import './assets/styles/style.css';
</style>
