<template>
  <div class="home-content">
    <div class="blabla flex">
      <div class="logo-home" />
      <div>
        <!-- <div class="text-find-hotel">
          <b>{{datahome.title}}</b>
        </div>
        <div>{{datahome.text}}</div> -->
      </div>
    </div>
    <div class="flex search-filters">
      <div class="search-filter search-text">
        <div class="search-img-logo" />
        <input class="search-input-text" type="search" :placeholder="translator.destination_placeholder[language]"/>
      </div>
      <div class="flex search-filter">
        <div class="search-img-calandar" />
        <div>
          <div class="search-date-text">{{translator.start_date_description[language]}}</div>
          <input type="date" />
        </div>
        <div>
          <div class="search-date-text">{{translator.end_date_description[language]}}</div>
          <input type="date" />
        </div>
      </div>
      <button class="search-filter">
        <div class="search-img-chamber" />
          <div v-on:click="displayRoom">
          <div>{{translator.room_display[language]}}</div>
          <b>
            <div>{{ translator.menu_list[language][0] }}</div> 
          </b>
        </div>
        <div id="roomList" ref="roomList" class="hidden">
          <div v-for="room_list in translator.menu_list[language]" :key="room_list.key" v-on:click="room=room_list">
            <img :class="room_list" />
            {{room_list}}
          </div>
        </div>
      </button>
      <button class="search-btn">
        <div>{{translator.search[language]}}</div>
        <div class="icon-search"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    translator: Object
  },
  data: function(){
        return {
            language : "fr"
        }
    },
  methods: {
    displayRoom: function() {
      this.$refs.roomList.classList.toggle("hidden");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-home{
    background-image: url('../assets/imgs/logo.png');
    width: 180px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 10px;
}
.home-content{
    margin: 100px auto 0;
}
.home-content > div{
    width: 100%;
    justify-content: center;
}
.text-find-hotel{
    font-size: 30px;
}
.search-img-logo{
    background-image: url('../assets/imgs/loupe.png');
}
.search-img-calandar{
    background-image: url('../assets/imgs/calandar.png');
    
}
.search-img-chamber{
    background-image: url('../assets/imgs/chamber.png');
    
}
.search-img-logo, .search-img-calandar, .search-img-chamber{
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 5px;
}
.search-date-text{
    padding: 5px 20px 0;
    font-size: 12px;
}
.search-btn{
    background-color: #007fad;
    width: 100px;
    height: 36px;
    color: white;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-filter{
    border: solid 1px black;
    border-radius: 2px;
    background-color: rgb(255,255,255);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    margin: 5px;
    flex-shrink: 0;
}
.search-text{
    flex-basis: 300px;
    flex-shrink: 1;
}
#roomList{
    position: absolute;
    border: solid 1px gray;
    padding: 5px;
    border-radius: 5px;
    right: 32%;
}
#roomList>*{
    padding: 5px;
}
.icon-search{
  background-image: url("../assets/imgs/loupe_white.png");
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  display: none;
}
@media (max-width: 720px){
  .logo-home{
    display: none;
  }
  .icon-search{
    display: flex;
  }
  .search-btn{
    width: 40px;
  }
  .search-btn > div:first-child{
    display: none;
  }
  @media (max-width: 540px){
    .search-text{
      flex-basis: 100%;
    }
    .search-input-text{
      width: 100%;
    }
    .icon-search{
    display: none;
    }
    .search-btn{
      width: 100%;
    }
    .search-btn > div:first-child{
      display: flex;
    }
    .search-filters{
      background-color: whitesmoke;
      flex-wrap: wrap;
    }
  }
}
</style>
