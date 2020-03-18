<template>
  <div id="app">
    <!--top menu -->
    <top-menu :datamenu="datamenu"/>
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

import Menu from '../data/header'

export default {
  name: "App",
  router,
  components,
  data (){
  return {
      datamenu:Menu
  }}
};

</script>
<style lang="css">
@import './assets/styles/style.css';
</style>
