<template>
  <div class="header">
            <img src="../assets/gambar/icon/header-antar-laundry.svg" alt="">
            <h2 class="text-sambutan">Selamat Datang</h2>
            <h1 class="text-user" v-if="loadData" >{{ loadData.user }}</h1>
        </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "HeaderComponent",
  created() {
    console.log(localStorage.getItem('token'));
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed:{
    ...mapGetters({
      user:'auth/getUsers'
    }),
    loadData(){
      if(localStorage.getItem('token') !== null){
          return JSON.parse(localStorage.getItem('data'));
      }else{
        return null;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>