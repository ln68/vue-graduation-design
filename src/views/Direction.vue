<template>
  <div class="ke">
    <h1>方向</h1>
    <ul>
      <li v-for="h in homeworks" :key="h.id"></li>
    </ul>
    <div class="k">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>deadline</th>
            <th>do</th>
          </tr>
        </thead>
        <tr v-for="(h, index) in homeworks" :key="index">
          <td>{{ index }}</td>
          <td>{{ h.name }}</td>
          <td>{{ formatDate(h.deadline) }}</td>
          <td>
            <button @click="removeItem(index)">删除</button>
          </td>
        </tr>
      </table>

      <form>
        <p>添加方向</p>
        <label>
          名称：
          <input v-model="name" />
        </label>
      </form>
      <button @click="addItem" class="add">添加</button>
      <li><router-link to="/Amount" class="x">修改学生数量</router-link></li>
    </div>
  </div>
</template>

import { mapState } from "vuex";
<script>
export default {
  data: () => ({
    homeworks: [
      {
        id: 1,
        name: "钉钉小程序",
        deadline: "2019-06-10T09:00"
      },
      { id: 2, name: "Web/微服务", deadline: "2019-06-10T12:00" },
      { id: 3, name: "移动应用开发", deadline: "2019-06-10T21:30" }
    ]
  }),
  computed: {
    formatDate() {
      return date => date.replace("T", " ").substring(0, 16);
    }
  },
  methods: {
    addItem() {
      this.$set(this.homeworks, this.homeworks.length, {
        id: this.homeworks.length + 1,
        name: this.name,
        deadline: new Date().toISOString()
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
.ke {
  margin: 0px 100px 100px 400px;
}
.k {
  font-size: 25px;
}
.add {
  margin: 20px 70px;
  border: 2px solid black;
  padding: 5px;
}
.x {
  text-decoration: none;
  color: black;
}
</style>
