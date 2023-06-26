<template>
  <div class="container-setting">
    <!-- header -->
    <HeaderComponent/>
    <!-- bar status -->
    <StatusComponent/>
    <!-- main -->
    <div class="main">
            <div class="main-title">
                <p>Layanan Kami</p>
            </div>
            <div class="contain-main">
                <div id="openModalBtn" class="square-icon">
                    <img src="../assets/gambar/icon/profile.svg" alt="">
                    <p>Profil</p>
                </div>
                <div class="square-icon">
                    <img src="../assets/gambar/icon/password.svg" alt="">
                    <p>Password</p>
                </div>
                <div class="square-icon">
                    <img src="../assets/gambar/icon/help.svg" alt="">
                    <p>Bantuan</p>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import StatusComponent from '../components/Status.vue'
export default {
  name: "SettingViewComponent",
  created() {},
  data() {
    return {};
  },
  components:{HeaderComponent,StatusComponent},
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>