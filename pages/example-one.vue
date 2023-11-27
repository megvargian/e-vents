<template>
  <section class="example-one relative h-full flex m-auto w-[500px]">
    <Swiper :slides-per-view="1" :loop="false">
      <SwiperSlide>
        <div
          class="page-start h-full w-full relative items-center flex justify-center"
        >
          <h2 class="font-amsterdam text-center text-2xl bg-white">
            Dr. George
            <p class="font-greatvibe"><br />& <br /></p>
            Mrs. Randa Rammouz
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
          <h2 class="font-amsterdam text-center text-2xl bg-white pt-60">
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
    </Swiper>
  </section>
</template>

<script setup lang="ts"></script>
