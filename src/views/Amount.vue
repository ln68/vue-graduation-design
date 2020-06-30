<template>
  <div class="s">
    <h1>设置指导学生数量</h1>
    <div class="k">
      <ul>
        <li v-for="h in homeworks" :key="h.id"></li>
      </ul>

      <table>
        <tr v-for="(h, index) in homeworks" :key="index">
          {{ amount }}

          <button @click="removeItem(index)">删除</button>
        </tr>
      </table>

      <form>
        <label>
          数量：
          <input v-model="amount" />
        </label>
        <br />
      </form>
      <button @click="addItem" class="ti">提交</button>
      <li><router-link to="/Course" class="x">修改课程</router-link></li>
    </div>
  </div>
</template>

import { mapState } from "vuex";
<script>
export default {
  data: () => ({
    homeworks: [
      {
        amount: 5
      }
    ]
  }),
  methods: {
    addItem() {
      this.$set(this.homeworks, this.homeworks.length, {
        amount: this.amount
      });
    },

    removeItem(index) {
      this.$delete(this.homeworks, index);
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
.s {
  margin: 0px 100px 100px 400px;
}
.k {
  font-size: 25px;
}
.x {
  text-decoration: none;
  color: black;
}
.ti {
  margin: 20px 50px 20px 50px;
  border: 2px solid black;
}
</style>
