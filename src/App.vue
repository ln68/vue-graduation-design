<template>
  <v-app id="app">
    <zhu id="zhu" />
    <router-view id="zhu" v-bind:key="$route.path" />
  </v-app>
</template>

<script>
import zhu from "@/views/Zhu";
export default {
  components: { zhu }
};
</script>
