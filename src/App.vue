<template>
  <router-view></router-view>
</template>
<script>
import {app,messaging} from './firebaseConfig';
export default {
  created(){
    app,
    messaging
  }
}
</script>
<style lang="scss">
@import "@/assets/index.scss";
</style>
