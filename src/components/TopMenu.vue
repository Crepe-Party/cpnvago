<template>
  <div class="top-menu">
    <header class="flex">
      <div class="logo-menu" />
      <div v-on:click="openBurgerMenu" class="burger-menu">Menu</div>
      <div id="contentMenu" ref="contentMenu" class="content-menu flex">
        <div class="flex head-burger-menu">
          <div v-on:click="closeBurgerMenu" class="close-menu hidden">&lt;</div>
          <div class="title-menu">{{translator.menu_button}}</div>
        </div>
        <button class="btn-header">{{translator.menu_login_button}}</button>
        <div>
          <button v-on:click="displayMenuList" class="btn-header btn-menu">{{translator.menu_button}}</button>
          <div id="menuList" ref="menuList" class="hidden">
            <div v-for="list in translator.menu_list" :key="list.key">{{list}}</div>
          </div>
        </div>
        <div>
          <select>
            <optgroup label="Toutes les devises">
              <option :selected="currency.currency.toUpperCase() == country.default_currency.toUpperCase()" v-for="currency in currencies" :key="currency.id" class="option" :value="currency.currency">{{currency.text}}</option>
            </optgroup>
          </select>
        </div>
        <div>
          <select v-on:change="changeLanguage($event)">
            <option :selected="lang.id == country.default_language" v-for="lang in language" :key="lang.id" :value="lang.id">{{lang.language.toUpperCase()}}</option>
          </select>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "top-menu",
  props: {
    currencies: Array,
    translator: Object,
    language: Array,
    country: Object
  },
  methods: {
    displayMenuList: function() {
      this.$refs.menuList.classList.toggle("hidden");
    },
    changeLanguage: function(lang) {
      this.$emit('langSet', lang.target.value);
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

.logo-menu{
    background-image: url(../assets/imgs/logo.png);
    width: 180px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 10px;
}
.logo-menu{
    display: none;
}
.title-menu, .burger-menu{
    display: none;
}
.title-menu{
    font-weight: bolder;
    font-size: 20px;
    flex-grow: 5;
}
.burger-menu{
    align-items: center;
    padding: 0 20px;
}
.burger-menu:hover{
    background-color: lightgray;
    cursor: pointer;
}
.close-menu{
    font-size: 50px;
    color: gray;
    flex-grow: 1;
}
.close-menu:hover{
    background-color: lightgray;
    cursor: pointer;
}
header{
    width: 100%;
    justify-content: flex-end;
}
header > div{
    margin: 5px;
    align-items: baseline;
}
.head-burger-menu{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
.head-burger-menu>*{
    justify-content: center;
}
.btn-header{
    background-color: rgba(255,255,255,0);
    border: none;
}
.content-menu > *{
    margin: 0 5px;
}
#menuList{
    position: fixed;
    border: solid 1px gray;
    padding: 5px;
    border-radius: 5px;
    top: 55px;
}
#languageList{
    position: fixed;
    border: solid 1px gray;
    padding: 5px;
    border-radius: 5px;
    top: 55px;
    right: 10px;
}
#menuList>div, #languageList>div{
    cursor: pointer;
    font-size: 14px;
}
#menuList>div:hover, #languageList>div:hover{
    background-color: lightblue;
}
.display-menu{
    width: 100%;
}
@media (max-width: 720px){
    .logo-menu{
        display: flex;
    }
    .search-img-logo, .search-img-chamber{
        display: none;
    }
    .content-menu{
        position: absolute;
        left: 100%;
        width: 100%;
        height: 100%;
        background-color: rgb(255,255,255);
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .content-menu>*, #menuList>*{
        width: 100%;
        border-bottom: solid 1px lightgray;
        min-height: 50px;
        display: flex;
        align-content: center;
    }
    .title-menu, .burger-menu, .close-menu{
        display: flex;
    }
    .btn-menu{
        display: none;
    }
    #languageList{
        position: relative;
        top: 0;
        left: 0;
    }
    #menuList{
        display: flex;
        flex-wrap: wrap;
        position: initial;
        border: none;
        width: 100%;
    }
    .logo-menu{
      width: 120px;
      height: 40px;
    }    
}
</style>
