<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css">
    <link rel="stylesheet" href="./bootstrap-5.3.2-dist/css">

    <nav class = "navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div class = "container">
            <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href = "index.html">
                <img src = "./logoGallerie/menu.png" alt = "site icon">
                <span class = "text-uppercase fw-lighter ms-2">Metrokiks</span>
            </a>

            <div class = "order-lg-2 nav-btns">
                <button type = "button" class = "btn position-relative">
                  <i class="ri-shopping-cart-2-fill"></i>
                    <span class = "position-absolute top-0 start-100 translate-middle badge bg-primary">5</span>
                </button>
                <button type = "button" class = "btn position-relative">
                  <i class="ri-heart-3-fill"></i>
                    <span class = "position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
                </button>
                <button type = "button" class = "btn position-relative">
                  <i class="ri-search-line"></i>
                </button>
            </div>

            <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                <span class = "navbar-toggler-icon"></span>
            </button>

            <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
                <ul class = "navbar-nav mx-auto text-center">
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "#header">HOME</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "#collection">SHOP</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "#special">NEWSLETTER</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <RouterLink to="/login" class="btn btn-color px-5 mb-5 w-100 a">LOGIN</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* button */
.bg-primary{
    background-color: red!important;
}

.btn:not(.nav-btns button){
    background-color: #fff;
    color: rgb(85, 85, 85);
    padding: 10px 28px;
    border-radius: 25px;
    border: 1px solid rgb(85, 85, 85);
}
.btn:not(.nav-btns button):hover{
    background-color:red;
    color: #fff;
    border-color: red;
}

/* text color */
.text-primary{
    color: red!important;
}

/* navbar */
.navbar{
    -webkit-box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.1);
            box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.1);
}
.navbar-brand img{
    width: 30px;
}
.navbar-brand span{
    letter-spacing: 2px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.nav-link:hover{
    color: red!important;
}
.nav-item{
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
}

.nav-link {
  color: blue; /* ou une autre couleur visible */
  cursor: pointer;
}

</style>