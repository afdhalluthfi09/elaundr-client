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
        <div @click="openModal('kiloan')" id="openModalBtn" class="square-icon">
          <img src="../assets/gambar/icon/weight.svg" alt="weight" />
          <p>Kilogram</p>
        </div>
        <div @click="openModal('express')" class="square-icon">
          <img src="../assets/gambar/icon/express-delivery.svg" alt="" />
          <p>Express</p>
        </div>
        <div @click="openModal('reguler')" class="square-icon">
          <img src="../assets/gambar/icon/clothing.svg" alt="" />
          <p>Regular</p>
        </div>
        <div @click="openModal('kilat')" class="square-icon">
          <img src="../assets/gambar/icon/dress.svg" alt="" />
          <p>Kilat</p>
        </div>
        <div @click="openModal('strika')" class="square-icon">
          <img src="../assets/gambar/icon/iron.svg" alt="" />
          <p>Strika</p>
        </div>
        <div @click="openModal('karpet')" class="square-icon">
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
          <span @click="closeModal" class="close">&times;</span>
          <h2>{{ popupTitle }}</h2>
          <form v-if="currentForm == 'kiloan'">
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
          </form>
          <form v-else-if="currentForm == 'reguler'">
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
          </form>
          <form v-else-if="currentForm == 'express'">
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
          </form>
          <form v-else-if="currentForm == 'kilat'">
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
          </form>
          <form v-else-if="currentForm == 'strika'">
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
          </form>
          <form v-else-if="currentForm == 'karpet'">
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
          </form>
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
      currentForm: '',
      popupTitle: '',
    };
  },
  components: { HeaderComponent, StatusComponent },
  props: {},
  methods: {
    openModal(formName) {
      this.currentForm = formName;
      this.isModalOpen = true;
      if(this.currentForm == 'kiloan'){
        this.popupTitle = this.currentForm;
      }else if(this.currentForm =='express'){
        this.popupTitle = this.currentForm;
      }else if(this.currentForm =='reguler'){
        this.popupTitle = this.currentForm;
      }else if(this.currentForm =='kilat'){
        this.popupTitle = this.currentForm;
      }else if(this.currentForm =='strika'){
        this.popupTitle = this.currentForm;
      }else if(this.currentForm =='karpet'){
        this.popupTitle = this.currentForm;
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
