<!-- eslint-disable quotes -->
<template>
  <section class="container home">
    <div class="header">
      <h1 class="main-header">THE LEADING JAVASCRIPT COMPANY</h1>
      <div class="header-content text-size text-line-high">
        <p>
          We provide you with additional technical capacity to power-up your
          digital transformation journeys with our teams of first-class
          engineers and consultants.
        </p>
        <p>
          Full Stack JavaScript Consultants ready to work with you and your
          teams.
        </p>
        <p>
          Join a team of Fullstack Javascript Experts who are passionate about
          being the best in class.
        </p>
      </div>
      <button class="buttons light-btn">join the elite</button>
    </div>
  </section>
  <section class="sponsored slider">
    <h2>We are trusted by many leading brands, startups & scaleups</h2>
    <div class="slider-container">
      <Carousel
        :items-to-show="5"
        :autoplay="2000"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="slide in 10" :key="slide">
          <!--
        <div class="carousel__item">
          {{ slide }}
        </div>
        -->
          <div class="carousel__item">
            <img src="../assets/images/Facebook_Logo_(2019).png" alt="" />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>

      <div class="slider-arrow">
        <span class="carousel__arrow carousel__next-custom" @click="next">
          <img src="../assets/images/chevron-right-solid-w.svg" alt="" />
        </span>
        <span class="carousel__arrow carousel__prev-custom" @click="prev">
          <img src="../assets/images/chevron-left-solid-w.svg" alt="" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

// eslint-disable-next-line
/* eslint-disable */
/**
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // eslint-disable-next-line quotes
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
*/
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
});
</script>
