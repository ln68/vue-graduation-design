<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ user.name }}/{{ replace }}</p>
    <button @click="changed">click</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    msg: "asdf",
    user: {
      name: "BO",
      insertTime: "2020.04.09T08:30:21"
    }
  }),
  methods: {
    changed() {
      this.user.name = "SUN";
    }
  },
  computed: {
    replace() {
      return this.user.insertTime.replace("T", " ");
    }
  }
};
</script>
