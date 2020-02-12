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
                    <input type="search" placeholder="ex. : Barcelone">
                </div>
                <div class="flex search-filter">
                    <div>
                        <div>Arrivée</div>
                        <input type="date">
                    </div>
                    <div>
                        <div>Départ</div>
                        <input type="date">
                    </div>
                </div>
                <div class="search-filter">
                    <select>
                        <option>
                            <img class="single">
                            Chambre simple
                        </option>
                        <option>
                            <img class="double">
                            Chambre double
                        </option>
                        <option>
                            <img class="family">
                            Chambres familliales
                        </option>
                        <option>
                            <img class="multiple">
                            Chambres multiples
                        </option>
                    </select>
                </div>
                <button>Chercher</button>
            </div>
        </div>
    `
})