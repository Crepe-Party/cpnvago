<template>
  <div id="app">
    <!--top menu -->
    <top-menu @langset="langupdate" :country="country" :language="language" :currencies="currencies" :countries="countries" :translator="translator"/>
    <!-- content -->
    <home :translator="translator" :language="language"/>
    <!-- footer -->
    <Footer @countryset="countryupdate"  :countries="countries" :country="country"/>
  </div>
</template>

<script>


//components
import TopMenu from "./components/TopMenu.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";

const components = {
  TopMenu,
  Home,
  Footer
};

import countries from '../data/countries.json'
import currencies from '../data/currencies.json'
import translator from '../data/translator.json'

export default {
  name: "App",
  components,
  data (){
    return {
        language: "fr",
        country: "Switzerland",
        currencies,
        countries,
        translator
    }
  },
  methods: {
    langupdate: function(lang){
      this.language = lang;
    },
    countryupdate: function(country){
      this.country = country;
    }
  },
};
</script>
<style lang="css">
@import './assets/styles/style.css';
</style>
