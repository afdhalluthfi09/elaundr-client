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
          <form enctype="multipart/form-data" @submit.prevent="submitReguler" id="form" v-if="currentForm == 'reguler'">
            <div class="group-from">
              <label for="photo">Ambil Photo</label>
              <input id="photo" type="file" @change="handleFileChange" required/>
            </div>
            <div class="group-from">
              <label for="price_first">Harga Dasar Per Kilogram</label>
              <input
                type="text"
                id="price_first"
                name="price_first"
                readonly
                :value="displayPriceFirst"
              />
            </div>
            <div class="group-from">
              <label for="paketreguler">paket</label>
              <select name="paketreguler" id="paketreguler" @change="handleSelectChange">
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
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
          <!-- express -->
          <form enctype="multipart/form-data" @submit.prevent="submitExpress" id="form" v-else-if="currentForm == 'express'">
            <div class="group-from">
              <label for="photo">Ambil Photo</label>
              <input id="photo" @change="handleFileChange" type="file" />
            </div>
            <div class="group-from">
              <label for="price_first">Harga Dasar Per Kilogram</label>
              <input
                type="text"
                id="price_first"
                name="price_first"
                readonly
                :value="displayPriceFirst"
              />
            </div>
            <div class="group-from">
              <label for="paketkilat">Paket Express</label>
              <input id="paketkilat" name="paketkilat" :value="displayPaketExpress" readonly/>
            </div>
            <div class="group-from">
              <label for="location">Lokasi Penjemputan</label>
              <select @change.prevent="locationNow" name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button type="submit" class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
          <!-- kilat -->
          <form enctype="multipart/form-data" @submit.prevent="submitKilat" id="form" v-else-if="currentForm == 'kilat'">
            <div class="group-from">
              <label for="photo">Ambil Photo</label>
              <input id="photo" type="file" @change="handleFileChange" />
            </div>
            <div class="group-from">
              <label for="price_first">Harga Dasar Per Kilogram</label>
              <input
                type="text"
                id="price_first"
                name="price_first"
                readonly
                :value="displayPriceFirst"
              />
            </div>
            <div class="group-from">
              <label for="location">Lokasi Penjemputan</label>
              <select @change="locationNow" name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button type="submit" class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
          <!-- strika -->
          <form enctype="multipart/form-data" @submit.prevent="submitStrika" id="form" v-else-if="currentForm == 'strika'">
            <div class="group-from">
              <label for="photo">Ambil Photo</label>
              <input id="photo" type="file" @change="handleFileChange" />
            </div>
            <div class="group-from">
              <label for="price_first">Harga Dasar Per Kilogram</label>
              <input
                type="text"
                id="price_first"
                name="price_first"
                readonly
                :value="displayPriceFirstStrika"
              />
            </div>
            <div class="group-from">
              <label for="location">Lokasi Penjemputan</label>
              <select @change="locationNow" name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button type="submit" class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
          <!-- karpet -->
          <form enctype="multipart/form-data" @submit.prevent="submitKarpet" id="form" v-else-if="currentForm == 'karpet'">
            <div class="group-from">
              <label for="photo">Ambil Photo</label>
              <input id="photo" type="file" @change="handleFileChange" />
            </div>
            <div class="group-from">
              <label for="price_first">Harga Dasar Per Meter</label>
              <input
                type="text"
                id="price_first"
                name="price_first"
                readonly
                :value="displayPriceFirst"
              />
            </div>
            <div class="group-from">
              <label for="ukuran">Ukuran Karpet</label>
              <select @change="handleSelectChange" name="ukuran" id="ukuran">
                <option value="">Pilih Pilih Ukuran</option>
                <option value="1x1">1 x 1</option>
                <option value="2x2">2 x 2</option>
                <option value="4+"> lebih dari 4 m</option>
              </select>
            </div>
            <div class="group-from">
              <label for="location">Lokasi Penjemputan</label>
              <select @change="locationNow" name="location" id="location">
                <option value="">Pilih Lokasi</option>
                <option id="openModalBtnLokasiDefault" value="default">
                  Lokasi Default
                </option>
                <option id="openModalBtnLokasiNow" value="localnow">Lokasi Terkini</option>
              </select>
            </div>
            <div class="group-from">
              <div class="button-group-flex">
                <button @click.prevent="closeModal" class="btn btn-batal">Batal</button>
                <button type="submit" class="btn btn-kirim">Pesan</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import Swal from 'sweetalert2';
