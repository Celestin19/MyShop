<template>
    <div class="HomePage">
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <title>Clockers Online</title>

    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

    <meta name="description" content="Cette page web est le site internet de notre boutique en 
    ligne vendant quelques unes des pieces les plus tendances du monde de la mode urban">
</head>

<body>
    <header>
        
        
        <div class="main2">
        <ul class="navbar">
            <a href="index." class="logo"><i class="ri-align-left" title="logo de gauche tete de page"></i></a>
            <li class="jetest"><a href="index3.html" class="active">HOME</a></li>
            <li><a href="index3.html">SHOP</a></li>
            <li><a href="index3.html">MAGAZINE</a></li>
        </ul>
        </div>
        <div class="main">
            <ul class="navbar2">
            <a href="#" class="user"><i class="ri-shopping-cart-2-fill" title="logo panier"></i></a>
            <RouterLink to="/login" class="btn btn-color px-5 mb-5 w-100 a">Login</RouterLink>
            <div class="bx bx-menu" id="menu-icon"></div>
            </ul>
        </div>
    
    </header>

    <main>

        <section class="test4">
        <div class="wrapper">
            
            <a href="#"><img src="./logoGallerie/loupe-arrondie.png" alt="je-test" class="dms-img" title="panier"></a>
            
                <div id="search-container">
                  <input
                    type="search"
                    id="search-input"
                    placeholder="Search"
                  />
                </div>
            
            <div id="products"></div>
        </div>

        <!-- filtre deroulant a cote de la search bar -->
        
        <div class="dropdown">
            <div class="select">
                <span class="selected">All</span>
                <div class="caret"></div>
            </div>
            <ul class="menu">
                <li>Hype</li>
                <li>High price</li>
                <li>Low price</li>
                <li>Best match</li>
            </ul>
        </div>
        </section>
        

        <!-- filtreeeeeeeeeeeeeeeeeeeeee   -->

    <nav class="articles">
 
    <ul class="articlesSquares">
        <ul class="topSquares">
            <ul class="square0">
                 <ul id="articleList">
                            <div class="filter-menu1">
                                <button class="button-hype" onclick="filterProduct('Best review')">Special</button>
                                <button class="button-high" onclick="filterProduct('Short')">StreetWear</button>
                                <button class="button-low" onclick="filterProduct('Low price')">Well Dressed</button>
                            </div>
                            <div class="results"></div>


                                    <div class="filter-menu2">
                                        <button class="button-top" onclick="filterProduct('Top')">Top</button>
                                        <button class="button-bottom" onclick="filterProduct('Bottom')">Bottom</button>
                                        <button class="button-shoes" onclick="filterProduct('Shoes')">Shoes</button>
                                    </div>
                                    <div class="results"></div>


                            <div class="filter-menu3">
                                <button class="button-blue" onclick="filterProduct('Blue')">Blue</button>
                                <button class="button-pink" onclick="filterProduct('Pink')">Pink</button>
                                <button class="button-black" onclick="filterProduct('Black')">Black</button>
                            </div>
                            <div class="results"></div>

                            
                        
                    <div class="card">
                                <h4>Price Range</h4>
                      
                            <div class="price-content">
                                <div>
                                    <label>Min</label>
                                    <p id="min-value">$10</p>
                                </div>
                      
                                <div>
                                    <label>Max</label>
                                    <p id="max-value">$500</p>
                                </div>
                            
                      
                            <div class="range-slider">
                                <input type="range" class="min-price" value="100" min="10" max="500" step="10" aria-label="Prix minimum">
                                <input type="range" class="max-price" value="250" min="10" max="500" step="10" aria-label="Prix maximum">
                            </div>
                        </div>
                    </div>
                      

                </ul>
            </ul>
                    <!-- fin filtreeeeeeeeee -->
                    <ul class="square1">
                        <ul class="square1Part1">
                            <li><img src="./photosGallerie/paireNewBalance.png" alt="articles"></li>
                            <li>New Balance 2002R</li>
                            <li>shoes</li>
                            <ul class="starsChaine">
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileBlanche.png" alt="stars"></li>
                            </ul>
                        </ul>
                        <ul class="squarePart">
                            <li>$500</li>
                            <li><br></li>
                            <li><img src="./logoGallerie/ajouter-au-panier.png" alt="addToCart"></li>
                        </ul>
                    </ul>
                    <ul class="square2">
                        <ul class="square2Part1">
                            <li><img src="./photosGallerie/shortCarrhart.png" alt="articles"></li>
                            <li>Carhartt</li>
                            <li>bottom</li>
                            <ul class="starsChaine">
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileBlanche.png" alt="stars"></li>
                            </ul>
                        </ul>
                    <ul class="squarePart">
                        <li>$100</li>
                        <li><br></li>
                        <li><img src="./logoGallerie/ajouter-au-panier.png" alt="addToCart"></li>
                    </ul>
                    </ul>
                    <ul class="square3">
                        <ul class="square3Part1">
                            <li><img src="./photosGallerie/pullNocta.png" alt="articles"></li>
                            <li>Hoodie Nike x Nocta</li>
                            <li>top</li>
                            <ul class="starsChaine">
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileBlanche.png" alt="stars"></li>
                            </ul>
                        </ul>
                        <ul class="squarePart">
                            <li>$130</li>
                            <li><br></li>
                            <li><img src="./logoGallerie/ajouter-au-panier.png" alt="addToCart"></li>
                        </ul>
                    </ul>
                </ul>
                <ul class="bottomSquares">  
                    <ul class="square4">
                        <ul class="square4Part1">
                            <li><img src="./photosGallerie/pantalonCorteiz.png" alt="articles"></li>
                            <li>Cargo Corteiz</li>
                            <li>bottom</li>
                            <ul class="starsChaine">
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileBlanche.png" alt="stars"></li>
                            </ul>
                        </ul>
                        <ul class="squarePart">
                            <li>$90</li>
                            <li><br></li>
                            <li><img src="./logoGallerie/ajouter-au-panier.png" alt="addToCart"></li>
                        </ul>
                    </ul>
                    <ul class="square5">
                        <ul class="square5Part1">
                            <li><img src="./photosGallerie/pullFlower.png" alt="articles"></li>
                            <li>Hoddie Denim Tears</li>
                            <li>top</li>
                            <ul class="starsChaine">
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileBlanche.png" alt="stars"></li>
                            </ul>
                        </ul>
                        <ul class="squarePart">
                            <li>$350</li>
                            <li><br></li>
                            <li><img src="./logoGallerie/ajouter-au-panier.png" alt="addToCart"></li>
                        </ul>
                    </ul>
                    <ul class="square6">
                        <ul class="square6Part1">
                            <li><img src="./photosGallerie/paireBirk.png" alt="articles"></li>
                            <li>Birkenstock Boston</li>
                            <li>shoes</li>
                            <ul class="starsChaine">
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileBlanche.png" alt="stars"></li>
                            </ul>
                        </ul>
                        <ul class="squarePart">
                            <li>$160</li>
                            <li><br></li>
                            <li><img src="./logoGallerie/ajouter-au-panier.png" alt="addToCart"></li>
                        </ul>
                    </ul>
                    <ul class="square7">
                        <ul class="square7Part1">
                            <li><img src="./photosGallerie/teeShirt.png" alt="articles"></li>
                            <li>The Kooples "what is ?"</li>
                            <li>top</li>
                            <ul class="starsChaine">
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileNoire.png" alt="stars"></li>
                                <li><img src="./logoGallerie/etoileBlanche.png" alt="stars"></li>
                            </ul>
                        </ul>
                        <ul class="squarePart">
                            <li>$105</li>
                            <li><br></li>
                            <li><img src="./logoGallerie/ajouter-au-panier.png" alt="addToCart"></li>
                        </ul>
                    </ul>
                </ul>
            </ul>
    </nav>
    </main>
    <footer>
        <ul class="pagination" id="pagination">
            <li><a href="#" data-page="1">1</a></li>
            <li><a href="index3.html" data-page="2">2</a></li>
            <li><a href="#" data-page="3">3</a></li>
            <li><a href="#" data-page="4">4</a></li>
            <li><a href="#" data-page="5">5</a></li>
            <li><a href="#" data-page="6">6</a></li>
            <li><a href="#" data-page="7">7</a></li>
            <li><a href="#" data-page="8">8</a></li>
            <li><a href="#" data-page="9">9</a></li>
            <li><a href="#" data-page="10">10</a></li>
            <li><a href="#" data-page="next">&rarr;</a></li>
        </ul>
    </footer>
