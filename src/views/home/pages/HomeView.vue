<template>
    <!-- main -->
    <div class="main">
      <div class="main-title">
        <p>Layanan Kami</p>
      </div>
      <div class="contain-main">
        <div @click="openModal('express')" class="square-icon">
          <img src="../../../assets/gambar/icon/express-delivery.svg" alt="" />
          <p>Express</p>
        </div>
        <div @click="openModal('reguler')" class="square-icon">
          <img src="../../../assets/gambar/icon/clothing.svg" alt="" />
          <p>Regular</p>
        </div>
        <div @click="openModal('kilat')" class="square-icon">
          <img src="../../../assets/gambar/icon/dress.svg" alt="" />
          <p>Kilat</p>
        </div>
        <div @click="openModal('strika')" class="square-icon">
          <img src="../../../assets/gambar/icon/iron.svg" alt="" />
          <p>Strika</p>
        </div>
        <div @click="openModal('karpet')" class="square-icon">
          <img src="../../../assets/gambar/icon/carpet.svg" alt="" />
          <p>Karpet</p>
        </div>
      </div>
      <div class="message-title">Pesan Aktif</div>
      <div class="contain-message">
        <div class="card-body">
          <div class="contain-body">
            <img src="../../../assets/gambar/icon/icon-cuci.svg" alt="" />
            <div class="display-flex-column">
              <div class="detail-status">Pesanan No.0002142</div>
              <div class="detail-status">Sudah selesai</div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="contain-body">
            <img src="../../../assets/gambar/icon/icon-cuci.svg" alt="" />
            <div class="display-flex-column">
              <div class="detail-status">Pesanan No.0002142</div>
              <div class="detail-status">Sudah selesai</div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="contain-body">
            <img src="../../../assets/gambar/icon/icon-cuci.svg" alt="" />
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
          <form id="form" v-if="currentForm == 'reguler'">
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
              <label for="paketreguler">paket</label>
              <select name="paketreguler" id="paketreguler">
                <option value="">Pilih paket</option>
                <option  value="2hari">
                  Paket 2 Hari
                </option>
              </select>
            </div>
            <div class="group-from">
              <label for="location">Lokasi Penjemputan</label>
              <select @change="locationNow" name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow"  value="localnow">Lokasi Terkini OI</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
          <form id="form" v-else-if="currentForm == 'express'">
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
              <label for="paketkilat">Paket Kilat</label>
              <input id="paketkilat" name="paketkilat" value="4 jam" readonly/>
            </div>
            <div class="group-from">
              <label for="location">Lokasi Penjemputan</label>
              <select name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
          <form id="form" v-else-if="currentForm == 'kilat'">
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
              <label for="location">Lokasi Penjemputan</label>
              <select name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
          <form id="form" v-else-if="currentForm == 'strika'">
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
                value="Rp4.000"
              />
            </div>
            <div class="group-from">
              <label for="location">Lokasi Penjemputan</label>
              <select name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
          <form id="form" v-else-if="currentForm == 'karpet'">
            <div class="group-from">
              <label for="photo">Ambil Photo</label>
              <input id="photo" type="file" />
            </div>
            <div class="group-from">
              <label for="price_first">Harga Dasar Per Meter</label>
              <input
                type="text"
                id="price_first"
                name="price_first"
                readonly
                value="Rp8.000"
              />
            </div>
            <div class="group-from">
              <label for="ukuran">Ukuran Karpet</label>
              <select name="ukuran" id="ukuran">
                <option value="">Pilih Pilih Ukuran</option>
                <option value="">1 x 1</option>
                <option value="">2 x 2</option>
                <option value=""> lebih dari 4 m</option>

              </select>
            </div>
            <div class="group-from">
              <label for="location">Lokasi Penjemputan</label>
              <select name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: "HomeViewComponent",
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
    openModal(formName) {
      this.currentForm = formName;
      this.isModalOpen = true;
      if(this.currentForm == 'kiloan'){
        this.popupTitle = this.currentForm;
      }else if(this.currentForm =='express'){
        this.popupTitle = this.currentForm;
      }else if(this.currentForm =='reguler'){
        this.popupTitle = 'reguler';
      }else if(this.currentForm =='kilat'){
        this.popupTitle = 'kilat';
      }else if(this.currentForm =='strika'){
        this.popupTitle = 'strika';
      }else if(this.currentForm =='karpet'){
        this.popupTitle = this.currentForm;
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
    locationNow(event){
      event.preventDefault();
      // Inisialisasi peta
      /* Latitude: -0.789275
         Longitude: 113.921327 */
         if ('geolocation' in navigator) {
            
            navigator.geolocation.getCurrentPosition(
              position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);
              },
              error => {
                // Mendapatkan posisi geografis pengguna gagal
                console.error('Error getting location:', error);
              }
            );
          } else {
            console.error('Geolocation is not supported by this browser.');
          }
     
    }
  },
};
</script>

<style lang="scss" scoped></style>