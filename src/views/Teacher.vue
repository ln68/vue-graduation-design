<template>
  <div class="ad">
    <p>
      <span v-text="message"></span>
    </p>
    <p v-if="user.level == 'admin'"></p>

    <template v-if="userNameLogin">
      <label>用户名</label>
      <input placeholder="Enter your username" key="key1" />
      <br />
      <label>密码</label>
      <input type="password" placeholder="Enter your password" />
    </template>
    <br />
    <router-link to="/Course" class="deng">登录</router-link>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "欢迎老师",
    admin: true, //布尔型
    user: { username: "BO", level: "admin" },
    userNameLogin: true
  })
};
</script>
<style scoped>
.ad {
  margin: 0px 300px 0px 400px;
  font-size: 25px;
}
.deng {
  text-decoration: none;
  color: black;
  border: 2px solid black;
}
</style>