</body>
</html>
    </div>
</template>

<style>
    * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  list-style: none;
  border: none;
}

:root {
  --bg-color: #222327;
  --text-color: #fff;
  --main-color: #29fd53;
}

body {
  min-height: 100vh;
  font-family: "Open Sans", sans-serif;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
}

header {
  width: 100%;
  top: 0;
  right: 0;
  left: 0px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 12%;
  transition: all 0.5s ease;
}

.logo {
  display: flex;
  align-items: center;
}

.logo i {
  color: var(--bg-color);
  font-size: 28px;
  margin-right: 3px;
}

.logo span {
  color: var(--bg-color);
  font-size: 1.7rem;
  font-weight: 600;
}

.navbar {
  display: flex;
  align-items: center;
  margin-left: -50%;
}

.navbar2 {
  display: flex;
  justify-content: space-around;
}

.navbar a {
  color: var(--bg-color);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 20px;
}

.navbar a:hover {
  color: grey;
}

.main {
    display: flex;
    margin-right: -150px;
}

.main2 {
  display: flex;
  align-items: center;
}

.main a {
  margin-right: 25px;
  margin-left: 10px;
  color: var(--bg-color);
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.5s ease;
}

.wrapper {
  position: relative;
  width: 95%;
  margin: 0 auto;
  margin-top: 1%;
}

