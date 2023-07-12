<template>
  <!-- main -->
  <div class="main">
    <div class="main-title">
      <p>Layanan Kami</p>
    </div>
    <div class="contain-main">
      <div @click.prevent="openModal('profil')" id="openModalBtn" class="square-icon">
        <img src="../../../assets/gambar/icon/profile.svg" alt="" />
        <p>Profil</p>
      </div>
      <div @click.prevent="openModal('password')" class="square-icon">
        <img src="../../../assets/gambar/icon/password.svg" alt="" />
        <p>Password</p>
      </div>
      <div @click="openModal('help')" class="square-icon">
        <img src="../../../assets/gambar/icon/help.svg" alt="" />
        <p>Bantuan</p>
      </div>
      <div @click.prevent="openModal('logout')" class="square-icon">
        <img src="../../../assets/gambar/icon/logout.svg" alt="" />
        <p>Keluar</p>
      </div>
    </div>
  </div>
  <transition name="modal">
    <div v-if="isModalOpen" id="myModal" class="modal">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
        <h2>{{ popupTitle }}</h2>
        <!-- profile -->
        <form @submit.prevent="submitProfile" id="form" v-if="currentForm == 'profil'">
          <div class="group-from">
            <label for="name">nama</label>
            <input type="text" id="name" name="name" v-model="form.name" required />
          </div>
          <div class="group-from">
            <label for="notelp">no telpon</label>
            <input
              type="text"
              id="notelp"
              name="notelp"
              v-model="form.no_telp"
              @input="limitInput"
              required
            />
          </div>
          <div class="group-from">
            <label for="email">email</label>
            <input type="email" id="email" name="email" v-model="form.email" required />
          </div>
          <div class="group-from">
            <label for="age">Umur</label>
            <input
              type="text"
              id="age"
              name="age"
              @input="limitInputAge"
              v-model="form.age"
              required
            />
          </div>
          <div class="group-from">
            <label for="address">alamat</label>
            <textarea
              type="text"
              id="address"
              name="address"
              v-model="form.address"
              width="200"
              required
            ></textarea>
          </div>
          <div class="group-from">
            <div class="button-group-flex">
              <button @click.prevent="closeModal" class="button-cancel-54">Batal</button>
              <button type="submit" class="button-54">Ubah</button>
            </div>
          </div>
        </form>
        <!-- reset password -->
        <form
          @submit.prevent="sumbitResetPassword"
          id="form"
          v-if="currentForm == 'password'"
        >
          <div class="group-from">
            <label for="current_password">password lama</label>
            <input type="text" v-model="reset.old_password"
             id="current_password" name="old_password" />
          </div>
          <div class="group-from">
            <label for="new_password">password Baru</label>
            <input
              type="text"
              id="new_password"
              @input="validateInput"
              v-model="reset.password"
              name="password"
              required
            />
            <br />
            <small v-if="valid"
              >Minimal 8 Karakter ,mengandung huruf besar,kecil,angka,karakter spesial
              sperti '@ # / dll'</small
            >
          </div>
          <div class="group-from">
            <label for="new_password">Konfimasi Password</label>
            <input
              type="text"
              id="new_password"
              @input="validateSame"
              v-model="reset.new_password"
              name="new_password"
              required
            />
            <br />
            <small v-if="isDisabled"
              >pengulangan password harus sama dengan password</small
            >
          </div>
          <div class="group-from">
            <div class="button-group-flex">
              <button @click.prevent="closeModal" class="button-cancel-54">Batal</button>
              <button :disabled="isDisabled" class="button-54" role="button">Ubah</button>
            </div>
          </div>
        </form>
        <!-- help center -->
        <form id="form" v-if="currentForm == 'help'">
          <div class="group-from">
            <h5>Layanan</h5>
            <p>
              Saat ini Pelayan bisa melalui dari kami dengan cara menggubungi no berikiut
              : <strong>0811820083</strong>
            </p>
          </div>
          <div class="group-from">
            <div class="button-group-flex">
              <button @click.prevent="closeModal" class="button-cancel-54">Batal</button>
              <button @click.prevent="getWhatsAppLink" class="button-54">Bantuan</button>
            </div>
          </div>
        </form>
        <!-- logout -->
        <form @submit.prevent="submitLogout" id="form" v-if="currentForm == 'logout'">
          <div class="group-from">
            <p>Yakin Keluar Dari Aplikasi ?</p>
          </div>
          <div class="group-from">
            <div class="button-group-flex">
              <button @click.prevent="closeModal" class="button-cancel-54">Batal</button>
              <button type="submit" class="button-54">Keluar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Swal from "sweetalert";
