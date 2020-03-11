<template>
  <div class="top-menu">
    <header class="flex">
      <div class="logo-menu" />
      <div v-on:click="openBurgerMenu" class="burger-menu">Menu</div>
      <div id="contentMenu" ref="contentMenu" class="content-menu flex">
        <div class="flex head-burger-menu">
          <div v-on:click="closeBurgerMenu" class="close-menu hidden">&lt;</div>
          <div class="title-menu">Menu</div>
        </div>
        <button class="btn-header">Se connecter</button>
        <div>
          <button v-on:click="displayMenuList" class="btn-header btn-menu">Menu</button>
          <div id="menuList" ref="menuList" class="hidden">
            <div>Consultés récemment</div>
            <div>Aperçu - Réservation</div>
            <div>Moyens de paiement</div>
          </div>
        </div>
        <div>
          <select>
            <optgroup label="Devises principales">
              <option class="option" value="EUR">EUR - Euro</option>
              <option class="option" value="GBP">GBP - Livre sterling</option>
              <option class="option" value="USD">USD - Dollar américain</option>
            </optgroup>
            <optgroup label="Toutes les devises">
              <option class="option" value="AED">AED - Dirham des E.A.U</option>
              <option class="option" value="ARS">ARS - Peso argentin</option>
              <option class="option" value="AUD">AUD - Dollar australien</option>
              <option class="option" value="AZN">AZN - Manat azerbaïdjanais</option>
              <option class="option" value="BGN">BGN - Lev bulgare</option>
              <option class="option" value="BHD">BHD - Dinar bahreïni</option>
              <option class="option" value="BRL">BRL - Réal brésilien</option>
              <option class="option" value="CAD">CAD - Dollar canadien</option>
              <option class="option" value="CHF" selected>CHF - Franc suisse</option>
              <option class="option" value="CLP">CLP - Peso chilien</option>
              <option class="option" value="CNY">CNY - Yuan chinois</option>
              <option class="option" value="COP">COP - Peso colombien</option>
              <option class="option" value="CZK">CZK - Couronne tchèque</option>
              <option class="option" value="DKK">DKK - Couronne danoise</option>
              <option class="option" value="DZD">DZD - Dinar algérien</option>
              <option class="option" value="EGP">EGP - Livre égyptienne</option>
              <option class="option" value="EUR">EUR - Euro</option>
              <option class="option" value="GBP">GBP - Livre sterling</option>
              <option class="option" value="HKD">HKD - Dollar Hong Kong</option>
              <option class="option" value="HRK">HRK - Kuna croate</option>
              <option class="option" value="HUF">HUF - Forint hongrois</option>
              <option class="option" value="IDR">IDR - Roupie indonésienne</option>
              <option class="option" value="ILS">ILS - Nouveau shekel israélien</option>
              <option class="option" value="INR">INR - Roupie indienne</option>
              <option class="option" value="JOD">JOD - Dinar jordanien</option>
              <option class="option" value="JPY">JPY - Yen japonais</option>
              <option class="option" value="KRW">KRW - Won sud-coréen</option>
              <option class="option" value="KWD">KWD - Dinar koweïtien</option>
              <option class="option" value="KZT">KZT - Tenge kazakh</option>
              <option class="option" value="LBP">LBP - Livre libanaise</option>
              <option class="option" value="MAD">MAD - Dirham marocain</option>
              <option class="option" value="MDL">MDL - Leu moldave</option>
              <option class="option" value="MXN">MXN - Peso mexicain</option>
              <option class="option" value="MYR">MYR - Ringgit malais</option>
              <option class="option" value="NGN">NGN - Naira nigérien</option>
              <option class="option" value="NOK">NOK - Couronne norvégienne</option>
              <option class="option" value="NZD">NZD - Dollar néo-zélandais</option>
              <option class="option" value="OMR">OMR - Rial omanais</option>
              <option class="option" value="PEN">PEN - Nuevo sol péruvien</option>
              <option class="option" value="PHP">PHP - Peso philippin</option>
              <option class="option" value="PLN">PLN - Zloty polonais</option>
              <option class="option" value="QAR">QAR - Riyal qatari</option>
              <option class="option" value="RON">RON - Leu roumain</option>
              <option class="option" value="RSD">RSD - Dinar serbe</option>
              <option class="option" value="RUB">RUB - Rouble russe</option>
              <option class="option" value="SAR">SAR - Riyal saoudien</option>
              <option class="option" value="SEK">SEK - Couronne suédoise</option>
              <option class="option" value="SGD">SGD - Dollar de Singapour</option>
              <option class="option" value="THB">THB - Baht thaïlandais</option>
              <option class="option" value="TND">TND - Dinar tunisien</option>
              <option class="option" value="TRY">TRY - Livre turque</option>
              <option class="option" value="TWD">TWD - Nouveau dollar taïwanais</option>
              <option class="option" value="UAH">UAH - Hyrvnia ukrainien</option>
              <option class="option" value="USD">USD - Dollar américain</option>
              <option class="option" value="UYU">UYU - Peso uruguayen</option>
              <option class="option" value="VND">VND - Dong vietnamien</option>
              <option class="option" value="ZAR">ZAR - Rand sud-africain</option>
            </optgroup>
          </select>
        </div>
        <div>
          <button v-on:click="displayLanguageList" class="btn-header">{{ language }}</button>
          <div id="languageList" class="hidden">
            <div v-on:click="changelanguage('DE')">DE - Deutsh</div>
            <div v-on:click="changelanguage('FR')">FR - Français</div>
          </div>
        </div>
      </div>
    </header>
  </div>
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

.logo-menu, .logo-home{
    background-image: url('../assets/imgs/logo.png');
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
    .logo-home, .search-img-logo, .search-img-chamber{
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
}
</style>
