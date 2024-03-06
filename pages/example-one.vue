<template>
  <section
    class="example-one relative flex m-auto full-custom-height overflow-hidden"
  >
    <Swiper :options="swiperOprions">
      <SwiperSlide>
        <div
          class="page-start h-full w-full relative items-center flex justify-center"
        >
          <h2
            class="font-amsterdam text-center ssm:text-base msm:text-2xl bg-white add-animation"
          >
            <span>Dr.</span> <span>George</span>
            <span>
              <p class="font-greatvibe"><br />&<br /></p>
            </span>
            <span>Mrs. </span><span>Randa</span> <span>Rammouz</span>
          </h2>
          <img
            class="w-[140px] absolute bottom-10 left-0 z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-0 left-[43%]" />
          <Wave :class="`ssm:h-[9rem] msm:h-[10.6rem]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <h2
            class="font-amsterdam text-center ssm:text-base msm:text-2xl bg-white md:pt-60 sm:pt-16 pt-8"
          >
            Samir
            <span class="font-greatvibe">&</span>
            Lily RammouZ
          </h2>
          <h2
            class="font-amsterdam text-center ssm:text-base msm:text-2xl bg-white pt-12"
          >
            Dr. Rebel
            <span class="font-greatvibe">&</span>
            Josiane Hanna
          </h2>
          <div class="flex justify-between items-center m-0">
            <div
              class="mx-3 font-peaxLight ssm:text-base msm:text-xl text-center p-8"
            >
              <h6>Request the honor of your presence at the wedding</h6>
              <h6>ceremony of their children</h6>
            </div>
          </div>
          <h1
            class="font-amsterdam font-bold ssm:text-2xl msm:text-3xl text-center"
          >
            Chris
            <span class="font-greatvibe font-semi-bold">&</span>
            Jessica
          </h1>
          <img
            class="w-[140px] absolute left-40 z-10 custom-buttom"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-0 left-[43%]" />
          <Wave :class="`ssm:h-[9rem] msm:h-[10.6rem]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="ssm:text-base msm:text-2xl font-amsterdam">CJ</h5>
          </div>
          <div class="date flex justify-center align-middle mt-4 mb-5">
            <h3 class="font-peaxBold ssm:text-xl msm:text-3xl text-center">
              Monday <br />
              August 14th <br />
              at 6:00 pm
            </h3>
          </div>
          <div class="relative w-full h-[19rem]">
            <img
              class="w-full custom-church-height"
              src="../assets/images/church.svg"
              alt="church"
            />
            <p
              class="font-peaxBold ssm:text-base msm:text-xl text-center absolute left-[32%] bottom-[7%]"
            >
              Where it all began
            </p>
          </div>
          <img
            class="w-[140px] absolute bottom-[30%] left-[50%] z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-4 left-[43%]" />
          <div
            class="bg-[#002e51] absolute custom-height bottom-0 left-0 w-full"
          >
            <h4
              class="font-peaxBold ssm:text-base msm:text-2xl text-center text-white custom-margin flex justify-center"
            >
              Saint Joseph School <br />
              - Cornet Chehwan
            </h4>
            <a
              class="font-peaxBold ssm:text-base msm:text-2xl text-center text-white mt-2 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-56 py-2"
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
            <h5 class="ssm:text-base msm:text-2xl font-amsterdam">CJ</h5>
          </div>
          <div class="date flex justify-center align-middle mt-4 mb-5">
            <h3 class="font-peaxBold ssm:text-xl msm:text-3xl text-center">
              Followed by a dinner <br />
              @ Aurelia Venue,<br />Bhersaf
            </h3>
          </div>
          <a
            class="font-peaxBold ssm:text-base msm:text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-56 py-2"
            href="https://goo.gl/maps/5FpasbGdnv6aP63Z7"
            target="_blank"
            >View on map</a
          >
          <img
            class="w-100 h-100 custom-padding ssm:pt-28"
            src="../assets/images/venue.png"
            alt="venue"
          />
          <arrow-right class="absolute bottom-4 left-[43%]" />
          <Wave :class="`ssm:h-[9rem] msm:h-[10.6rem]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="ssm:text-base msm:text-2xl font-amsterdam">CJ</h5>
          </div>
          <div class="date flex justify-center align-middle mt-4 mb-5">
            <h3
              class="font-peaxBold ssm:text-xl msm:text-3xl text-center pt-12"
            >
              For those who desire:
            </h3>
          </div>
          <div class="flex align-middle justify-center items-center pt-32">
            <img
              class="ssm:w-28 msm:w-32 ssm:w-28 msm:h-32"
              src="../assets/images/whish.svg"
              alt="whish"
            />
            <h3
              class="font-peaxBold ssm:text-xl msm:text-3xl text-center justify-center flex items-center ml-5"
            >
              Whish account: <br />
              20547435-03
            </h3>
          </div>
          <img
            class="w-[140px] absolute custom-buttom left-40 z-10"
            src="../assets/images/car.svg"
            alt="car"
          />
          <arrow-right class="absolute bottom-4 left-[43%]" />
          <Wave :class="`ssm:h-[9rem] msm:h-[10.6rem]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <ConfettiExplosion
            :particleCount="100"
            :particleSize="5"
            :duration="5000"
            :force="0.3"
            style="position: absolute; right: 0; top: 0"
            v-if="confettiExplosion"
          />
          <ConfettiExplosion
            :particleCount="100"
            :particleSize="5"
            :duration="5000"
            :force="0.3"
            style="position: absolute; left: 0; top: 0"
            v-if="confettiExplosion"
          />
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="ssm:text-base msm:text-2xl font-amsterdam">CJ</h5>
          </div>
          <div
            class="rsvpMain"
            :class="[
              alreadySubmited ? 'hidden' : '',
              transition ? ' page-enter-from hidden' : '',
            ]"
          >
            <div
              class="date flex justify-center align-middle ssm:mt-2 msm:mt-4 mb-5"
            >
              <h3
                class="font-peaxBold ssm:text-xl msm:text-3xl text-center pt-12"
              >
                Kindly R.S.V.P <br />
                Before July 30th
              </h3>
            </div>
            <div class="w-full px-2">
              <form @submit.prevent="submitRsvp">
                <div>
                  <label
                    class="block font-peaxBold text-[#66c1eb] ssm:text-base msm:text-2xl py-2 px-4"
                    for="attendence"
                    >Attending</label
                  >
                  <div class="relative">
                    <select
                      class="appearance-none rounded-[30px] font-peaxBold text-[#707070] ssm:text-base msm:text-xl ssm:py-2 msm:py-3 ssm:px-3 msm:px-5 custom-input-padding w-full border border-solid border-gray-700 bg-transparent"
                      id="attendence"
                      required
                      v-model="attendence"
                    >
                      <option value="yes" selected>Yes</option>
                      <option value="no">no</option>
                    </select>
                    <div
                      class="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none w-10"
                    >
                      <arrow-down />
                    </div>
                  </div>
                </div>
                <div
                  class="block w-full"
                  :class="
                    !showNumberOfPeopleAndNames ? `opacity-30` : `opacity-100`
                  "
                >
                  <label
                    class="block font-peaxBold text-[#66c1eb] ssm:text-base msm:text-2xl py-2 px-4"
                    for="names"
                    >Name(s)</label
                  >
                  <input
                    class="rounded-[30px] font-peaxBold text-[#707070] ssm:text-base msm:text-xl ssm:py-2 msm:py-3 ssm:px-3 msm:px-5 custom-input-padding w-full border border-solid border-gray-700"
                    type="text"
                    v-model="rsvp.names"
                    :disabled="!showNumberOfPeopleAndNames"
                  />
                </div>
                <div
                  :class="
                    !showNumberOfPeopleAndNames ? `opacity-30` : `opacity-100`
                  "
                >
                  <label
                    class="block font-peaxBold text-[#66c1eb] ssm:text-base msm:text-2xl py-2 px-4"
                    for="numberOfPeople"
                    >Number of people</label
                  >
                  <div class="relative">
                    <select
                      class="appearance-none rounded-[30px] font-peaxBold text-[#707070] ssm:text-base msm:text-xl ssm:py-2 msm:py-3 ssm:px-3 msm:px-5 custom-input-padding w-full border border-solid border-gray-700 bg-transparent outline-none focus:outline-none"
                      v-model="rsvp.numberOfPeople"
                      :disabled="!showNumberOfPeopleAndNames"
                    >
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
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
                    class="font-peaxBold ssm:text-base msm:text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-56 py-2"
                    :disabled="loading"
                    type="submit"
                  >
                    <img
                      v-if="loading"
                      src="../assets/images/loading.svg"
                      class="animate-spin loading-spinner w-6 h-6 flex m-auto"
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
              </h3>
            </div>
          </div>
          <arrow-right class="absolute bottom-4 left-[43%]" />
          <Wave :class="`ssm:h-[9rem] msm:h-[10.6rem]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="ssm:text-base msm:text-2xl font-amsterdam">CJ</h5>
          </div>
          <a
            target="_blank"
            rel="noopener"
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220112T180000Z%2F20220112T200000Z&details=Learn%20all%20about%20the%20rules%20of%20the%20Motorway%20and%20how%20to%20access%20the%20fast%20lane.%0A%0Ahttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGridlock_%28Doctor_Who%29&location=New%20Earth&text=Welcome%20to%20the%20Motorway"
            class="font-peaxBold ssm:text-base msm:text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-64 py-3"
          >
            <span>Add to your Google Calendar</span>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://outlook.office.com/calendar/0/deeplink/compose?body=Learn%20all%20about%20the%20rules%20of%20the%20Motorway%20and%20how%20to%20access%20the%20fast%20lane.%0A%0Ahttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGridlock_%28Doctor_Who%29&enddt=2022-01-12T20%3A00%3A00%2B00%3A00&location=New%20Earth&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-01-12T18%3A00%3A00%2B00%3A00&subject=Welcome%20to%20the%20Motorway"
            class="font-peaxBold ssm:text-base msm:text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-64 py-3"
          >
            <span>Add to your Outlook Calendar</span>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://calendar.aol.com/?desc=Learn%20all%20about%20the%20rules%20of%20the%20Motorway%20and%20how%20to%20access%20the%20fast%20lane.%0A%0Ahttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGridlock_%28Doctor_Who%29&dur=&et=20220112T190000Z&in_loc=New%20Earth&st=20220112T170000Z&title=Welcome%20to%20the%20Motorway&v=60"
            class="font-peaxBold ssm:text-base msm:text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-64 py-3"
          >
            <span>Add to your AOL Calendar</span>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://calendar.yahoo.com/?desc=Learn%20all%20about%20the%20rules%20of%20the%20Motorway%20and%20how%20to%20access%20the%20fast%20lane.%0A%0Ahttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGridlock_%28Doctor_Who%29&dur=&et=20220112T190000Z&in_loc=New%20Earth&st=20220112T170000Z&title=Welcome%20to%20the%20Motorway&v=60"
            class="font-peaxBold ssm:text-base msm:text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-64 py-3"
          >
            <span>Add to your Yahoo Calendar</span>
          </a>
          <arrow-right class="absolute bottom-4 left-[43%]" />
          <Wave :class="`ssm:h-[9rem] msm:h-[10.6rem]`" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div class="initilas flex justify-end align-end mt-4 mx-4">
            <h5 class="ssm:text-base msm:text-2xl font-amsterdam">CJ</h5>
          </div>
          <div class="date flex justify-center align-middle mt-4 mb-5">
            <h3
              class="font-peaxBold ssm:text-xl msm:text-3xl text-center pt-24"
            >
              See you there!<br />&amp;<br />Cheers to our happy <br />
              ever after!
            </h3>
          </div>
          <img
            class="w-full h-[25rem] absolute left-[20%] custom-last-page-buttom z-10"
            src="../assets/images/vacation.svg"
            alt="vacation"
          />
          <div
            class="bg-[#002e51] absolute custom-last-page-height bottom-0 left-0 w-full"
          ></div>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";

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
const attendence = ref("");
const rsvp = ref({
  names: "",
  numberOfPeople: 0,
  attendence: attendence,
});
const loading = ref(false);
const transition = ref(false);
const rsvpCookie = useCookie<{ value: string }>("0");
const alreadySubmited = ref(false);
const showNumberOfPeopleAndNames = ref(false);
const confettiExplosion = ref(false);
onMounted(() => {
  if (rsvpCookie.value) {
    if (rsvpCookie.value.value === "1") {
      alreadySubmited.value = true;
    }
  }
  if (alreadySubmited.value) {
    transition.value = true;
  }
});

