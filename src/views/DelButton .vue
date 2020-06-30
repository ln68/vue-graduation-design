<template>
  <div><button @click="del">submit</button></div>
</template>
<script>
export default {
  props: ["homework"],
  methods: {
    sub() {
      let r = confirm(`你确定提交吗？`);
      if (r) {
        alert(`已提交`);
      }
    }
  }
};
</script>
