<template>
  <div class="b">
    <h1>毕业设计选择系统</h1>
    <div class="jiao">
      <ul>
        <li class="l">
          <router-link to="/Teacher" class="jiao">教师端</router-link>
        </li>
        <li><router-link to="/Student" class="deng">学生端</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.b {
  margin: 100px 100px 0px 100px;
}
.jiao {
  font-size: 25px;
}
.jiao {
  text-decoration: none;
  color: black;
}
.deng {
  text-decoration: none;
  color: black;
}
</style>
