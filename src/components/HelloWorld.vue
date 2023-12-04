<template>
  <div>
    <div class="">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img
              src="https://fintag.id/img/fintag_empower.jpeg"
              style="height: 74px; max-height: 74px"
              alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Ajuan Pinjaman</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Beri Pinjaman</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tentang Kami
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Tentang Perusahaan</a>
                  <a class="dropdown-item" href="#">Laporan Tahunan</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Profil tim FINTAG</a>
                  <a class="dropdown-item" href="#">Blog</a>
                  <a class="dropdown-item" href="#">Kegiatan</a>
                  <a class="dropdown-item" href="#">Hubungi Kami</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Laporan Tahunan</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kalkulator Pinjaman</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Masuk</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Daftar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-success text-white" href="#"
                  >Info TKB</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div>
      <CarouselImage></CarouselImage>
    </div>
    <!-- v-if="showContent" -->
    <div class="container scroll-content" >
      <WhatIsFintag />
    </div>
    <div class="container-fluid bg-light">
      <CaraKerja />
    </div>
    <div class="container-fluid bg-primary">
      <LayananKami />
    </div>
    <div class="container-fluid">
      <FooterSection />
    </div>
  </div>
</template>

<script>
import CarouselImage from "./CarouselImage.vue";
import WhatIsFintag from "./WhatIsFintag.vue";
import CaraKerja from "./CaraKerja.vue"
import LayananKami from "./LayananKami.vue"
import FooterSection from "./FooterSection"
export default {
  components: { CarouselImage, WhatIsFintag, CaraKerja, LayananKami, FooterSection },
  data() {
    return {
      showContent: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const scrollThreshold = 200;
      this.showContent = scrollPosition > scrollThreshold;
    },
  },
};
</script>

<style lang="css">
.nav-item {
  font-size: 16px;
  font-weight: 500;
  color: #4a4a4a;
}

.scroll-content {
  padding: 20px;
}
</style>
