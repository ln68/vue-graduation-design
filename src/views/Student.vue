<template>
  <div>
    <div class="qua">
      <ul>
        <li>所学课程占权重</li>
        <li>Web开发技术 30%</li>
        <li>Java程序设计 30%</li>
        <li>移动开发技术 40%</li>
      </ul>
    </div>
    <div class="d1">
      <form>
        <label>
          <input type="checkbox" v-model="agreed" />
          选择方向只能选择两项
        </label>
        <br />
        <template v-for="(c, index) in courses">
          <label :key="`l-${index}`">
            <input
              ref="checkboxs"
              type="checkbox"
              :key="`c-${index}`"
              v-model="selectedCourses"
              :value="{ id: c.id }"
              :disabled="!agreed"
              @change="check"
            />
            {{ c.name }}
          </label>
          <br :key="`b-${index}`" />
        </template>
        <br />
        <label>姓名</label>
        <input placeholder="请输入姓名" />
        <br />
        <br />
        <div class="p">
          <label>学号</label>
          <input placeholder="请输入学号" />
        </div>
        <router-link to="/Achieve" class="t">提交</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    courses: [
      { id: 4, name: "钉钉小程序" },
      { id: 5, name: "Web/微服务" },
      { id: 6, name: "移动应用开发" }
    ],
    amount: 2,
    selectedCourses: [{ id: 4 }],
    agreed: false
  }),
  methods: {
    check() {
      let checkboxDis = this.selectedCourses.length >= this.amount;
      this.$refs.checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    }
  }
};
</script>

<style scoped>
.qua {
  font-size: 25px;
  margin: 0px 400px 50px 400px;
}
.d1 {
  margin: 0px 400px 50px 400px;
  font-size: 25px;
}
.b {
  width: 100px;
  padding: 10px;
  margin: 50px;
  border: 2px solid black;
}
.jiao {
  margin: 50px;
  font-size: 15px;
}
.t {
  text-decoration: none;
  color: black;
  border: 2px solid black;
}
</style>
>
