<template>
  <section
    class="example-one relative flex m-auto sm:w-[500px] w-100 full-custom-height"
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
            class="w-[180px] absolute bottom-10 left-0 z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-0 left-[43%]" />
          <Wave :class="`h-[150px]`" />
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
            class="w-[180px] absolute bottom-20 left-40 z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-0 left-[43%]" />
          <Wave :class="`h-[150px]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="text-2xl font-amsterdam">CJ</h5>
          </div>
          <div class="date flex justify-center align-middle mt-4 mb-5">
            <h3 class="font-peaxBold text-3xl text-center">
              Monday <br />
              August 14th <br />
              at 6:00 pm
            </h3>
          </div>
          <div class="relative w-full h-[19rem]">
            <img
              class="w-full h-[19rem]"
              src="../assets/images/church.svg"
              alt="church"
            />
            <p
              class="font-peaxBold text-xl text-center absolute left-[32%] bottom-[7%]"
            >
              Where it all began
            </p>
          </div>
          <img
            class="w-[180px] absolute bottom-[27%] left-[50%] z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-4 left-[43%]" />
          <div class="bg-[#002e51] absolute h-[15rem] bottom-0 left-0 w-full">
            <h4
              class="font-peaxBold text-2xl text-center text-white mt-10 flex justify-center"
            >
              Saint Joseph School <br />
              - Cornet Chehwan
            </h4>
            <a
              class="font-peaxBold text-2xl text-center text-white mt-2 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-56 py-2"
              href="https://goo.gl/maps/5FpasbGdnv6aP63Z7"
              target="_blank"
              >View on map</a
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="text-2xl font-amsterdam">CJ</h5>
          </div>
          <div class="date flex justify-center align-middle mt-4 mb-5">
            <h3 class="font-peaxBold text-3xl text-center">
              Followed by a dinner <br />
              @ Aurelia Venue,<br />Bhersaf
            </h3>
          </div>
          <a
            class="font-peaxBold text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-56 py-2"
            href="https://goo.gl/maps/5FpasbGdnv6aP63Z7"
            target="_blank"
            >View on map</a
          >
          <img
            class="w-100 h-100 pt-32"
            src="../assets/images/venue.png"
            alt="venue"
          />
          <arrow-right class="absolute bottom-[1.5%] left-[43%]" />
          <Wave :class="`h-[150px]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="text-2xl font-amsterdam">CJ</h5>
          </div>
          <div class="date flex justify-center align-middle mt-4 mb-5">
            <h3 class="font-peaxBold text-3xl text-center pt-12">
              For those who desire:
            </h3>
          </div>
          <div class="flex align-middle justify-center items-center pt-32">
            <img
              class="w-32 h-32"
              src="../assets/images/whish.svg"
              alt="whish"
            />
            <h3
              class="font-peaxBold text-3xl text-center justify-center flex items-center ml-5"
            >
              Whish account: <br />
              20547435-03
            </h3>
          </div>
          <img
            class="w-[180px] absolute bottom-20 left-40 z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-[1.5%] left-[43%]" />
          <Wave :class="`h-[150px]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="text-2xl font-amsterdam">CJ</h5>
          </div>
          <div
            class="rsvpMain"
            :class="[
              alreadySubmited ? 'hidden' : '',
              transition ? ' page-enter-from hidden' : '',
            ]"
          >
            <div class="date flex justify-center align-middle mt-4 mb-5">
              <h3 class="font-peaxBold text-3xl text-center pt-12">
                Kindly R.S.V.P <br />
                Before July 30th
              </h3>
            </div>
            <div class="w-full">
              <form @submit.prevent="submitRsvp">
                <div class="block w-full">
                  <label
                    class="block font-peaxBold text-[#66c1eb] text-2xl py-2 px-4"
                    for="names"
                    >Name(s)</label
                  >
                  <input
                    class="rounded-[30px] font-peaxBold text-[#707070] text-xl py-3 px-5 w-full border border-solid border-gray-700"
                    type="text"
                    v-model="rsvp.names"
                    required
                  />
                </div>
                <div>
                  <label
                    class="block font-peaxBold text-[#66c1eb] text-2xl py-2 px-4"
                    for="numberOfPeople"
                    >Number of people</label
                  >
                  <input
                    class="rounded-[30px] font-peaxBold text-[#707070] text-xl py-3 px-5 w-full border border-solid border-gray-700"
                    type="number"
                    v-model="rsvp.numberOfPeople"
                    minlength="1"
                    min="1"
                    max="4"
                    required
                  />
                </div>
                <div>
                  <label
                    class="block font-peaxBold text-[#66c1eb] text-2xl py-2 px-4"
                    for="attendence"
                    >Attanding</label
                  >
                  <div class="relative">
                    <select
                      class="appearance-none rounded-[30px] font-peaxBold text-[#707070] text-xl py-3 px-5 w-full border border-solid border-gray-700 bg-transparent"
                      id="attendence"
                      required
                      v-model="rsvp.attendence"
                    >
                      <option class="w-[500px]" value="yes" selected>
                        Yes
                      </option>
                      <option class="w-full" value="no">no</option>
                    </select>
                    <div
                      class="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none w-10"
                    >
                      <arrow-down />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    class="font-peaxBold text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-64 py-3"
                    :disabled="loading"
                    type="submit"
                  >
                    <img
                      v-if="loading"
                      src="../assets/images/loading.svg"
                      class="animate-spin loading-spinner w-8 h-8 flex m-auto"
                      alt="loading"
                    />
                    <span v-else> RSVP </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            class="thankYou"
            :class="[
              alreadySubmited ? 'block' : 'hidden',
              transition ? '' : 'page-leave-to hidden',
            ]"
          >
            <div class="flex justify-center align-middle mt-4 mb-5">
              <h3 class="font-peaxBold text-3xl text-center pt-12">
                Thank you <br />
                Kol khara
              </h3>
            </div>
          </div>
          <arrow-right class="absolute bottom-[1.5%] left-[43%]" />
          <Wave :class="`h-[150px]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="text-2xl font-amsterdam">CJ</h5>
          </div>
          <div class="date flex justify-center align-middle mt-4 mb-5">
            <h3 class="font-peaxBold text-3xl text-center pt-24">
              See you there!<br />&amp;<br />Cheers to our happy <br />
              ever after!
            </h3>
          </div>
          <img
            class="w-full h-[25rem] absolute left-[20%] bottom-[5%] z-10"
            src="../assets/images/vacation.svg"
            alt="vacation"
          />
          <div
            class="bg-[#002e51] absolute h-[13rem] bottom-0 left-0 w-full"
          ></div>
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
  allowSlidePrev: false,
};

const rsvp = ref({
  names: "",
  numberOfPeople: 0,
  attendence: "",
});
const loading = ref(false);
const transition = ref(false);
const rsvpCookie = useCookie<{ value: string }>("0");
const alreadySubmited = ref(false);
onMounted(() => {
  if (rsvpCookie.value) {
    if (rsvpCookie.value.value === "1") {
      alreadySubmited.value = true;
    }
  }
  if (alreadySubmited.value) {
    transition.value = true;
  }
  console.log(alreadySubmited.value);
});

const submitRsvp = async () => {
  loading.value = true;
  const { data, refresh, error } = useFetch("/rsvp1", {
    baseURL: "https://sarpysevents.com/",
    method: "POST",
    body: {
      title: "this is a test",
      name: rsvp.value.names,
      number_guests: String(rsvp.value.numberOfPeople),
      isattending: rsvp.value.attendence,
    },
    server: false,
    immediate: false,
  });
  await refresh();
  if (error.value) {
    console.error("Error:", error);
  } else {
    loading.value = false;
    alreadySubmited.value = true;
    transition.value = true;
    rsvpCookie.value = { value: "1" };
  }
};
</script>