export default {
  name: "HomeViewComponent",
  created() {},
  data() {
    return {
      isModalOpen: false,
      currentForm: '',
      popupTitle: '',
      from:{
        photo:null,
        status:null,
        priceFirst:null,
        locationDefault:null,
        locationNow:null,
        weightFirst:null,
        costumer:null,
        paket:null,
        valuePaket:null
      },
      priceFristReguler:8000,
      priceFristStrika:4000,
      weightFristReguler:1,
      paketExpress:'4 jam',
      paketKilat:'2 jam',
      paketStrika:'reguler',
      
    };
  },
  props: {},
  methods: {
    ...mapActions(["laundry/actionAddLaundry"]),
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
                this.from.locationNow =[latitude,longitude]
              },
              error => {
                // Mendapatkan posisi geografis pengguna gagal
                this.from.locationNow =[-7.4797342,110.2176941]
                console.error('Error getting location:', error);
              }
            );
          } else {
            console.error('Geolocation is not supported by this browser.');
          }
     
    },
    handleFileChange(event) {
      this.from.photo = event.target.files[0];
      console.log('Selected File:', this.from.photo);
    },
    handleSelectChange(event) {
      this.from.valuePaket = event.target.value;
      console.log('Selected Option:', this.from.valuePaket);
    },
    //submit
    submitReguler(){
      this.from.priceFirst =this.displayPriceFirst
      this.from.weightFirst = this.weightFristReguler
      this.from.paket =this.currentForm
      this.from.costumer = this.getUsers
      this.from.status ='p'
      this.$store.dispatch('laundry/actionAddLaundry',{payload:{
        photo:this.from.photo,
        status:this.from.status,
        priceFirst:this.from.priceFirst,
        locationDefault:this.from.locationDefault,
        locationNow:this.from.locationNow,
        weightFirst:this.from.weightFirst,
        costumer:this.from.costumer,
        paket:this.from.paket,
        valuePaket:this.from.valuePaket}})
        .then((res)=>{
          console.log(res)
          Swal.fire({
            title: 'Sukses',
            text: `${res.data.message}`,
            icon: 'success',
          }).then(() => {
            this.closeModal()
          });
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    submitExpress(){
      this.from.priceFirst =this.displayPriceFirst
      this.from.weightFirst = this.weightFristReguler
      this.from.paket =this.currentForm
      this.from.costumer = this.getUsers
      this.from.status ='d'
      this.from.valuePaket=this.paketExpress
      this.$store.dispatch('laundry/actionAddLaundry',{payload:{
        photo:this.from.photo,
        status:this.from.status,
        priceFirst:this.from.priceFirst,
        locationDefault:this.from.locationDefault,
        locationNow:this.from.locationNow,
        weightFirst:this.from.weightFirst,
        costumer:this.from.costumer,
        paket:this.from.paket,
        valuePaket:this.from.valuePaket}})
        .then((res)=>{
          console.log(res)
          Swal.fire({
            title: 'Sukses',
            text: `${res.data.message}`,
            icon: 'success',
          }).then(() => {
            this.closeModal()
          });
        })
        .catch((error)=>{
          console.log(error)
        })
      // console.log(this.from);
    },
    submitKilat(){
      this.from.priceFirst =this.displayPriceFirst
      this.from.weightFirst = this.weightFristReguler
      this.from.paket =this.currentForm
      this.from.costumer = this.getUsers
      this.from.status ='d'
      this.from.valuePaket=this.paketKilat
      this.$store.dispatch('laundry/actionAddLaundry',{payload:{
        photo:this.from.photo,
        status:this.from.status,
        priceFirst:this.from.priceFirst,
        locationDefault:this.from.locationDefault,
        locationNow:this.from.locationNow,
        weightFirst:this.from.weightFirst,
        costumer:this.from.costumer,
        paket:this.from.paket,
        valuePaket:this.from.valuePaket}})
        .then((res)=>{
          console.log(res)
          Swal.fire({
            title: 'Sukses',
            text: `${res.data.message}`,
            icon: 'success',
          }).then(() => {
            this.closeModal()
          });
        })
        .catch((error)=>{
          console.log(error)
        })
      // console.log(this.from);
    },
    submitStrika(){
      this.from.priceFirst =this.displayPriceFirst
      this.from.weightFirst = this.weightFristReguler
      this.from.paket =this.currentForm
      this.from.costumer = this.getUsers
      this.from.status ='d'
      this.from.valuePaket=this.paketStrika
      this.$store.dispatch('laundry/actionAddLaundry',{payload:{
        photo:this.from.photo,
        status:this.from.status,
        priceFirst:this.from.priceFirst,
        locationDefault:this.from.locationDefault,
        locationNow:this.from.locationNow,
        weightFirst:this.from.weightFirst,
        costumer:this.from.costumer,
        paket:this.from.paket,
        valuePaket:this.from.valuePaket}})
        .then((res)=>{
          console.log(res)
          Swal.fire({
            title: 'Sukses',
            text: `${res.data.message}`,
            icon: 'success',
          }).then(() => {
            this.closeModal()
          });
        })
        .catch((error)=>{
          console.log(error)
        })

      //  console.log(this.from);
    },
    submitKarpet(){
      this.from.priceFirst =this.displayPriceFirst
      this.from.weightFirst = this.weightFristReguler
      this.from.paket =this.currentForm
      this.from.costumer = this.getUsers
      this.from.status ='d'
      this.$store.dispatch('laundry/actionAddLaundry',{payload:{
        photo:this.from.photo,
        status:this.from.status,
        priceFirst:this.from.priceFirst,
        locationDefault:this.from.locationDefault,
        locationNow:this.from.locationNow,
        weightFirst:this.from.weightFirst,
        costumer:this.from.costumer,
        paket:this.from.paket,
        valuePaket:this.from.valuePaket}})
        .then((res)=>{
          console.log(res)
          Swal.fire({
            title: 'Sukses',
            text: `${res.data.message}`,
            icon: 'success',
          }).then(() => {
            this.closeModal()
          });
        })
        .catch((error)=>{
          console.log(error)
        })

      //  console.log(this.from);
    },
  },
  computed:{
    displayPriceFirst:{
      get(){return this.priceFristReguler;},
      set(value){console.log(value)}
    },
    displayPriceFirstStrika:{
      get(){return this.priceFristStrika;},
      set(value){console.log(value)}
    },
    displayPaketExpress:{
      get(){return this.paketExpress},
      set(value){console.log(value);}
    },
    ...mapGetters(['getUsers'])
  }
};
</script>

<style lang="scss" scoped></style>