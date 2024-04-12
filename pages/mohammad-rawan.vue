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
            <h1 class="w-full pl-10 text-left text-[3.5rem] leading-none">
              Welcome<br />to our <br /><p class="text-[#9D2A31] set-moderline my-1 mt-5">love</p>story
            </h1>
          </div>
          <div
            class="block absolute bottom-[10.5rem] msm:bottom-[12rem] right-0 pr-5"
          >
            <p class="text-[12px]">Swipe for more details</p>
            <img
              class="w-[50px] h-[20px] float-right"
              src="../assets/images/mohammad-rawan/arrow-right-cropped.svg"
            />
          </div>
          <img
            class="absolute bottom-0 w-full h-auto left-0"
            src="../assets/images/mohammad-rawan/bottom-background-1.svg"
            alt="certains-slide-1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-cols-1 grid-rows-4">
          <img
            class="w-full h-auto left-0"
            src="../assets/images/mohammad-rawan/curtains-slide-2.svg"
            alt="certains-slide-2"
          />
          <div class="row-span-2">
            <h1 class="text-center set-moderline-bold text-[3rem]" style="line-height: 1.3;">
              Mohammad <br/>
              <span class="text-[#9D2A31]">and</span> <br />
              Rawan
            </h1>
            <p class="text-center mb-4 pt-7">are getting married on</p>
            <p class="text-center set-moderline font-bold text-[2rem]">29 June 2024</p>
          </div>
          <div class="relative">
            <img
              class="absolute bottom-[7.8rem] w-[7rem] h-auto right-0 z-10"
              src="../assets/images/mohammad-rawan/train-1.svg"
            >
            <img
              class="w-full bottom-0 fixed"
              src="../assets/images/mohammad-rawan/bottom-background-2.svg"
              alt="bottom-background-2"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid gird-cols-1 gird-rows-4">
          <img
            class="w-full"
            src="../assets/images/mohammad-rawan/curtains-slide-3.svg"
            alt="curtains-slide-3"
          >
          <div class="row-span-3 relative">
            <img
              class="absolute left-2 top-[-3rem] w-[7rem]"
              src="../assets/images/mohammad-rawan/cloud.svg"
              alt="cloud"
            >
            <p class="text-center text-[1.5rem]">We're delighted to invite you <br> to our wedding as we dance <br> our way into <span class="text-[#9D2A31] pl-2">forever</span></p>
            <!-- <img
              class="absolute right-[2rem] top-[12rem] w-[8rem] z-10"
              src="../assets/images/mohammad-rawan/cloud.svg"
              alt="cloud"
            >
            <img
              class="absolute right-[-2.5rem] top-[8rem] w-[14rem] z-10"
              src="../assets/images/mohammad-rawan/cloud.svg"
              alt="cloud"
            > -->
          </div>
          <div class="relative row-span-2">
            <img
              class="absolute left-0 bottom-[7.8rem] w-[12.4rem] h-auto z-10"
              src="../assets/images/mohammad-rawan/train-screen-2.svg"
              alt="train-screen-2"
            >
            <img
              class="w-full bottom-0 fixed"
              src="../assets/images/mohammad-rawan/bottom-background-3.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid gird-cols-1 gird-rows-4">
          <div class="row-span-2" style="height: fit-content;">
            <img
              class="w-full"
              src="../assets/images/mohammad-rawan/curtains-slide-4.svg"
              alt="curtains-slide-3"
            >
            <p class="text-center text-[2rem]">It all started <br><span class="text-[#9D2A31] pl-2">here</span></p>
          </div>
          <div class="relative row-span-2">
            <img
              class="absolute left-0 bottom-[6.5rem] w-full h-auto z-10"
              src="../assets/images/mohammad-rawan/train-station-slide-4.svg"
              alt="train-station-slide-4"
            >
            <img
              class="w-full bottom-0 fixed"
              src="../assets/images/mohammad-rawan/bottom-background-4.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid gird-cols-1 gird-rows-8">
          <div class="row-span-2">
            <img
              class="w-full fixed top-0"
              src="../assets/images/mohammad-rawan/curtains-slide-5.svg"
              alt="curtains-slide-3"
            >
          </div>
          <div class="mx-10">
            <img
              class="w-full"
              src="../assets/images/mohammad-rawan/calendar.svg"
              alt="calendar">
          </div>
          <div class="row-span-1 justify-center flex items-center">
            <img >
            <span class="text-[#9D2A31] text-[30px]">7:30 p.m</span>
          </div>
          <div class="row-span-1 justify-center flex items-center mb-10 pb-10">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.google.com/maps/dir//WHPR%2BQJH,+Dbaye/@33.9369145,35.509223,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151f3e4ba18470d1:0xfc7daaa40c837989!2m2!1d35.5916242!2d33.9369419?entry=ttu"
              class="set-arapey-regular text-[20px] text-center text-white bg-[#66c1e8] rounded-full py-2 px-10"
            >
              Add to Calendar
            </a>
          </div>
          <div class="relative row-span-2">
            <img
              class="w-full bottom-0 fixed"
              src="../assets/images/mohammad-rawan/bottom-background-5.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid gird-cols-1 gird-rows-10">
          <div class="row-span-5">
            <img
              class="w-full fixed top-0"
              src="../assets/images/mohammad-rawan/curtains-slide-6.svg"
              alt="curtains-slide-3"
            >
          </div>
          <div class="text-center row-span-1">
            <h1 class="set-moderm text-[#9D2A31] text-[1.5rem] set-moderline">
              The Villa Vennue
            </h1>
            <br>
            <p class="text-black set-arapey-regular text-[1rem]">Dbayeh - Lebanon</p>
          </div>
          <div class="row-span-1" style="height: fit-content;">
            <img
              class="w-[100%]"
              src="../assets/images/mohammad-rawan/villa-vennue.svg"
              alt="villa-vennue">
          </div>
          <div class="row-span-1 justify-center flex items-center mb-10 pb-[5rem]" style="height: fit-content;">
            <a
              target="_blank"
              rel="noopener"
              :href="googleCalendar"
              class="set-arapey-regular text-[20px] text-center text-white bg-[#66c1e8] rounded-full py-2 px-[4rem]"
            >
              View on map
            </a>
          </div>
          <div class="relative row-span-2">
            <img
              class="absolute bottom-[7.75rem] left-[1.5rem] w-[4.5rem] z-10"
              src="../assets/images/mohammad-rawan/couple-screen-5.svg"
              alt="couple-screen-5">
            <img
              class="absolute bottom-[10rem] left-[0.25rem] w-[4.5rem]"
              src="../assets/images/mohammad-rawan/trees-screen-5.svg"
              alt="trees-screen-5"
            >
            <img
              class="w-full bottom-0 fixed"
              src="../assets/images/mohammad-rawan/bottom-background-6.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-cols-1 grid-rows-10 gap-1">
          <div class="row-span-2" style="height: fit-content;">
            <img
              class="w-full"
              src="../assets/images/mohammad-rawan/curtains-slide-7.svg"
              alt="curtains-slide-3"
            >
          </div>
          <div
            class="rsvpMain row-span-4 z-10"
            :class="[
              alreadySubmited ? 'hidden' : '',
              transition ? ' page-enter-from hidden' : '',
            ]"
          >
            <div class="w-full px-2">
              <h3 class="text-center text-[1.5rem]">Kindly <span class="text-[#9D2A31]">RSVP</span> before June 1</h3>
              <form @submit.prevent="submitRsvp">

                <div>
                  <label
                    class="block ssm:text-base msm:text-2xl py-2 px-4"
                    for="names"
                    >Name(s)</label
                  >
                  <input
                    class="rounded-[30px] font-peaxBold text-[#707070] ssm:text-base msm:text-xl ssm:py-2 msm:py-3 ssm:px-3 msm:px-5 custom-input-padding w-full border border-solid border-gray-700"
                    type="text"
                    v-model="rsvp.names"
                  />
                </div>
                <div>
                  <label
                    class="block ssm:text-base msm:text-2xl py-2 px-4"
                    for="numberOfPeople"
                    >Number of people</label
                  >
                  <div class="relative">
                    <select
                      class="appearance-none rounded-[30px] font-peaxBold text-[#707070] ssm:text-base msm:text-xl ssm:py-2 msm:py-3 ssm:px-3 msm:px-5 custom-input-padding w-full border border-solid border-gray-700 bg-transparent outline-none focus:outline-none"
                      v-model="rsvp.numberOfPeople"
                    >
                      <option
                        v-for="numbers in numberOfPeopleSet"
                        :value="numbers"
                      >
                        {{ numbers }}
                      </option>
                    </select>
                    <div
                      class="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none w-10"
                    >
                      <arrow-down />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    class="block ssm:text-base msm:text-2xl py-2 px-4"
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
                    <span v-else class="set-roxborough"> RSVP </span>
                  </button>
                </div>
              </form>
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
          <div class="row-span-2"></div>
          <div class="relative row-span-2">
            <img
              class="absolute bottom-[8.5rem] z-10 left-[1rem] w-[4rem]"
              src="../assets/images/mohammad-rawan/tree-screen-7.svg">
            <img
              class="absolute bottom-[11.5rem] right-[4.5rem] w-[5rem]"
              src="../assets/images/mohammad-rawan/flying-hearts-screen-7.svg">
            <img
              class="w-full bottom-0 fixed"
              src="../assets/images/mohammad-rawan/bottom-background-7.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-cols-1 grid-rows-6">
          <div class="" style="height: fit-content;">
            <img
              class="w-full fixed top-0"
              src="../assets/images/mohammad-rawan/curtains-slide-8.svg"
              alt="curtains-slide-3"
            >
          </div>
          <div class="row-span-4" style="height: fit-content;">
            <div class="text-center pt-[3.5rem]">
              <p class="text-[1.2rem]">Your presence at our wedding is <br> the greatest gift of all. <br> However, if you wish to honor us <br> with a gift, please find below:</p>
            </div>
            <div class="grid grid-cols-2 grid-rows-3 gap-2 mx-[3rem]">
              <div class="flex justify-between items-center pt-4 text-left col-span-2">
                <p class="font-bold">For transfers within Lebanon:</p>
                <img class="w-8 ml-2" src="../assets/images/whish.svg">
              </div>
              <div class="flex justify-between items-center text-left col-span-2">
                <p class="text-[.8rem]">Whish account number: <br> 20224125-03</p>
                <img @click="copyToClipboardWish" class="w-8 ml-2" src="../assets/images/whish.svg">
              </div>
              <div class="flex justify-between items-center pt-4 text-left col-span-2">
                <p class="font-bold">For transfers abroad:</p>
                <img class="w-8 ml-2" src="../assets/images/whish.svg">
              </div>
              <div class="flex justify-between items-start text-left col-span-2">
                <p class="text-[.8rem]">IBAN: LU60 0030 3395 1569 4000 <br> BIC code: BGLLLULL <br> Account holder: <br> M. BADREDDINE MOHAMAD</p>
                <img @click="copyToClipboardIBAN" class="w-8 ml-2" src="../assets/images/whish.svg">
              </div>
            </div>
          </div>
          <div class="relative row-span-2">
            <img
              class="absolute bottom-[7.7rem] z-10 right-[4rem] w-[4rem]"
              src="../assets/images/mohammad-rawan/couple-screen-7.svg">
            <img
              class="w-full bottom-0 fixed"
              src="../assets/images/mohammad-rawan/bottom-background-8.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-rows-3 grid-cols-1">
          <div>
            <img
              class="w-full fixed top-0"
              src="../assets/images/mohammad-rawan/curtains-slide-9.svg"
              alt="curtains-slide-3"
            >
          </div>
          <div>
            <div class="block">
              <h1 class="w-full pl-8 text-left text-[3rem] leading-none">
                <p class="mb-2">Let's toast to</p><p class="text-[#9D2A31] set-moderline inline">love</p>, laughter, <br /> and happily <br /> ever after!
              </h1>
            </div>
          </div>
          <div class="relative">
            <img
              class="w-[15rem] absolute right-[1rem] z-10 bottom-[6.8rem]"
              src="../assets/images/mohammad-rawan/train-screen-9.svg"
              alt="train-screen-9"
            >
            <img
              class="w-full bottom-0 fixed"
              src="../assets/images/mohammad-rawan/bottom-background-9.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import CopyToClipboard from 'copy-to-clipboard';
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
const confettiExplosion = ref(false);
const googleCalendar = ref(
  `https://www.google.com/calendar/render?action=TEMPLATE&text=Mohammad%20And%20Rawan's%20Wedding&dates=20240629T163000Z/20240629T230000Z&details=Let's%20toast%20to%20love%20,%20laughter%20,%20and%20happily%20ever%20after%20!%20&location=%20The%20villa%20,%20WHPR+QJH%20,%20Dbaye%20,%20Lebanon&sf=true&output=xml`
);
onMounted(() => {
  console.log(numberOfPeopleSet);
  if (rsvpCookie.value) {
    if (rsvpCookie.value.value === "1") {
      alreadySubmited.value = true;
    }
  }
  if (alreadySubmited.value) {
    transition.value = true;
  }
});

const submitRsvp = async () => {
  loading.value = true;
  const info = {
    From: "sales@e-vents.me",
    To: "kouyoumdjianmike@gmail.com, chris.m.rammouz@gmail.com",
    Subject: "RSVP from E-vents",
    HtmlBody: `<p>Name/Names: ${
      rsvp.value.names ? rsvp.value.names : `there's no name`
    }</p><p>
          Number of Guests: ${
            String(rsvp.value.numberOfPeople)
              ? String(rsvp.value.numberOfPeople)
              : "0"
          }</p><p>
          Attending: ${rsvp.value.attendence}</p>`,
    TextBody: `Name/Names: ${
      rsvp.value.names ? rsvp.value.names : `there's no name`
    }
          Number of Guests: ${
            String(rsvp.value.numberOfPeople)
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

const copyToClipboardWish = () => {
  CopyToClipboard('20224125-03');
}
const copyToClipboardIBAN = () => {
  CopyToClipboard('LU60 0030 3395 1569 4000');
}
</script>
