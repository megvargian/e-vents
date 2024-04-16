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
            <h1 class="w-full pl-10 text-left text-[3.5rem] leading-none custom-title-slide-1">
              Welcome<br />to our <br /><p class="text-[#9D2A31] set-moderline font-bold my-1 mt-5">love</p>story
            </h1>
          </div>
          <div
            class="block absolute bottom-[10.5rem] msm:bottom-[12rem] right-0 pr-5 custom-position-slide-1"
          >
            <p class="text-[12px]">Swipe for more details</p>
            <img
              class="w-[50px] h-[20px] float-right"
              src="../assets/images/mohammad-rawan/arrow-right-cropped.svg"
            />
          </div>
          <img
            class="absolute bottom-0 cutom-bottom w-full h-auto left-0"
            src="../assets/images/mohammad-rawan/bottom-background-1.svg"
            alt="certains-slide-1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-cols-1 grid-rows-4">
          <img
            class="w-full h-auto"
            src="../assets/images/mohammad-rawan/curtains-slide-2.svg"
            alt="certains-slide-2"
          />
          <div class="row-span-2">
            <h1 class="text-center set-moderline-bold text-[3rem] custom-title-slide-2" style="line-height: 1.3;">
              Mohammad <br/>
              <span class="text-[#9D2A31]">and</span> <br />
              Rawan
            </h1>
            <p class="text-center mb-4 pt-7 custom-sub-title-slide-2">are getting married on</p>
            <p class="text-center set-moderline font-bold text-[2rem] custom-date-slide-2">29 June 2024</p>
          </div>
          <div class="relative">
            <img
              class="w-full bottom-0 cutom-bottom fixed"
              src="../assets/images/mohammad-rawan/bottom-background-2.svg"
              alt="bottom-background-2"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-cols-1 grid-rows-4">
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
            <p class="text-center text-[1.5rem] custom-text-slide-3">We're delighted to invite you <br> to our wedding as we dance <br> our way into <span class="text-[#9D2A31] pl-2 font-bold">forever</span></p>
          </div>
          <div class="relative row-span-2">
            <img
              class="w-full bottom-0 cutom-bottom fixed"
              src="../assets/images/mohammad-rawan/bottom-background-3.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-cols-1 grid-rows-4">
          <div class="row-span-2" style="height: fit-content;">
            <img
              class="w-full"
              src="../assets/images/mohammad-rawan/curtains-slide-4.svg"
              alt="curtains-slide-3"
            >
            <p class="text-center text-[2rem] custom-title-slide-4">It all started <br><span class="text-[#9D2A31] font-bold pl-2">here</span></p>
          </div>
          <div class="relative row-span-2">
            <img
              class="w-full bottom-0 cutom-bottom fixed"
              src="../assets/images/mohammad-rawan/bottom-background-4.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-rows-6">
          <div class="row-span-1">
            <img
              class="w-full fixed top-0"
              src="../assets/images/mohammad-rawan/curtains-slide-5.svg"
              alt="curtains-slide-3"
            >
          </div>
          <div class="mx-10 row-span-2 relative" style="height: fit-content;">
            <h1 class="set-moderline-bold font-bold  ssm:text-[2rem] msm:text-[2.5rem] text-[1.5rem] text-center text-[#9D2A31] absolute top-[5%] left-[36%]">June</h1>
            <img
              class="w-full h-full"
              src="../assets/images/mohammad-rawan/calendar.svg"
              alt="calendar">
            <span class="pulse absolute right-[13.5%] bottom-[1%] msm:right-[13.3%]">
              <img
                class="color_o msm:w-10 msm:h-10 ssm:w-8 ssm:h-8 w-[1.6rem] h-[1.6rem]"
                src="../assets/images/mohammad-rawan/main-calendar-heart.svg"
                alt="main-calendar-heart"
              >
            </span>
          </div>
          <div class="justify-center flex items-center custom-time-slide-6 pt-7" style="height: fit-content;">
            <img
              src="../assets/images/mohammad-rawan/seven-oclock.svg"
              class="w-7 mr-4"
              alt="seven-oclock"
            >
            <span class="text-[#9D2A31] text-[25px] font-bold">7:00 p.m</span>
          </div>
          <div class="justify-center flex items-center custom-bottom-slide-5" style="height: fit-content;">
            <a
              target="_blank"
              rel="noopener"
              :href="googleCalendar"
              class="set-arapey-regular text-[20px] text-center text-white bg-[#66c1e8] rounded-full py-2 px-10 z-10"
            >
              Add to Calendar
            </a>
          </div>
          <div class="relative">
            <img
              class="w-full bottom-0 cutom-bottom fixed"
              src="../assets/images/mohammad-rawan/bottom-background-5.svg"
              alt="bottom-background-3"
            >
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page-start h-full w-full relative grid grid-cols-1 grid-rows-8 gap-y-0">
          <div class="row-span-2">
            <img
              class="w-full fixed top-0"
              src="../assets/images/mohammad-rawan/curtains-slide-6.svg"
              alt="curtains-slide-3"
            >
          </div>
          <div class="text-center row-span-1">
            <h1 class="set-moderm text-[#9D2A31] text-[1.5rem] set-moderline font-bold custom-title-slide-6">
              The Villa Venue
            </h1>
            <p class="text-black set-arapey-regular text-[1rem] custom-sub-title-slide-6">Dbayeh - Lebanon</p>
          </div>
          <div class="row-span-2" style="height: fit-content;">
            <img
              class="w-full custom-height-vennue-slide-6"
              src="../assets/images/mohammad-rawan/villa-vennue.svg"
              alt="villa-vennue">
          </div>
          <div class="text-center flex justify-center items-center pt-5 z-10">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.google.com/maps/dir//WHPR%2BQJH,+Dbaye/@33.9369145,35.509223,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151f3e4ba18470d1:0xfc7daaa40c837989!2m2!1d35.5916242!2d33.9369419?entry=ttu"
              class="set-arapey-regular text-[20px] text-center text-white bg-[#66c1e8] rounded-full py-2 px-[4rem] custom-button-slide-6"
            >
              View on map
            </a>
          </div>
          <div class="relative row-span-2">
            <img
              class="w-full bottom-0 cutom-bottom fixed"
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
          >
            <div
              class="w-full px-2"
              :class="[
                alreadySubmited ? 'hidden' : '',
                transition ? ' page-enter-from hidden' : '',
              ]"
            >
              <h3 class="text-center text-[1.5rem] custom-title-slide-7">Kindly <span class="text-[#9D2A31] font-bold">RSVP</span> before June 1</h3>
              <form @submit.prevent="submitRsvp">
                <div>
                  <label
                    class="block ssm:text-base msm:text-2xl py-2 px-4 custom-label-slide-7"
                    for="names"
                    >Name(s)</label
                  >
                  <input
                    class="rounded-[30px] text-[#707070] ssm:text-base msm:text-xl ssm:py-2 msm:py-3 ssm:px-3 msm:px-5 custom-input-padding w-full border border-solid border-gray-700 custom-input-slide-7"
                    type="text"
                    v-model="rsvp.names"
                    required
                  />
                </div>
                <div>
                  <label
                    class="block ssm:text-base msm:text-2xl py-2 px-4 custom-label-slide-7"
                    for="numberOfPeople"
                    >Number of people</label
                  >
                  <div class="relative">
                    <select
                      class="appearance-none rounded-[30px] text-[#707070] ssm:text-base msm:text-xl ssm:py-2 msm:py-3 ssm:px-3 msm:px-5 custom-input-padding w-full border border-solid border-gray-700 bg-transparent outline-none focus:outline-none custom-input-slide-7"
                      v-model="rsvp.numberOfPeople"
                      required
                    >
                      <option
                        v-for="numbers in numberOfPeopleSet"
                        :value="numbers"
                      >
                        {{ numbers }}
                      </option>
                    </select>
                    <div
                      class="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none w-10 custom-arrow-down-slide-7"
                    >
                      <arrow-down />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    class="block ssm:text-base msm:text-2xl py-2 px-4 custom-label-slide-7"
                    for="attendence"
                    >Attending</label
                  >
                  <div class="relative">
                    <select
                      class="appearance-none rounded-[30px] text-[#707070] ssm:text-base msm:text-xl ssm:py-2 msm:py-3 ssm:px-3 msm:px-5 custom-input-padding w-full border border-solid border-gray-700 bg-transparent custom-input-slide-7"
                      id="attendence"
                      required
                      v-model="attendence"
                    >
                      <option value="yes" selected>Yes</option>
                      <option value="no">no</option>
                    </select>
                    <div
                      class="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none w-10 custom-arrow-down-slide-7"
                    >
                      <arrow-down />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    class="ssm:text-base msm:text-2xl text-center text-white mt-5 bg-[#66c1e8] flex justify-center mx-auto rounded-[30px] w-56 py-2 custom-button-slide-7"
                    :disabled="loading"
                    type="submit"
                  >
                    <img
                      v-if="loading"
                      src="../assets/images/loading.svg"
                      class="animate-spin loading-spinner w-6 h-6 flex m-auto custom-spinner-slide-7"
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
                <h3 class="text-3xl text-center pt-12">
                  Thank you <br />
                </h3>
              </div>
            </div>
          </div>
          <div class="row-span-2"></div>
          <div class="relative row-span-2">
            <img
              class="w-full bottom-0 cutom-bottom fixed"
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
            <div class="text-center pt-[3.5rem] custom-text-slide-8">
              <p class="text-[1.2rem]">Your presence at our wedding is <br> the greatest gift of all. <br> However, if you wish to honor us <br> with a gift, please find below:</p>
            </div>
            <div class="grid grid-cols-2 grid-rows-3 gap-2 mx-[3rem]">
              <div class="flex justify-between items-center pt-4 text-left col-span-2 custom-sub-text-slide-8">
                <p class="font-bold">For transfers within Lebanon:</p>
                <img class="w-10 ml-2 mr-1" src="../assets/images/mohammad-rawan/whish.png">
              </div>
              <div class="flex justify-between items-center text-left col-span-2 custom-sub-text-slide-8">
                <p class="text-[.8rem]">Whish account number: <br> 20224125-03</p>
                <img v-if="!copedTpClipboardWish" @click="copyToClipboardWish" class="w-7 ml-2 cursor-pointer" src="../assets/images/mohammad-rawan/copy-to-clipboard.svg">
                <img v-else class="w-6 ml-2" src="../assets/images/mohammad-rawan/checkmark.svg">
              </div>
              <div class="flex justify-between items-center pt-4 text-left col-span-2 custom-sub-text-slide-8">
                <p class="font-bold">For transfers abroad:</p>
                <img class="w-[5rem] set-custom-width" src="../assets/images/mohammad-rawan/bank-icon-bnp-1.svg">
              </div>
              <div class="flex justify-between items-start text-left col-span-2 custom-sub-text-slide-8">
                <p class="text-[.8rem]">IBAN: LU60 0030 3395 1569 4000 <br> BIC code: BGLLLULL <br> Account holder: <br> M. BADREDDINE MOHAMAD</p>
                <img v-if="!copyedToClickBoardIBAN" @click="copyToClipboardIBAN" class="w-7 ml-2 cursor-pointer" src="../assets/images/mohammad-rawan/copy-to-clipboard.svg">
                <img v-else class="w-6 ml-2" src="../assets/images/mohammad-rawan/checkmark.svg">
              </div>
            </div>
          </div>
          <div class="relative row-span-2">
            <img
              class="w-full bottom-0 cutom-bottom fixed"
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
              <h1 class="w-full pl-8 text-left text-[2.5rem] leading-none custom-title-slide-9">
                <p class="mb-2">Let's toast to</p><p class="text-[#9D2A31] set-moderline inline font-bold">love</p>, laughter, <br /> and happily <br /> ever after!
              </h1>
            </div>
          </div>
          <div class="relative">
            <img
              class="w-full bottom-0 cutom-bottom fixed"
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
const copyedToClickBoardIBAN = ref(false);
const copedTpClipboardWish = ref(false);
const rsvp = ref({
  names: "",
  numberOfPeople: 0,
  attendence: attendence,
});
const loading = ref(false);
const transition = ref(false);
const rsvpCookie = useCookie<{ value: string }>("0");
const alreadySubmited = ref(false);
const googleCalendar = ref(
  `https://www.google.com/calendar/render?action=TEMPLATE&text=Mohammad%20And%20Rawan's%20Wedding&dates=20240629T160000Z/20240629T230000Z&details=Let's%20toast%20to%20love%20,%20laughter%20,%20and%20happily%20ever%20after%20!%20&location=%20The%20villa%20,%20WHPR+QJH%20,%20Dbaye%20,%20Lebanon&sf=true&output=xml`
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
    To: "rawansahily@gmail.com, Mhd.badreddine@gmail.com, kouyoumdjianmike@gmail.com",
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
  }
};

const copyToClipboardWish = () => {
  CopyToClipboard('20224125-03');
  copedTpClipboardWish.value = true;
}
const copyToClipboardIBAN = () => {
  CopyToClipboard('LU60 0030 3395 1569 4000');
  copyedToClickBoardIBAN.value = true;
}
</script>
