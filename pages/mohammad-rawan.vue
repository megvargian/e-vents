<template>
  <section
    class="example-two relative flex m-auto full-custom-height overflow-hidden"
  >
    <Swiper class="mainSwiper" :options="swiperOprions">
      <SwiperSlide>
        <div
          class="page-start h-full w-full relative flex items-center justify-start"
        >
            <img
              class="absolute top-0 w-full h-auto left-0"
              src="../assets/images/mohammad-rawan/curtains-slide-1.svg"
              alt="certains-slide-1"
            />
            <div class="block">
              <h1 class="w-full pl-10 text-left text-[3.5rem] leading-none">Welcome<br />to our <br /><span class="text-[#9D2A31]">love</span><br />story</h1>
            </div>
            <div class="block absolute bottom-40 ssm:bottom-[12rem] msm:bottom-[15rem] lsm:bottom-60 right-0 pr-5">
              <p class="text-[12px]">Swipe for more details</p>
              <img class="w-[50px] h-[20px] float-right" src="../assets/images/mohammad-rawan/arrow-right-cropped.svg">
            </div>
            <img
              class="absolute bottom-0 w-full h-auto left-0"
              src="../assets/images/mohammad-rawan/bottom-background-1.svg"
              alt="certains-slide-1"
            />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <h1>second page</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <h1>third page</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <h1>fourth page</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <h1>fifth page</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <div
            class="rsvpMain"
            :class="[
              alreadySubmited ? 'hidden' : '',
              transition ? ' page-enter-from hidden' : '',
            ]"
          >
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
                      <option v-for="numbers in numberOfPeopleSet" :value="numbers">{{ numbers }}</option>
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
            :href="googleCalendar"
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
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative">
          <h1>final page</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";
const route = useRoute();
const numberOfPeopleSet = route.query.numpp ? Number(route.query.numpp) : 4;
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
const googleCalendar = ref(
  `https://www.google.com/calendar/render?action=TEMPLATE&text=Mohammad%20And%20Rawan's%20Wedding&dates=20240629T163000Z/20240629T230000Z&details=Let's%20toast%20to%20love%20,%20laughter%20,%20and%20happily%20ever%20after%20!%20&location=%20The%20villa%20,%20WHPR+QJH%20,%20Dbaye%20,%20Lebanon&sf=true&output=xml`
);
onMounted(() => {
  console.log(numberOfPeopleSet)
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
    HtmlBody: `<p>Name/Names: ${
      showNumberOfPeopleAndNames.value ? rsvp.value.names : `there's no name`
    }</p><p>
          Number of Guests: ${
            showNumberOfPeopleAndNames.value
              ? String(rsvp.value.numberOfPeople)
              : "0"
          }</p><p>
          Attending: ${rsvp.value.attendence}</p>`,
    TextBody: `Name/Names: ${
      showNumberOfPeopleAndNames.value ? rsvp.value.names : `there's no name`
    }
          Number of Guests: ${
            showNumberOfPeopleAndNames.value
              ? String(rsvp.value.numberOfPeople)
              : "0"
          }
          Attending: ${rsvp.value.attendence}`,
  };
  const { data, refresh, error } = useFetch("/.netlify/functions/sendEmails", {
    method: "POST",
    body: info,
    server: false,
    immediate: false,
  });
  await refresh();

  const config = data as {
    value: {
      ErrorCode: Number;
      Message: string;
      MessageID: string;
      SubmittedAt: string;
      To: string;
    };
  };
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
