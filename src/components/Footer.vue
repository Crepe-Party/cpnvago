<template>
  <div class="footer-content">
    <select>
        <option v-for="pays in countries" :key="pays.key" class="option" :value="pays.key">{{pays.key}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {
    coutries: Object,
    country: String,
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
