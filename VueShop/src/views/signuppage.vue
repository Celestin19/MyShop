<template>
    <div class="Signup">
    <span style="font-family: verdana, geneva, sans-serif;"><!DOCTYPE html>
<html lang="en">
  <head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="Css/style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="" />
        <label>Last Name</label>
        <input type="text" placeholder="" />
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <label>Confirm Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
      </form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        Or Return to HomePage ? <RouterLink to="/" class="btn btn-color px-5 mb-5 w-100 a">Click Here</RouterLink>
      </p>
    </div>
    <p class="para-2">
      Already have an account? <RouterLink to="/login" class="btn btn-color px-5 mb-5 w-100 a">Login</RouterLink>
    </p>
  </body>
</html></span>
</div>
</template>

<style>
  body {
  background-color: white;
  font-family: "Roboto", sans-serif;
}
.signup-box {
  width: 360px;
  height: 620px;
  margin: auto;
  background-color: black;
  border-radius: 3px;
  color: white;
}
.login-box {
  width: 360px;
  height: 280px;
  margin: auto;
  border-radius: 3px;
  background-color: white;
}
h1 {
  text-align: center;
  padding-top: 15px;
}
h4 {
  text-align: center;
}
form {
  width: 300px;
  margin-left: 20px;
}
form label {
  display: flex;
  margin-top: 20px;
  font-size: 18px;
}
form input {
  width: 100%;
  padding: 7px;
  border: none;
  border: 1px solid gray;
  border-radius: 6px;
  outline: none;
}
input[type="button"] {
  width: 320px;
  height: 35px;
  margin-top: 20px;
  border: none;
  background-color: #49c1a2;
  color: white;
  font-size: 18px;
}
p {
  text-align: center;
  padding-top: 20px;
  font-size: 15px;
}
.para-2 {
  text-align: center;
  color: black;
  font-size: 15px;
  margin-top: -10px;
}
.para-2 a {
  color: #49c1a2;
}
</style>