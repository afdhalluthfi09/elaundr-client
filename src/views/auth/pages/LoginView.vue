<template>
  <div class="container-login">
        <div class="contain-form">
            <div class="banner">
                <img src="../../../assets/gambar/iconic.png" alt="">
            </div>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label class="form-label" for="">email</label>
                    <input type="text" class="form-control" v-model="from.email"/>
                    <div v-if="error">
                      <div v-for="email in error.email" :key="email.index">
                          <small class="text-red"> {{ email }} </small>
                      </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="">password</label>
                    <input type="password" class="form-control" v-model="from.password"/>
                    <div v-if="error">
                      <div v-for="password in error.password" :key="password.index">
                        <small class="text-red"> {{ password }} </small>
                      </div>
                    </div>
                </div>
                <div class="form-group display-button">
                    <button type="sumbit" class="btn-submit">Masuk</button>
                    
                </div>
            </form>
            <router-link to="/register">
              <small>Belum Punya Akun ? Daftar Disini</small>
            </router-link>
            <button class="btn-google">Google</button>
        </div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import Swal from 'sweetalert';
export default {
  name: "LoginView",
  created() {},
  data() {
    return {
      from:{
        email:null,
        password:null,
        error:[]
      }
    };
  },
  props: {},
  methods: {
    
    submit(){
      this.$store.dispatch('auth/actionLogin',{payload:{email:this.from.email,password:this.from.password}})
        .then(()=>{
            Swal('yey..', 'Selamat Datang.. berhasil masuk', 'success');
            setTimeout(()=>{
              this.$router.push('/')
            },5000)
        }).catch((error)=>{
          Swal(`${error.response.data.message}`, 'coba periksa kembali inputan', 'warning');
          console.log(error);
        })
    }
  },
  computed:{
    ...mapState({
        baseUrl:state=>state.localUrl
    }),
    ...mapGetters({
        getBaseUrl: 'getBaseUrl',
        getError:'auth/getErrors',
        user:'auth/getUsers'
    }),
    error(){
      return this.getError
    }
  },
  mounted(){
  }
};
</script>

<style lang="scss">
@import "@/assets/index.scss";
</style>