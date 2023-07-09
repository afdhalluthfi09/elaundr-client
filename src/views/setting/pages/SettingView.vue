<template>
    <!-- main -->
    <div class="main">
            <div class="main-title">
                <p>Layanan Kami</p>
            </div>
            <div class="contain-main">
                <div @click.prevent="openModal('profil')" id="openModalBtn" class="square-icon">
                    <img src="../../../assets/gambar/icon/profile.svg" alt="">
                    <p>Profil</p>
                </div>
                <div @click.prevent="openModal('password')" class="square-icon">
                    <img src="../../../assets/gambar/icon/password.svg" alt="">
                    <p>Password</p>
                </div>
                <div @click="openModal('help')" class="square-icon">
                    <img src="../../../assets/gambar/icon/help.svg" alt="">
                    <p>Bantuan</p>
                </div>
                <div @click.prevent="openModal('logout')"  class="square-icon">
                    <img src="../../../assets/gambar/icon/logout.svg" alt="">
                    <p>Keluar</p>
                </div>
            </div>
    </div>
  <transition name="modal">
    <div v-if="isModalOpen" id="myModal" class="modal">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
          <h2>{{ popupTitle }}</h2>
          <form id="form" v-if="currentForm == 'profil'">
            
            <div class="group-from">
              <label for="name">nama</label>
              <input
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div class="group-from">
              <label for="notelp">no telpon</label>
              <input
                type="text"
                id="notelp"
                name="notelp"
              />
            </div>
            <div class="group-from">
              <label for="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div class="group-from">
              <label for="age">Umur</label>
              <input
                type="text"
                id="age"
                name="age"
              />
            </div>
            <div class="group-from">
              <label for="address">alamat</label>
              <textarea
                type="text"
                id="address"
                name="address"
                width="200"
              ></textarea>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Ubah</button>
              </div>
            </div>
          </form>
          <form id="form" v-if="currentForm == 'password'">
            <div class="group-from">
              <label for="current_password">password lama</label>
              <input
                type="text"
                id="current_password"
                name="current_password"
              />
            </div>
            <div class="group-from">
              <label for="new_password">password Baru</label>
              <input
                type="text"
                id="new_password"
                name="new_password"
              />
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Ubah</button>
              </div>
            </div>
          </form>
          <form id="form" v-if="currentForm == 'help'">
            <div class="group-from">
              <h5>Layanan</h5>
              <p>Saat ini Pelayan bisa melalui dari kami dengan cara menggubungi no berikiut : <strong>0811820083</strong></p>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Bantuan</button>
              </div>
            </div>
          </form>
          <form @submit.prevent="submitLogout" id="form" v-if="currentForm == 'logout'">
            <div class="group-from">
              <p>Yakin Keluar Dari Aplikasi ?</p>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button type="submit" class="btn btn-kirim">Keluar</button>
              </div>
            </div>
          </form>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
import Swal from 'sweetalert';
export default {
  name: "SettingViewComponent",
  created() {},
  data() {
    return {
      isModalOpen: false,
      currentForm: '',
      popupTitle: '',
    };
  },
  props: {},
  methods: {
    
    ...mapMutations(['removeToken']),
    ...mapActions(['removeActionToken']),
    openModal(formName) {
      this.currentForm = formName;
      this.isModalOpen = true;
      if(this.currentForm == 'profil'){
        this.popupTitle = 'profil';
      }else if( this.currentForm == 'password'){
        this.popupTitle = 'password';
      }else if( this.currentForm == 'help'){
        this.popupTitle = 'help';
      }else if( this.currentForm == 'logout'){
        this.popupTitle = 'keluar';
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitLogout(){
      this.$store.dispatch('removeActionToken',{payload:{tokenId:this.tokenId}})
        .then(()=>{
          Swal('sampai jumpa kembali', 'Anda keluar', 'succes');
            setTimeout(()=>{
              this.$router.push('/login')
            },3000)
        })
        .catch((error)=>{
            console.log(error)
        })

    }
  },
  computed:{
    ...mapGetters({tokenId:'getUsers'})
  }
};
</script>
<style lang="scss" scoped></style>