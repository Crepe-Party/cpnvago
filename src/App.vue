<template>
  <div id="app">
    <!--top menu -->
    <top-menu
      @langSet="langUpdate"
      :country="country"
      :language="language"
      :currencies="currencies"
      :countries="countries"
      :translator="translator"
    />
    <!-- content -->
    <home :translator="translator" :language="language" />
    <!-- footer -->
    <Footer
      @countrySet="countryUpdate"
      :countries="countries"
      :country="country"
      :translator="translator"
      :language="language"
    />
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

import axios from "axios";
// import countries from "../data/countries.json";
// import currencies from "../data/currencies.json";
// import translator from "../data/translator.json";

export default {
  name: "App",
  components,
  data() {
    return {
      language: "fr",
      country: "Switzerland",
      currencies: null,
      countries: null,
      translator: null
    };
  },
  beforeMount(){
    this.fetchData()
  },
  methods: {
    langUpdate: function(lang) {
      this.language = lang;
    },
    countryUpdate: function(country) {
      this.country = country;
      this.langUpdate(this.countries[this.country].default_language);
    },
    fetchData() {
      axios
        .get("http://localhost:3000/currencies")
        .then(res => (this.currencies = res.data));
      axios
        .get("http://localhost:3000/countries")
        .then(res => (this.countries = res.data));
      axios
        .get("http://localhost:3000/translator")
        .then(res => (this.translator = res.data));
    }
  }
};
</script>
<style lang="css">
@import "./assets/styles/style.css";
</style>
