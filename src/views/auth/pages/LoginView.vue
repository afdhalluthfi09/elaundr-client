<template>
  <div class="container-login">
        <div class="contain-form">
          {{ user }}
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
            <button class="btn-google">Google</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
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
    ...mapActions({
          actionLaundry:'laundry/actionLaundry'}),
    callMutations(){
      return this.actionLaundry();
    },
    submit(){
      this.$store.dispatch('auth/actionLogin',{payload:{email:this.from.email,password:this.from.password}})
        .then(()=>{
            Swal('Hello!', 'This is a SweetAlert!', 'success');
            setTimeout(()=>{
              this.$router.push('/home')
            },5000)
        }).catch((error)=>{
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
        getLaundry:'laundry/getLaundry',
        getError:'auth/getErrors',
        user:'auth/getUsers'
    }),
    error(){
      return this.getError
    }
  },
  mounted(){
    this.callMutations();
  }
};
</script>

<style lang="scss">
@import "@/assets/index.scss";
</style>