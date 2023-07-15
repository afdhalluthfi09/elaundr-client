// step 1: import sdk firebase dari situs resminya
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axios from "./store/axios";

// step 2: konfigurasi firebase
const firebaseConfig = {
    apiKey: "AIzaSyC3exjydwPaTCwTIqX6zOxnmDNaB-JEcII",
    authDomain: "e-laundry-client.firebaseapp.com",
    projectId: "e-laundry-client",
    storageBucket: "e-laundry-client.appspot.com",
    messagingSenderId: "547200687551",
    appId: "1:547200687551:web:5c04a31dc406b3af67550a",
};

// step 3: implement
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

// step 4: pemeriksaan token dari project firebase dengan memanggil getToken()
getToken(messaging, {
  vapidKey: "BJXNaNETK3BmmygbDb0SZ6gHts_XFtXj1FyRkUSiH4NvHIITjGw359OL2IMEMIV7Ckm0TjoGAoruAcsi9Xw2ybM",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("token :", currentToken);
      let data = JSON.parse(localStorage.getItem('data'));
      updateToken(currentToken,data.tokenId)
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log("No registration token available. Request permission to generate one.");
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

  async function updateToken(currentToken,tokenId) {
    try {
      await axios.post(`/webtoken-costumer/${tokenId}`,{fcm_token:currentToken}).then((respone)=>{console.log(respone.data);}).catch((error)=>console.log(error));
      // Pembaruan token berhasil
    } catch (error) {
      // Penanganan kesalahan jika pembaruan token gagal
      console.log(error);
    }
  }

export { app, messaging };