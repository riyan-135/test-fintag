<template>
  <div>
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in image" :key="'item-' + item.id" :class="{'carousel-item': true, 'active' : index === active}">
          <img
            :src="item.src"
            class="d-block w-100"
            alt=""
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleFade"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleFade"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            image: [
                {id: 1, src: 'https://fintag-production.oss-ap-southeast-5.aliyuncs.com/banner/fintag_2023.jpg'},
                {id: 2, src: 'https://fintag-production.oss-ap-southeast-5.aliyuncs.com/banner/apaitufintag.jpg'},
                {id: 3, src: 'https://fintag-production.oss-ap-southeast-5.aliyuncs.com/banner/3434.jpg'},
            ],
            active: 0
        }
    },

    methods: {
        setActive(index) {
            let active = index;
            
            if(index === this.pictures.length) active = 0;
            else if(index === -1) active = this.pictures.length - 1;
            
            this.active = active;
        }
    }
}
</script>
