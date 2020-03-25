<template>
  <div class="footer-content">
    <select v-on:change="changeCountry($event)">
        <option :selected="index == country" v-for="(value,index) in countries" :key="index" class="option" :value="index">{{index}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {
    countries: Object,
    country: String,
  },
  methods:  {
      changeCountry: function(country) {
      this.$emit('countryset', country.target.value);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