#search-container {
  width: 1400px; 
  padding: 10px; 
  margin: 1em 0;
  padding-left: 100px;
}

.dms-img{
  position: absolute;
  top: 30px;
  left: 45px;
  width: 40px;
}

#search-container input {
  background-color: transparent;
  width: 60%;
  border-bottom: 2px solid #110f29;
  padding: 1em 0.3em;
}

#search-container input:focus {
  border-bottom-color: rgb(209, 209, 209);
}

#search-container button {
  padding: 1em 2em;
  margin-left: 1em;
  background-color: var(--bg-color);
  color: var(--text-color);
  border-radius: 5px;
  margin-top: 0.5em;
}

.active {
  color: #ffffff;
}

#products {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 1.5em;
  padding: 2em 0;
}

.card {
  background-color: #ffffff;
  max-width: 20em;
  margin-top: 1em;
  padding: 1em;
  border-radius: 5px;
}

.image-container {
  text-align: center;
}

img {
  max-width: 100%;
  object-fit: contain;
}

.container {
  padding-top: 1em;
  color: #110f29;
}

.container h5 {
  font-weight: 500;
}

@media screen and (max-width: 720px) {
  img {
    max-width: 100%;
    object-fit: contain;
    height: 10em;
  }
  .card {
    max-width: 10em;
    margin-top: 1em;
  }
  #products {
    grid-template-columns: auto auto;
    grid-column-gap: 1em;
  }
}

/*filtre deroulant a cote de la barre de recherche */

.dropdown * {
  box-sizing: border-box;
}

.select {
  background: #2a2f3b;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  padding: 1em;
  cursor: pointer;
  transition: background 0.3s;
}

.select-clicked {
  border: 2px #26489a solid;
  box-shadow: 0 0 0.8em #26489a;
}

.select:hover {
  background: #323741;
}

.caret {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #fff;
  transition: 0.3s;
}

.caret-rotate {
  transform: rotate(180deg);
}

.menu {
  list-style: none;
  padding: 0.2em 0.5em;
  background: #323741;
  border: 1px #363a43 solid;
  box-shadow: 0 0.5em 1em rbga(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 3em;
  left: 40%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
}

.menu li{
  padding: 0.7em 0.5em;
  margin: 0.3em 0;
  border-radius: 0.5em;
  cursor: pointer;
}

.menu li:hover{
  background: #2a2d35;
}

.active{
  background: 23242a;
}

.menu-open{
  display: block;
  opacity: 1;
}


/*4*/

.user {
  display: flex;
  align-items: center;
}

.user i {
  color: var(--bg-color);
  font-size: 28px;
  margin-right: 7px;
}

.main a:hover {
  color: grey;
}

#menu-icon {
  font-size: 35px;
  color: var(--bg-color);
  cursor: pointer;
  z-index: 10001;
  display: none;
}

@media (max-width: 1280px) {
  header {
    padding: 14px 2%;
    transition: 0.2s;
  }
  .navBar a {
    padding: 5px 0;
    margin: 0px 20px;
  }
}

@media (max-width: 1090px) {
  #menu-icon {
    display: block;
  }
  .navbar {
    position: absolute;
    top: 1%;
    right: -100%;
    width: 270px;
    height: 29vh;
    background: gray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    transition: all 0.5s ease;
  }
  .navbar a {
    display: block;
    margin: 12px 0;
    padding: 0px 25px;
    transition: all 0.5s ease;
  }
  .navbar a:hover {
    color: var(--bg-color);
    transform: translateY(5px);
  }
  .navbar a.active {
    color: var(--bg-color);
  }
  .navbar.open {
    right: 2%;
  }
}

.searchbar {
  width: 600px;
  border: 2px solid black;
  padding: 10px;
  border-left: black;
  border-right: black;
  border-top: black;
}

