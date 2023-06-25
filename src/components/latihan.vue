<template>
  <h2>Nama : {{ nama }}</h2>
  <button v-on:click="changeName">Ganti</button>
  <!-- bab data binding -->
  <div class="bi">
    <a v-bind:href="url">data binding ke github</a>
  </div>
  <!-- bab twind data binding -->
  <div class="twind-binding">
    <input type="text" v-model="input">
    <p>hasil input : {{ input }}</p>
  </div>
  <!-- perulangan dan conditonal -->
  <div v-if="dataOrder.length">
    <ul>
      <li v-for="item in dataOrder" :key="item.id">{{ item.product }} - {{ item.harga }}</li>
    </ul>
  </div>
  <div v-else><p>data not found</p></div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      nama:'Luthfi',
      input:"",
      url:'https:gitub.com',
      dataOrder:[
        {id:3,idProduct:4,date:"30/02/2023",harga:50000,product:'sampo'},
        {id:4,idProduct:5,date:"30/02/2023",harga:30000,product:'sabun'},
        {id:5,idProduct:6,date:"30/02/2023",harga:30000,product:'sabun'},
        {id:4,idProduct:4,date:"30/02/2023",harga:10000,product:'sisir'},
      ]
    };
  },
  methods:{
    changeName(){
      this.nama ="Afdhal";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
