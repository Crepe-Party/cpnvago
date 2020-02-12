var homePage = Vue.component('home-page', {
    template: `
        <div class="home-content">
            <div class="blabla flex">
                <div class="logo"/>
                <div>
                    <div><b>Trouvez l’hôtel idéal et comparez les prix de différents sites Web</b></div>
                    <div>Essayez de rechercher une ville, un hôtel ou même un lieu connu.</div>
                </div>
            </div>
            <div class="flex">
                <div class="search-filter">
                    <div class="search-img-logo"/>
                    <input type="search" placeholder="ex. : Barcelone">
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
                    <div>
                        <div>Chambre</div>
                        <b><div>Chambre double</div></b>
                    </div>
                    <div class="hidden">
                        <div>
                            <img class="single">
                            Chambre simple
                        </div>
                        <div>
                            <img class="double">
                            Chambre double
                        </div>
                        <div>
                            <img class="family">
                            Chambres familliales
                        </div>
                        <div>
                            <img class="multiple">
                            Chambres multiples
                        </div>
                    </div>
                </button>
                <button class="search-btn">Chercher</button>
            </div>
        </div>
    `
})