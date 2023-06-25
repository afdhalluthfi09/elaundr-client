<template>
  <div class="container-home">
    <!-- header -->
    <HeaderComponent />
    <!-- status -->
    <StatusComponent />
    <!-- main -->
    <div class="main">
      <div class="main-title">
        <p>Layanan Kami</p>
      </div>
      <div class="contain-main">
        <div @click="openModal" id="openModalBtn" class="square-icon">
          <img src="../assets/gambar/icon/weight.svg" alt="weight" />
          <p>Kilogram</p>
        </div>
        <div class="square-icon">
          <img src="../assets/gambar/icon/express-delivery.svg" alt="" />
          <p>Express</p>
        </div>
        <div class="square-icon">
          <img src="../assets/gambar/icon/clothing.svg" alt="" />
          <p>Regular</p>
        </div>
        <div class="square-icon">
          <img src="../assets/gambar/icon/dress.svg" alt="" />
          <p>Kilat</p>
        </div>
        <div class="square-icon">
          <img src="../assets/gambar/icon/iron.svg" alt="" />
          <p>Strika</p>
        </div>
        <div class="square-icon">
          <img src="../assets/gambar/icon/carpet.svg" alt="" />
          <p>Karpet</p>
        </div>
      </div>
      <div class="message-title">Pesan Aktif</div>
      <div class="contain-message">
        <div class="card-body">
          <div class="contain-body">
            <img src="../assets/gambar/icon/icon-cuci.svg" alt="" />
            <div class="display-flex-column">
              <div class="detail-status">Pesanan No.0002142</div>
              <div class="detail-status">Sudah selesai</div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="contain-body">
            <img src="../assets/gambar/icon/icon-cuci.svg" alt="" />
            <div class="display-flex-column">
              <div class="detail-status">Pesanan No.0002142</div>
              <div class="detail-status">Sudah selesai</div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="contain-body">
            <img src="../assets/gambar/icon/icon-cuci.svg" alt="" />
            <div class="display-flex-column">
              <div class="detail-status">Pesanan No.0002142</div>
              <div class="detail-status">Sudah selesai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="modal">
      <div v-if="isModalOpen" id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Kiloan</h2>
          <div class="group-from">
            <label for="photo">Ambil Photo</label>
            <input id="photo" type="file" />
          </div>
          <div class="group-from">
            <label for="price_first">Harga Dasar Per Kilogram</label>
            <input
              type="text"
              id="price_first"
              name="price_first"
              readonly
              value="Rp8.000"
            />
          </div>
          <div class="group-from">
            <label for="location">Harga Dasar Per Kilogram</label>
            <select name="location" id="location">
              <option value="">Pilih Lokasi</option>
              <option id="openModalBtnLokasiDefault" value="default">
                Lokasi Default
              </option>
              <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
            </select>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from "./Header.vue";
import StatusComponent from "./Status.vue";
export default {
  name: "HomeComponet",
  created() {},
  data() {
    return {
      isModalOpen: false,
    };
  },
  components: { HeaderComponent, StatusComponent },
  props: {},
  methods: {
    openModal() {
      this.isModalOpen = true;
      console.log("hello");
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
