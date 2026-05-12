<template>
  <section class="example-three relative flex m-auto full-custom-height overflow-hidden">
    <Swiper class="mainSwiper" :options="swiperOprions">

      <!-- ── SLIDE 1 · Welcome ─────────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex items-center justify-start overflow-hidden">
          <!-- slide background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/slide-1.jpg" alt="" aria-hidden="true" />
          <!-- soft overlay so text is always legible -->
          <div class="absolute inset-0 bg-white/30 z-[1]"></div>
          <!-- content -->
          <div class="block pl-10 relative z-[2]">
            <h1 class="w-full text-left text-[3.5rem] leading-none sk-title-1">
              Welcome<br />to our <br />
              <span class="text-[#7a6e5a] sk-moderline font-bold my-1 mt-5 block">love</span>
              story
            </h1>
          </div>
          <div class="block absolute bottom-[20rem] right-0 pr-5 z-[2]">
            <p class="text-[12px] text-right">Swipe for more details</p>
            <img
              class="w-[50px] h-[20px] float-right mt-1"
              src="../assets/images/mohammad-rawan/arrow-right-cropped.svg"
              alt="swipe"
            />
          </div>
        </div>
      </LazySwiperSlide>

      <!-- ── SLIDE 2 · Baby Images ──────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col overflow-hidden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/slide-3.jpg" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <!-- content -->
          <div class="relative z-[2] pt-6 px-5 flex-1 flex flex-col">
            <p class="text-center text-[0.85rem] tracking-widest mb-3 text-[#7a6e5a]">ONCE UPON A TIME...</p>
            <h1 class="text-center sk-moderline-bold text-[2.2rem] leading-snug mb-1">
              Sako<br />
              <span class="text-[#7a6e5a] text-[1.8rem]">and</span>
              <br />Kate
            </h1>
            <p class="text-center text-[0.9rem] mb-5 text-[#7a6e5a]">two little hearts, one destiny</p>
            <!-- polaroid frames -->
            <!-- <div class="flex justify-center items-start gap-5">
              <div class="sk-polaroid" style="transform: rotate(-4deg)">
                <div class="sk-polaroid-inner">
                  <img class="w-full h-full object-cover" src="../assets/images/example-three/baby-sako.jpg" alt="Sako as a child" />
                </div>
                <p class="sk-polaroid-name">Sako</p>
              </div>
              <div class="sk-polaroid" style="transform: rotate(3.5deg); margin-top: 18px">
                <div class="sk-polaroid-inner">
                  <img class="w-full h-full object-cover" src="../assets/images/example-three/baby-kate.jpg" alt="Kate as a child" />
                </div>
                <p class="sk-polaroid-name">Kate</p>
              </div>
            </div> -->
          </div>
        </div>
      </LazySwiperSlide>

      <!-- ── SLIDE 3 · Date ─────────────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col items-center overflow-hidden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/slide-2.jpg" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <!-- content -->
          <div class="relative z-[2] w-full flex flex-col items-center justify-start flex-1 pt-8 px-4">
            <p class="text-[0.85rem] tracking-widest mb-4 text-[#7a6e5a]">MARK YOUR CALENDAR</p>
            <div class="mx-10 relative w-full" style="height: fit-content;">
              <h1 class="sk-moderline-bold font-bold text-[2.2rem] text-center text-[#7a6e5a] absolute top-[5%] left-[36%]">June</h1>
              <img class="w-full h-full" src="../assets/images/mohammad-rawan/calendar.svg" alt="calendar" />
              <span class="pulse absolute right-[13.5%] bottom-[1%]">
                <img class="w-8 h-8" src="../assets/images/mohammad-rawan/main-calendar-heart.svg" alt="heart" />
              </span>
            </div>
            <div class="flex items-center mt-4 gap-3">
              <img class="w-6" src="../assets/images/mohammad-rawan/seven-oclock.svg" alt="time" />
              <span class="text-[#7a6e5a] text-[1.4rem] font-bold sk-moderline">7:00 p.m</span>
            </div>
            <div class="mt-4">
              <a target="_blank" rel="noopener" :href="googleCalendar" class="sk-btn">Add to Calendar</a>
            </div>
          </div>
        </div>
      </LazySwiperSlide>

      <!-- ── SLIDE 4 · Location ─────────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col items-center overflow-hidden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/slide-4.jpg" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <!-- content -->
          <div class="relative z-[2] w-full flex flex-col items-center flex-1 pt-10 px-4">
            <p class="text-[0.85rem] tracking-widest mb-2 text-[#7a6e5a]">WHERE LOVE BLOOMS</p>
            <h1 class="sk-moderline-bold text-[#7a6e5a] text-[1.8rem] text-center">The Garden Venue</h1>
            <p class="text-center text-[1rem] mt-1 mb-4">Your City · Country</p>
            <img class="w-full max-w-[280px]" src="../assets/images/mohammad-rawan/villa-vennue.svg" alt="venue" />
            <div class="mt-4">
              <a target="_blank" rel="noopener" href="https://www.google.com/maps" class="sk-btn">View on Map</a>
            </div>
          </div>
        </div>
      </LazySwiperSlide>

      <!-- ── SLIDE 5 · RSVP Form ────────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col overflow-hidden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/slide-5.jpg" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/45 z-[1]"></div>
          <!-- content -->
          <div class="rsvpMain relative z-[2] flex-1 px-4 flex flex-col justify-center">
            <div
              class="w-full"
              :class="[
                alreadySubmited ? 'hidden' : '',
                transition ? ' page-enter-from hidden' : '',
              ]"
            >
              <h3 class="text-center text-[1.4rem] mb-4 mt-2">
                Kindly <span class="text-[#7a6e5a] font-bold sk-moderline">RSVP</span> before June 1
              </h3>
              <form @submit.prevent="submitRsvp">
                <div>
                  <label class="block py-2 px-4 text-[0.9rem]" for="names">Name(s)</label>
                  <input class="sk-input" type="text" v-model="rsvp.names" required />
                </div>
                <div>
                  <label class="block py-2 px-4 text-[0.9rem]" for="numberOfPeople">Number of people</label>
                  <div class="relative">
                    <select class="sk-input appearance-none bg-transparent" v-model="rsvp.numberOfPeople" required>
                      <option v-for="numbers in numberOfPeopleSet" :value="numbers" :key="numbers">{{ numbers }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none w-10">
                      <arrow-down />
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block py-2 px-4 text-[0.9rem]" for="attendence">Attending</label>
                  <div class="relative">
                    <select class="sk-input appearance-none bg-transparent" id="attendence" required v-model="attendence">
                      <option value="yes" selected>Yes</option>
                      <option value="no">No</option>
                    </select>
                    <div class="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none w-10">
                      <arrow-down />
                    </div>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <button class="sk-btn" :disabled="loading" type="submit">
                    <img v-if="loading" src="../assets/images/loading.svg" class="animate-spin loading-spinner w-6 h-6 flex m-auto" alt="loading" />
                    <span v-else class="set-roxborough">RSVP</span>
                  </button>
                </div>
              </form>
            </div>
            <div
              class="thankYou text-center"
              :class="[
                alreadySubmited ? 'block' : 'hidden',
                transition ? '' : 'page-leave-to hidden',
              ]"
            >
              <h3 class="text-2xl text-center pt-12">Thank you!</h3>
            </div>
          </div>
        </div>
      </LazySwiperSlide>

      <!-- ── SLIDE 6 · Thank You ────────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex items-center justify-start overflow-hidden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/slide-6.jpg" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/30 z-[1]"></div>
          <!-- content -->
          <div class="relative z-[2] pl-8 pt-8">
            <h1 class="w-full text-left text-[2.4rem] leading-snug">
              <p class="mb-2">Let&rsquo;s toast to</p>
              <span class="text-[#7a6e5a] sk-moderline inline font-bold">love</span>,
              laughter, <br /> and happily <br /> ever after!
            </h1>
          </div>
          <!-- powered by badge -->
          <div class="absolute bottom-4 w-full flex justify-center z-[2]">
            <div class="flex items-center gap-1.5 bg-white/60 rounded-full px-3 py-1">
              <img src="/favicon.png" class="w-4 h-4" alt="e-vents" />
              <span class="text-[10px] text-[#7a6e5a] tracking-widest">powered by e-vents</span>
            </div>
          </div>
        </div>
      </LazySwiperSlide>

    </Swiper>

  </section>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
  ],
});

