<template>
  <section
    class="example-one relative flex m-auto sm:w-[500px] w-100 sm:h-[calc(var(--doc-height) - 56px)] h-[calc(100vh - 56px)]"
  >
    <Swiper :options="swiperOprions">
      <SwiperSlide>
        <div
          class="page-start h-full w-full relative items-center flex justify-center"
        >
          <h2
            class="font-amsterdam text-center text-2xl bg-white add-animation"
          >
            <span>Dr.</span> <span>George</span>
            <span>
              <p class="font-greatvibe"><br />&<br /></p>
            </span>
            <span>Mrs. </span><span>Randa</span> <span>Rammouz</span>
          </h2>
          <img
            class="w-[200px] absolute bottom-10 left-0 z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-0 left-[45%]" />
          <Wave />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <h2
            class="font-amsterdam text-center text-2xl bg-white md:pt-60 sm:pt-16 pt-8"
          >
            Samir
            <span class="font-greatvibe">&</span>
            Lily RammouZ
          </h2>
          <h2 class="font-amsterdam text-center text-2xl bg-white pt-12">
            Dr. Rebel
            <span class="font-greatvibe">&</span>
            Josiane Hanna
          </h2>
          <p class="font-peaxLight text-base p-8 text-center text-xl">
            Request the honor of your presence at the wedding ceremony of their
            children
          </p>
          <h1 class="font-amsterdam font-bold text-3xl text-center">
            Chris
            <span class="font-greatvibe font-semi-bold">&</span>
            Jessica
          </h1>
          <img
            class="w-[200px] absolute bottom-20 left-40 z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-0 left-[45%]" />
          <Wave />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-screen w-full relative">
          <h2 class="font-amsterdam">Mike Kouyoumdjian</h2>
          <arrow-right />
          <Wave />
        </div>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
const swiperOprions = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  navigation: true,
  SwiperPagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
};
</script>
