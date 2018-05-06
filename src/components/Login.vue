<template>
  <div class="login-box">
    <div class="text-style">會員登入</div>
    <form action="#" class="login-form">
      <div class="form-group">
        <label for="">帳號</label>
        <input type="text" placeholder="example@gamil.com" required>
      </div>
      <div class="form-group">
        <label for="">密碼</label>
        <input type="text" required>
      </div>
      <div class="form-group">
        <input type="submit" value="登入" class="btn">
      </div>
    </form>
    <div class="other">
      <a href="#">註冊新會員</a>
      <a href="#">忘記密碼</a>
    </div>
  </div>
</template>

<style scoped>
.login-box {
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 300px;
  min-height: 60vh;
  margin: auto;
}
.text-style{
  margin-bottom: 1em;
  text-align: center;
  font-size: 1.125em;
  letter-spacing: 2px;
}
.login-form{
  margin-top: 1em;
}
.form-group{
  margin: .5em auto;
}
label{
  display: block;
  margin-bottom: .5em;
  font-size: 0.875em;
}
input[type="text"],input[type="submit"]{
  width: 100%;
  height: 41px;
  line-height: 41px;
  padding-left: 15px;
  font-size: 1em; 
}
input[type="submit"]{
  border: 0;
  color: #fff;
  background-color: #00B8A9;
  font-weight: 700;
}
.other {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d4d4d4;
  padding-top: 10px;  
}
.other a {
  color: #00B8A9;
  font-size: 0.875em;
  letter-spacing: 1px;  
}
.other a:hover{
  text-decoration: underline;
  color: #2e2e2e;
}
</style>

