<template>
  <div class="container-register">
        <div class="contain-form">
            <div class="banner">
                <img src="../../../assets/gambar/iconic.png" alt="">
            </div>
            <form action="#">
                <div class="form-group">
                    <label class="form-label" for="">Name</label>
                    <input type="text" class="form-control" name="email"/>
                </div>
                <div class="form-group">
                    <label class="form-label" for="">Email</label>
                    <input type="email" class="form-control" name="email"/>
                </div>
                <div class="form-group">
                    <label class="form-label" for="">Password</label>
                    <input type="password" class="form-control" name="password"/>
                </div>
                <div class="form-group">
                    <label class="form-label" for="">Confirm Password</label>
                    <input type="password" class="form-control" name="password"/>
                </div>
                <div class="form-group display-button">
                    <button class="btn-submit">Daftar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "RegisterView",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/index.scss";
</style>