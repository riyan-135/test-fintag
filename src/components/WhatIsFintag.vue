<template>
  <div>
    <div class="mt-5 text-justify">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 hidden" ref="card0">
          <img src="../../public/img/img-5.png" alt="" />
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 hidden" ref="card1">
          <h1 class="text-center mt-5">Apa itu FINTAG?</h1>
          <p class="mt-3">
            FINTAG adalah platform Layanan Pendanaan Bersama Berbasis Teknologi
            Informasi yang mempertemukan peminjam (pelaku usaha UMKM) dengan
            pemberi pinjaman (Perorangan maupun Badan Usaha). FINTAG pun
            merupakan salah satu penyelenggara P2P lending yang kini telah
            melakukan adaptasi teknologi digital secara proper
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-6 col-md-6 col-sm-12 hidden" ref="card2">
            <h1 class="text-center mt-5">Fitur FINTAG?</h1>
            <ul style="list-style: circle" class="px-5">
        <li>E-KYC (Fitur untuk memvalidasi setiap pengguna dengan tepat)</li>
        <li>
          Credit Scoring (Fitur untuk mengukur tingkat resiko kredit yang
          melekat)
        </li>
        <li>
          Ringkasan Digital (Fitur informasi usaha yang dapat menjadi
          pertimbangan saat memberikan kredit)
        </li>
        <li>TTD digital (Fitur keabsahaan tanda tangan setiap pengguna)</li>
        <li>
          E-Contract (Fitur kepastian hukum dalam memberikan dan melakukan
          pinjaman kredit)
        </li>
        <li>Proteksi Asuransi Kredit Bagi Pemberi Pinjaman</li>
      </ul>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 hidden" ref="card3">
            <img src="../../public/img/img-6.png" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },

  mounted() {
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
};
</script>

<style lang="css">
p,
ul {
  font-size: 20px;
  font-weight: 500;
  color: #4a4a4a;
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
</style>
