var homePage = Vue.component('home-page', {
    data: function(){
        return {
            room : 'Chambre double'
        }
    },
    template: `
        <div class="home-content">
            <div class="blabla flex">
                <div class="logo-home"/>
                <div>
                    <div class="text-find-hotel"><b>Trouvez l’hôtel idéal et comparez les prix de différents sites Web</b></div>
                    <div>Essayez de rechercher une ville, un hôtel ou même un lieu connu.</div>
                </div>
            </div>
            <div class="flex search-filters">
                <div class="search-filter search-text">
                    <div class="search-img-logo"/>
                    <input class="search-input-text" type="search" placeholder="ex. : Barcelone">
                </div>
                <div class="flex search-filter">
                    <div class="search-img-calandar"/>
                    <div>
                        <div class="search-date-text">Arrivée</div>
                        <input type="date">
                    </div>
                    <div>
                        <div class="search-date-text">Départ</div>
                        <input type="date">
                    </div>
                </div>
                <button class="search-filter">
                    <div class="search-img-chamber"/>
                    <div v-on:click="displayRoom">
                        <div>Chambre</div>
                        <b><div>{{ room }}</div></b>
                    </div>
                    <div id="roomList" class="hidden">
                        <div v-on:click="room='Chambre simple'">
                            <img class="single">
                            Chambre simple
                        </div>
                        <div v-on:click="room='Chambre double'">
                            <img class="double">
                            Chambre double
                        </div>
                        <div v-on:click="room='Chambre familliales'">
                            <img class="family">
                            Chambres familliales
                        </div>
                        <div v-on:click="room='Chambre multiples'">
                            <img class="multiple">
                            Chambres multiples
                        </div>
                    </div>
                </button>
                <button class="search-btn">Chercher</button>
            </div>
        </div>
    `,
    methods: {
        displayRoom: function(){
            roomList.classList.toggle('');
        }
    }
})