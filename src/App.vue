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
    { path: "/", component: Home, props: {currencies: currencies, countries: countries, translator: translator }},
    { path: "/home", component: Home, props: {currencies: currencies, countries: countries, translator: translator }},
    { path: "/hello_world", component: HelloWorld },
  ]
});

const components = {
  TopMenu
};

import countries from '../data/countries.json'
import currencies from '../data/currencies.json'
import translator from '../data/translator.json'

export default {
  name: "App",
  router,
  components,
  data (){
    return {
        countries,
        currencies,
        translator
    }
  }
};

console.log(countries, currencies, translator);

</script>
<style lang="css">
@import './assets/styles/style.css';
</style>
