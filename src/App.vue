<template>
  <div id="app">
    <!--top menu -->
    <top-menu
      @langSet="langUpdate"
      :country="country"
      :language="countryLanguages"
      :currencies="currencies"
      :translator="translator"
    />
    <!-- content -->
    <home :translator="translator"/>
    <!-- footer -->
    <Footer
      @countrySet="countryUpdate"
      :countries="countries"
      :translator="translator"
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
import Country from "./objects/country.js";
import Currency from "./objects/currency.js";
import Translator from "./objects/translator.js";
import Language from "./objects/language.js";

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
      defaultLanguage: 1,
      defaultCountry: 0,
      countryLanguages: [],
      country: null,
      languages: [],
      currencies: [],
      countries: [],
      translator: null
    };
  },
  async created() {
    try {
      //get data before to create component (theory)
      const currencies = await axios.get("http://localhost:3000/currencies");
      const countries = await axios.get("http://localhost:3000/countries");
      const languages = await axios.get("http://localhost:3000/languages");
      const translator = await axios.get("http://localhost:3000/translator/"+this.defaultLanguage);
      for (const currency in currencies.data) {
        this.currencies.push(new Currency(currencies.data[currency]));
      }
      for (const country in countries.data) {
        if(countries.data[country].id == this.defaultCountry){
          this.country = new Country(countries.data[country]);
        }
        this.countries.push(new Country(countries.data[country]));
      }
      for (const language in languages.data) {
        this.languages.push(new Language(languages.data[language]));
      }
      this.translator = new Translator(translator.data);
      this.countryLanguages = this.country.getLanguages(this.languages);
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    langUpdate: async function(lang) {
      const translator = await axios.get("http://localhost:3000/translator/"+lang);
        this.translator = new Translator(translator.data);
    },
    countryUpdate: async function(id) {
      const country = await axios.get("http://localhost:3000/countries/"+id);
      this.country = new Country(country.data);
      this.countryLanguages = this.country.getLanguages(this.languages);
      this.langUpdate(this.country.default_language);
    }
  }
};
</script>
<style lang="css">
@import "./assets/styles/style.css";
</style>
