<template>
    <link rel = "stylesheet" href = "./bootstrap-5.3.2-dist/css">
    <div class = "container">
        <div class = "title text-center">
            <h2 class = "position-relative d-inline-block">Our Collection</h2>
        </div>
        <div class = "row g-0">
            <div class = "d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                <button type = "button" class = "btn m-2 text-dark active-filter-btn" data-filter = "*">All</button>
                <button type = "button" class = "btn m-2 text-dark" data-filter = ".best">Best Sellers</button>
                <button type = "button" class = "btn m-2 text-dark" data-filter = ".feat">Featured</button>
                <button type = "button" class = "btn m-2 text-dark" data-filter = ".new">New Arrival</button>
            </div>
            <div class = "collection-list mt-4 row gx-0 gy-3">
                <div class = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                    <div class = "collection-img position-relative">
                        <img src= "./photosGallerie/teeShirt.png" class = "w-100">
                        <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div class = "text-center">
                        <div class = "rating mt-3">
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                        </div>
                        <p class = "text-capitalize my-1">T-Shirt The Kooples</p>
                        <span class = "fw-bold">$ 105</span>
                    </div>
                </div>
                <div class = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                    <div class = "collection-img position-relative">
                        <img src = "./photosGallerie/shortCarrhart.png" class = "w-100">
                        <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div class = "text-center">
                        <div class = "rating mt-3">
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                        </div>
                        <p class = "text-capitalize my-1">Short Carrhart</p>
                        <span class = "fw-bold">$ 100</span>
                    </div>
                </div>
                <div class = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                    <div class = "collection-img position-relative">
                        <img src = "./photosGallerie/pullNocta.png" class = "w-100">
                        <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div class = "text-center">
                        <div class = "rating mt-3">
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                        </div>
                        <p class = "text-capitalize my-1">Jacket Nike X Nocta</p>
                        <span class = "fw-bold">$ 130</span>
                    </div>
                </div>
                <div class = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                    <div class = "collection-img position-relative">
                        <img src = "./photosGallerie/pullFlower.png" class = "w-100">
                        <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div class = "text-center">
                        <div class = "rating mt-3">
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                        </div>
                        <p class = "text-capitalize my-1">Hoodie Denim Tears</p>
                        <span class = "fw-bold">$ 350</span>
                    </div>
                </div>
                <div class = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                    <div class = "collection-img position-relative">
                        <img src = "./photosGallerie/pantalonCorteiz.png" class = "w-100">
                        <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div class = "text-center">
                        <div class = "rating mt-3">
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                        </div>
                        <p class = "text-capitalize my-1">Cargo Corteiz</p>
                        <span class = "fw-bold">$ 90</span>
                    </div>
                </div>
                <div class = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                    <div class = "collection-img position-relative">
                        <img src = "./photosGallerie/paireNewBalance.png" class = "w-100">
                        <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div class = "text-center">
                        <div class = "rating mt-3">
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                        </div>
                        <p class = "text-capitalize my-1">Sneakers New Balance 2002R</p>
                        <span class = "fw-bold">$ 500</span>
                    </div>
                </div>
                <div class = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                    <div class = "collection-img position-relative">
                        <img src = "./photosGallerie/paireBirk.png" class = "w-100">
                        <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div class = "text-center">
                        <div class = "rating mt-3">
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                            <span class = "text-primary"><i class = "fas fa-star"></i></span>
                        </div>
                        <p class = "text-capitalize my-1">Birkenstock Boston</p>
                        <span class = "fw-bold">$ 160</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </template>
    
    
    <style scoped>
    .active-filter-btn{
        background-color: red!important;
        color: #fff!important;
        border-color: red!important;
    }
    .filter-button-group .btn:hover{
        color: #fff!important;
    }
    .collection-img span{
        top: 20px;
        right: 20px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
    }
    </style>