<template>
    <link rel = "stylesheet" href = "./bootstrap-5.3.2-dist/css">
    <div id = "newletter" class = "container">
      <div class = "d-flex flex-column align-items-center justify-content-center">
          <div class = "title text-center pt-3 pb-5">
              <h2 class = "position-relative d-inline-block ms-4">Newsletter Subscription</h2>
          </div>
          <p class = "text-center text-muted">Subscribe to our newsletter and get €20 off your first order!</p>
          <div class = "input-group mb-3 mt-3">
              <input type = "text" class = "form-control" placeholder="Enter Your Email ...">
              <button class = "btn btn-primary" type = "submit">Subscribe</button>
          </div>
      </div>
    </div>
    </template>
    
    
    <style scoped>
    #newsletter{
        background-color: rgba(179, 179, 179, 0.05);
    }
    #newsletter p{
        max-width: 600px;
    }
    #newsletter .input-group{
        max-width: 500px;
    }
    #newsletter .form-control{
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
    }
    #newsletter .btn{
        background-color: red;
        color: #fff;
        border-color: red;
    }
    #newsletter .btn:hover{
        background-color: #000;
        border-color: #000;
    }
    </style>