import Swal2 from "sweetalert2";
export default {
  name: "SettingViewComponent",
  created() {},
  data() {
    return {
      isModalOpen: false,
      currentForm: "",
      popupTitle: "",
      form: {
        name: null,
        no_telp: null,
        email: null,
        age: null,
        address: null,
      },
      reset: {
        old_password: null,
        new_password: null,
        password: null,
      },
      maxLimitInput: 13,
      minlengtPassword: 8,
      valid: true,
      isDisabled:true
    };
  },
  props: {},
  methods: {
    ...mapMutations(["removeToken"]),
    ...mapActions(["removeActionToken", "updateActionProfile", "getActionProfile","updateActionPassword"]),
    openModal(formName) {
      this.currentForm = formName;
      this.isModalOpen = true;
      if (this.currentForm == "profil") {
        this.popupTitle = "profil";
        this.$store
          .dispatch("getActionProfile", { payload: { tokenId: this.tokenId } })
          .then((response) => {
            let dataProfile = response.data;
            console.log(dataProfile);
            this.form.name = dataProfile.name;
            this.form.email = dataProfile.email;
            this.form.address = dataProfile.address;
            this.form.no_telp = dataProfile.no_telp;
            this.form.age = dataProfile.age;
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.currentForm == "password") {
        this.popupTitle = "password";
      } else if (this.currentForm == "help") {
        this.popupTitle = "help";
      } else if (this.currentForm == "logout") {
        this.popupTitle = "keluar";
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitLogout() {
      this.$store
        .dispatch("removeActionToken", { payload: { tokenId: this.tokenId } })
        .then(() => {
          Swal("sampai jumpa kembali", "Anda keluar", "success");
          setTimeout(() => {
            this.$router.push("/login");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitProfile() {
      this.$store
        .dispatch("updateActionProfile", {
          payload: {
            tokenId: this.tokenId,
            name: this.form.name,
            email: this.form.email,
            no_telp: this.form.no_telp,
            age: this.form.age,
            address: this.form.address,
          },
        })
        .then((response) => {
          Swal("update data", "data berhasil dirubah", "success");
          let dataProfil = response.data;
          let users = JSON.parse(localStorage.getItem("data"));
          users.user = dataProfil.name;
          this.closeModal();
          // console.log(response);
        })
        .catch((error) => {
          Swal("terjadi kesalahan", "mohon maaf terjadi kesalahan", "failed");
          console.log(error);
        });
    },
    limitInput() {
      this.form.no_telp = this.form.no_telp.replace(/\D/g, "");

      if (this.form.no_telp.length >= this.maxLimitInput) {
        Swal("peringatan", "ups.. melibihi inputan", "warning");
      }
    },
    limitInputAge() {
      this.form.age = this.form.age.replace(/\D/g, "");
      if (this.form.age.length > 2) {
        Swal("peringatan", "ups.. melibihi inputan umur manusia", "warning");
      }
    },
    sumbitResetPassword() {
      // console.log(this.reset);
      this.$store.dispatch('updateActionPassword',{payload:{
        tokenId:this.tokenId,
        old_password:this.reset.old_password,
        new_password:this.reset.new_password,
        password:this.reset.password
    }}).then((response)=>{
      console.log(response.data);
      Swal2.fire({
            title: 'Sukses',
            text: `${response.data.message}`,
            icon: 'success',
          }).then(() => {
            this.closeModal()
            this.reset.old_password=''
            this.reset.password=''
            this.reset.new_password=''

          });
    }).catch((error)=>{
      console.log(error);
      Swal2.fire({
            title: 'Warning',
            text: `upps ${error.response.data.message}`,
            icon: 'warning',
      }).then(() => {
            this.closeModal()
            this.reset.old_password=''
            this.reset.password=''
            this.reset.new_password=''
      });
    })
    },
    validateForm(input, regex, errorMessage) {
      if (!regex.test(input)) {
        Swal2.fire("Error", errorMessage, "error");
        return false;
      }
      return true;
    },
    validateInput() {
      const validateLowercase = () => /[a-z]/;
      const validateUppercase = () => /[A-Z]/;
      // eslint-disable-next-line
      const validateCharacter = () => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      const validateNumber = () => /[0-9]/;
      const lowercaseRegex = validateLowercase();
      const uppercaseRegex = validateUppercase();
      const characterRegex = validateCharacter();
      const numberRegex = validateNumber();

      if (this.reset.password.length == 8) {
        // Swal2.fire('Error', 'Input harus terdiri dari setidaknya 8 karakter.', 'error');
        if (
          !this.validateForm(
            this.reset.password,
            lowercaseRegex,
            "Input harus mengandung setidaknya satu karakter huruf kecil."
          )
        ) {
          return;
        }

        if (
          !this.validateForm(
            this.reset.password,
            uppercaseRegex,
            "Input harus mengandung setidaknya satu karakter huruf besar."
          )
        ) {
          return;
        }

        if (
          !this.validateForm(
            this.reset.password,
            characterRegex,
            "Input harus mengandung setidaknya satu karakter khusus."
          )
        ) {
          return;
        }

        if (
          !this.validateForm(
            this.reset.password,
            numberRegex,
            "Input harus mengandung setidaknya satu karakter angka."
          )
        ) {
          return;
        }
        console.log("Input valid:", this.reset.password);
        this.valid = false;
      } else {
        return this.valid;
      }
    },
    getWhatsAppLink() {
      const phoneNumber = '+6287819548411'; // Ganti dengan nomor telepon admin
      const message = 'Halo, saya butuh bantuan.'; // Ganti dengan pesan yang ingin Anda kirim

      const encodedMessage = encodeURIComponent(message);
      return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    },
    validateSame(){
      if(this.reset.password === this.reset.new_password){
        this.isDisabled = false;
      }
    }
  },
  computed: {
    ...mapGetters({ tokenId: "getUsers" }),
    
  },
};
</script>
<style lang="scss" scoped>
/* CSS */
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #a2ff86;
  cursor: pointer;
  border: 3px solid #a2ff86;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  color: black;
  top: 5px;
  left: 5px;
}
.button-cancel-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #ef6262;
  cursor: pointer;
  border: 3px solid #ef6262;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}


.button-cancel-54:active {
  box-shadow: 0px 0px 0px 0px;
  color: black;
  top: 5px;
  left: 5px;
}
.button-group-flex {
  gap: 13px;
}
@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
  .button-cancel-54 {
    padding: 0.25em 0.75em;
  }
}
</style>