watch(attendence, (newAttendence) => {
  if (newAttendence === "yes") {
    showNumberOfPeopleAndNames.value = true;
  } else {
    showNumberOfPeopleAndNames.value = false;
  }
});

const submitRsvp = async () => {
  loading.value = true;
  const info = {
    From: "sales@e-vents.me",
    To: "kouyoumdjianmike@gmail.com, chris.m.rammouz@gmail.com",
    Subject: "RSVP from E-vents",
    HtmlBody: `<p>Name/Names: ${showNumberOfPeopleAndNames.value
        ? rsvp.value.names
        : `there's no name`}</p><p>
        Number of Guests: ${showNumberOfPeopleAndNames.value
          ? String(rsvp.value.numberOfPeople)
          : "0"
        }</p><p>
        Attending: ${rsvp.value.attendence}</p>`,
    TextBody: `Name/Names: ${showNumberOfPeopleAndNames.value
        ? rsvp.value.names
        : `there's no name`}
        Number of Guests: ${showNumberOfPeopleAndNames.value
          ? String(rsvp.value.numberOfPeople)
          : "0"
        }
        Attending: ${rsvp.value.attendence}`,
  };
  const { data, refresh, error } = useFetch("/.netlify/functions/sendEmails", {
    method: 'POST',
    body: info,
    server: false,
    immediate: false,
  });
  await refresh();

  const config = data as {
    value: {
      ErrorCode: Number,
      Message: string,
      MessageID: string,
      SubmittedAt: string,
      To: string,
    }
  }
  if (error.value) {
    console.error("Error:", error);
    loading.value = false;
  } else {
    loading.value = false;
    alreadySubmited.value = true;
    transition.value = true;
    rsvpCookie.value = { value: "1" };
    await nextTick();
    confettiExplosion.value = true;
  }
};
</script>
