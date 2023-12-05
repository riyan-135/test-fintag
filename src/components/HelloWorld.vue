<template>
  <div>
    <div class="position-relative">
      <nav
        class="navbar navbar-expand-lg position-fixed fixed-top w-100"
        :class="{ 'navbar-scrolled shadow': isScrolled }"
      >
        <div class="container">
          <a class="navbar-brand mr-5" href="#"
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

          <div
            class="collapse navbar-collapse d-flex justify-content-end align-items-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  :class="{ scrolled: isScrolled }"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pinjam
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Ajuan Pinjaman</a>
                  <a class="dropdown-item" href="#">Beri Pinjaman</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Kalkulator Pinjaman</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  :class="{ scrolled: isScrolled }"
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
                <a class="nav-link" :class="{ scrolled: isScrolled }" href="#"
                  >FAQ</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ scrolled: isScrolled }" href="#"
                  >Laporan Tahunan</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ scrolled: isScrolled }" href="#"
                  >Masuk</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ scrolled: isScrolled }" href="#"
                  >Daftar</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="jumbotron jumbotron-fluid background">
        <div class="container" style="margin-top: 62px">
          <h1 class="display-4 mt-5 text-white"></h1>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <p class="lead text-white ml-5 mt-5">
                Perkembangan Dunia Teknologi Digital semakin pesat saat ini
                dengan menjadi salah satu alat yang dapat membantu kebutuhan
                Manusia. Peran salah satunya adalah membantu kelangsungan
                berbisnis terutama dalam industri Layanan Pendanaan Bersama
                Berbasis Teknologi Informasi (LPBBTI).
                <br />
                Dengan semakin pesatnya teknologi digital, FINTAG pun hadir
                untuk masyarakat sebagai salah satu solusi alternatif dalam
                mengakses layanan keuangan di Indonesia.
              </p>
              <div class="d-flex">
                <button @click="showVideo()" class="btn btn-primary ml-5">
                  <i class="fa fa-play"></i> Play Video
                </button>
                <a class="nav-link btn btn-success text-white ml-3" href="#"
                  >Info TKB</a
                >
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <img
                src="../../public/img/img-4.png"
                class="position-relative mr-5 mb-5"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container scroll-content">
      <WhatIsFintag />
    </div>
    <div class="container-fluid" style="background-color: darkgrey; height: 14rem;">
      <div class="">
        <div class="px-5 py-5">
          <div class="row mt-5">
            <div class="col-md-2 col-sm-12 hidden" ref="card0">
              <img
                src="https://fintag.id/img/lpmukp-logo.png"
                class="img"
                alt=""
              />
            </div>
            <div class="col-md-2 col-sm-12 hidden" ref="card1">
              <img src="https://fintag.id/img/bni-logo.png" class="img" alt="" />
            </div>
            <div class="col-md-2 col-sm-12 hidden" ref="card2">
              <img
                src="https://fintag.id/img/peruri-logo.png"
                class="img"
                alt=""
              />
            </div>
            <div class="col-md-2 col-sm-12 hidden" ref="card3">
              <img
                src="https://fintag.id/img/pefindo-logo.png"
                class="img relative mb-5"
                style="position: relative; bottom: 45px"
                alt=""
              />
            </div>
            <div class="col-md-2 col-sm-12 hidden" ref="card4">
              <img
                src="https://fintag.id/img/simasinsurtech-logo-black.png"
                class="img"
                alt=""
              />
            </div>
            <div class="col-md-2 col-sm-12 hidden" ref="card5">
              <img
                src="https://fintag.id/img/colmitra.png"
                class="img"
                alt=""
                style="position: relative; bottom: 26px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-light cara-kerja">
      <CaraKerja />
    </div>
    <div class="container-fluid mt-5">
      <LayananKami />
    </div>
    <div class="container-fluid">
      <FooterSection />
    </div>

    <div
      v-if="modalShow"
      class="modal fade show"
      tabindex="-1"
      role="dialog"
      style="display: block"
      aria-labelledby="videoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="videoModalLabel"></h5>
            <button
              type="button"
              class="close"
              @click="hideVideo"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Replace 'your-video.mp4' with the actual path to your video file -->
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                width="560"
                height="290"
                style="width: 800px; height: 450px"
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/35Piao8rChM?si=5WYsgG2CRLWXFKzR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhatIsFintag from "./WhatIsFintag.vue";
import CaraKerja from "./CaraKerja.vue";
import LayananKami from "./LayananKami.vue";
import FooterSection from "./FooterSection";
export default {
  components: {
    WhatIsFintag,
    CaraKerja,
    LayananKami,
    FooterSection,
  },
  data() {
    return {
      isScrolled: false,
      modalShow: false,
      isVisible: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    for (let i = 0; i < 20; i++) {
      const card = this.$refs[`card${i}`];
      if (card) {
        observer.observe(card);
      }
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },

    showVideo() {
      this.modalShow = true;
    },
    hideVideo() {
      this.modalShow = false;
    },
  },
};
</script>

<style lang="css">
.nav-link {
  font-size: 16px;
  font-weight: 500;
  color: white;
}

.scroll-content {
  padding: 20px;
}

body {
  margin: 0;
  padding: 0;
}

.navbar-scrolled {
  background-color: white;
}

.scrolled {
  color: #4a4a4a;
}

.background {
  background-image: url("../../public/img/5329108.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 40rem;
}

.img {
  height: auto;
  max-width: 100%;
}

.hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.visible {
  opacity: 1;
  transform: translateY(0);
}
.owl-item{
  width: 350px !important;
}
</style>
