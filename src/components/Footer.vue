<template>
    <footer>
        cpnvago
    </footer>
</template>

<script>
export default {
  name: "top-menu",
  props: {},
  data: () => {
    return { language: "" };
  },
  methods: {
    displayMenuList: function() {
      this.$refs.menuList.classList.toggle("hidden");
    },
    displayLanguageList: function() {
      this.$refs.languageList.classList.toggle("hidden");
    },
    changelanguage: function(lang) {
      this.language = lang;
      this.displayLanguageList();
    },
    openBurgerMenu: function() {
      this.$refs.contentMenu.style.left = 0;
    },
    closeBurgerMenu: function() {
      this.$refs.contentMenu.style.left = "100%";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>