.BoutonRecherche {
  width: 80px;
  height: 20px;
  border: 2px solid black;
  padding: 10px;
  border-color: black;
}

.BoutonRecherche {
  width: 40px;
  padding: 0;
  background-color: white;
  border: black;
}

.BoutonRecherche:hover {
  background-color: #ccc;
}

.BoutonRecherche img {
  width: 100%;
}

.articles .starsChaine img {
  width: 15px;
}

.starsChaine {
  display: flex;
}

.articles .squarePart img {
  width: 20px;
}

.articles {
  padding-top: 0px;
}

.square0 {
  padding-top: 100px;
}

.square1 {
  display: flex;
  align-items: last baseline;
  color: #000;
}

.square2 {
  display: flex;
  align-items: last baseline;
  color: #000;
}

.square3 {
  display: flex;
  align-items: last baseline;
  color: #000;
}

.square4 {
  display: flex;
  align-items: last baseline;
  color: #000;
}

.square5 {
  display: flex;
  align-items: last baseline;
  color: #000;
}

.square6 {
  display: flex;
  align-items: last baseline;
  color: #000;
}

.square7 {
  display: flex;
  align-items: last baseline;
  color: #000;
}

.articles img {
  width: 300px;
}

.topSquares {
  display: flex;
  justify-content: space-around;
}

.bottomSquares {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 840px) {
  .topSquares{
      display: block;
      padding-left: 100px;
  }
  .bottomSquares{
      display: block;
      padding-left: 100px;
  }
  .pagination{
    width: 7%;
  }
  #search-container{
    width: 100%;
  }
  .dms-img{
    width: 0px;
  }
  .dropdown {
    min-width: 5em;
    position: relative;
    margin: 2em;
    padding-top: -5%;
  }
}

@media (min-width: 840px){
    .dropdown {
        min-width: 15em;
        position: relative;
        margin: 2em;
        padding-top: -5%;
    }
}

.test4{
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
}

/*filtreeeeeeeeeeeeeee*/

.filter1-menu button {
  display: block;
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
}

.filter2-menu button {
  display: block;
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
}

.filter3-menu button {
  display: block;
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
}

.filter1-menu button:hover {
  background-color: #ccc;
}

.filter2-menu button:hover {
  background-color: #ccc;
}

.filter3-menu button:hover {
  background-color: #ccc;
}

.results {
  display: none;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}

.articleList {
  display: flex;
  justify-content: space-between;
}

.filter1-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.filter1-menu button {
  margin: 0 5px;
}

.filter2-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.filter2-menu button {
  margin: 0 5px;
}

.filter3-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.filter3-menu button {
  margin: 0 5px;
}

.button-hype,
.button-high,
.button-low,
.button-best {
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.button-hype:hover,
.button-high:hover,
.button-low:hover,
.button-best:hover {
  background-color: #ccc;
}

.button-top,
.button-bottom,
.button-shoes {
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.button-top:hover,
.button-bottom:hover,
.button-shoes:hover {
  background-color: #ccc;
}

.button-blue,
.button-pink,
.button-black {
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.button-blue:hover {
  background-color: lightskyblue;
}

.button-pink:hover {
  background-color: pink;
}

.button-black:hover {
  background-color: gray;
  color: white;
}

* {
  margin: 0px;
  padding: 0px;
}

.card {
  width: 400px;
  background-color: black;
  border-radius: 5px;
  padding: 10px;
}

h4 {
  color: #000;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
}

.price-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
  color: white;
}

label {
  font-size: 12px;
  font-weight: 500;
}

p {
  font-size: 16px;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
}

.range-slider {
  width: 400px;
  position: relative;
  margin: 15px 0 30px 0;
  color: white;
}

input[type="range"] {
  width: 100%;
  background: transparent;
  position: absolute;
  left: 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: black;
  cursor: pointer;
  margin-top: -5px;
  position: relative;
  z-index: 1;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: #e8e8e8;
  border-radius: 3px;
  border: none;
}

/*fin de filtressss*/

/*pagination aaaaaaaapapapappapaaapaapapapapppapapapapapaapappaapapappapapapapapap*/

.pagination {
  display: flex;
  justify-content: flex-start;
  padding-right: 50%;
  padding-top: 20px;
  padding-left: 60px;
  padding-bottom: 0px;
}

.pagination li {
  display: inline;
  margin: 0;
  padding: 0 5px;
  width: 50%;
  text-align: left;
}

.pagination a {
  color: rgb(0, 0, 0);
  border-radius: 0px;
  padding: 15px;
}

.pagination a.active {
  background-color: #000000;
  color: white;
}

</style>