const route = useRoute();
const numberOfPeopleSet = route.query.numpp ? Number(route.query.numpp) : 4;

const swiperOprions = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  navigation: true,
  SwiperPagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  allowSlidePrev: false,
};

const attendence = ref('');
const rsvp = ref({
  names: '',
  numberOfPeople: 0,
  attendence: attendence,
});
const loading = ref(false);
const transition = ref(false);
const rsvpCookie = useCookie<{ value: string }>('sk-rsvp');
const alreadySubmited = ref(false);

const googleCalendar = ref(
  `https://www.google.com/calendar/render?action=TEMPLATE&text=Sako%20And%20Kate%27s%20Wedding&dates=20260614T160000Z/20260614T230000Z&details=Let%27s%20toast%20to%20love%2C%20laughter%2C%20and%20happily%20ever%20after!&sf=true&output=xml`
);

onMounted(() => {
  if (rsvpCookie.value) {
    if (rsvpCookie.value.value === '1') {
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
    From: 'sales@e-vents.me',
    To: 'kouyoumdjianmike@gmail.com',
    Subject: 'RSVP from E-vents – Sako & Kate',
    HtmlBody: `<p>Name/Names: ${rsvp.value.names ? rsvp.value.names : `there's no name`}</p>
      <p>Number of Guests: ${String(rsvp.value.numberOfPeople) ? String(rsvp.value.numberOfPeople) : '0'}</p>
      <p>Attending: ${rsvp.value.attendence}</p>`,
    TextBody: `Name/Names: ${rsvp.value.names ? rsvp.value.names : `there's no name`}
      Number of Guests: ${String(rsvp.value.numberOfPeople) ? String(rsvp.value.numberOfPeople) : '0'}
      Attending: ${rsvp.value.attendence}`,
  };

  const { data, refresh, error } = useFetch('/.netlify/functions/sendEmails', {
    method: 'POST',
    body: info,
    server: false,
    immediate: false,
  });
  await refresh();

  if (error.value) {
    console.error('Error:', error);
    loading.value = false;
  } else {
    loading.value = false;
    alreadySubmited.value = true;
    transition.value = true;
    rsvpCookie.value = { value: '1' };
  }
};
</script>

<style scoped>
.example-three {
  font-family: 'roxborough', sans-serif;
}
.sk-moderline {
  font-family: 'modernline', sans-serif;
}
.sk-moderline-bold {
  font-family: 'modernline-bold', sans-serif;
}
.sk-title-1 {
  font-family: 'roxborough', sans-serif;
}
.sk-bottom {
  object-fit: cover;
  object-position: bottom;
}

/* Polaroid frames */
.sk-polaroid {
  background: white;
  padding: 8px 8px 28px 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18), 0 1px 4px rgba(0, 0, 0, 0.1);
  width: 130px;
}
.sk-polaroid-inner {
  width: 114px;
  height: 140px;
  background: #e8e0d8;
  overflow: hidden;
}
.sk-polaroid-name {
  text-align: center;
  font-family: 'arapey-regular', sans-serif;
  font-size: 12px;
  color: #5a4a3a;
  margin-top: 6px;
}

/* Button */
.sk-btn {
  font-family: 'arapey-regular', sans-serif;
  font-size: 16px;
  color: white;
  background: #8a9a6a;
  border-radius: 30px;
  padding: 8px 40px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border: none;
}
.sk-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Form inputs */
.sk-input {
  border-radius: 30px;
  border: 1px solid #b0b890;
  padding: 10px 20px;
  width: 100%;
  font-family: 'arapey-regular', sans-serif;
  font-size: 14px;
  color: #5a4a3a;
  outline: none;
}
.sk-input:focus {
  border-color: #8a9a6a;
}

@media (max-width: 380px) {
  .sk-polaroid { width: 115px; }
  .sk-polaroid-inner { width: 99px; height: 120px; }
}
</style>
