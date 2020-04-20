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
//modules
import axios from "axios";

//components
import TopMenu from "./components/TopMenu.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";

const components = {
  TopMenu,
  Home,
  Footer
};

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
  async created() {
    try {
      //get data before to create component (theory)
      const currencies = await axios.get("http://localhost:3000/currencies");
      const countries = await axios.get("http://localhost:3000/countries");
      const translator = await axios.get("http://localhost:3000/translator");
      this.currencies = currencies.data;
      this.countries = countries.data;
      this.translator = translator.data;
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    langUpdate: function(lang) {
      this.language = lang;
    },
    countryUpdate: function(country) {
      this.country = country;
      this.langUpdate(this.countries[this.country].default_language);
    }
  }
};
</script>
<style lang="css">
@import "./assets/styles/style.css";
</style>
