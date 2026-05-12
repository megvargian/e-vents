<template>
  <!-- Desktop blocker — hidden on mobile, visible on md+ screens -->
  <div class="desktop-blocker">
    <div class="desktop-blocker__card">
      <img src="/favicon.png" class="desktop-blocker__logo" alt="e-vents logo" />
      <p class="desktop-blocker__title">Mobile Only</p>
      <p class="desktop-blocker__msg">
        This invitation is designed for mobile.<br />
        Please open it on your phone for the best experience.
      </p>
      <div class="desktop-blocker__badge">
        <img src="/favicon.png" class="w-4 h-4" alt="e-vents" />
        <span>powered by e-vents</span>
      </div>
    </div>
  </div>

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
              Sarkis<br />
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
              <!-- date 14 is highlighted on the calendar SVG via the heart marker -->
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

            <!-- Church -->
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[#b0b890] text-[0.75rem] tracking-widest uppercase">Church</span>
            </div>
            <h2 class="sk-moderline-bold text-[#7a6e5a] text-[1.5rem] text-center leading-snug mb-0.5">Vartanants Church</h2>
            <p class="text-center text-[0.85rem] text-[#5a4a3a] mb-4">Borj Hammoud</p>

            <!-- Divider -->
            <div class="w-10 h-px bg-[#b0b890] mb-4"></div>

            <!-- Reception venue -->
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[#b0b890] text-[0.75rem] tracking-widest uppercase">Reception</span>
            </div>
            <h1 class="sk-moderline-bold text-[#7a6e5a] text-[1.8rem] text-center leading-snug">Les Talus</h1>
            <p class="text-center text-[1rem] mt-0.5 mb-4">Okaibey</p>

            <img class="w-full max-w-[280px]" src="../assets/images/mohammad-rawan/villa-vennue.svg" alt="venue" />
            <div class="mt-4 flex gap-3 flex-wrap justify-center">
              <a target="_blank" rel="noopener" href="https://www.google.com/maps?sca_esv=902c31b61ac8c1b2&biw=1707&bih=898&output=search&q=vartanants+church+in+bourj+hammoud&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-QW4YybSII6dXtsWvAIaofKcjC4qmxZMOCagUIH_lLb_gBLeLkvOzcvgCMBL-wubokUVBLrYutNM25jALO_5MRGNq4blmfAEZmOz56etFMCWbvAFuwYvcOtda0jdHQZGD_1ropMY-yu7NLK2eHbpNhgT0OPyg&entry=mc&ved=1t:200715&ictx=111" class="sk-btn" style="font-size:13px;padding:7px 22px;">Church Map</a>
              <a target="_blank" rel="noopener" href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigATIJCAQQIRgKGKABMgcIBRAhGI8CMgcIBhAhGI8CMgcIBxAhGI8C0gEJMTM2MzFqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=lb&sa=X&geocode=Kb3X-vIMRB8VMSkiACYYaf2x&daddr=3M26%2BF5C,+Lebanon,+Okaybeh" class="sk-btn" style="font-size:13px;padding:7px 22px;">Venue Map</a>
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
                Kindly <span class="text-[#7a6e5a] font-bold sk-moderline">RSVP</span> before June 7
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
                alreadySubmited ? 'flex' : 'hidden',
                transition ? '' : 'page-leave-to hidden',
              ]"
            >
              <!-- Attending: YES -->
              <div v-if="attendence === 'yes'" class="rsvp-confirm">
                <div class="rsvp-confirm__hearts" aria-hidden="true">
                  <img src="../assets/images/mohammad-rawan/main-calendar-heart.svg" class="rsvp-confirm__heart rsvp-confirm__heart--l" alt="" />
                  <img src="../assets/images/mohammad-rawan/main-calendar-heart.svg" class="rsvp-confirm__heart rsvp-confirm__heart--c" alt="" />
                  <img src="../assets/images/mohammad-rawan/main-calendar-heart.svg" class="rsvp-confirm__heart rsvp-confirm__heart--r" alt="" />
                </div>

                <p class="rsvp-confirm__eyebrow">You're on the list</p>

                <h2 class="rsvp-confirm__title sk-moderline">
                  We can't wait<br />to celebrate<br />with you!
                </h2>

                <div class="rsvp-confirm__divider"></div>

                <p class="rsvp-confirm__date">June 14, 2026 &nbsp;·&nbsp; 7:00 p.m</p>
                <p class="rsvp-confirm__date" style="font-size:0.78rem;margin-top:-6px;">Les Talus · Okaibey</p>

                <p class="rsvp-confirm__sub">
                  Save the date and get ready for a night<br />full of love, laughter &amp; memories.
                </p>

                <div class="rsvp-confirm__badge">
                  <img src="/favicon.png" class="w-3.5 h-3.5" alt="e-vents" />
                  <span>powered by e-vents</span>
                </div>
              </div>

              <!-- Attending: NO -->
              <div v-else class="rsvp-confirm">
                <div class="rsvp-confirm__hearts" aria-hidden="true">
                  <img src="../assets/images/mohammad-rawan/main-calendar-heart.svg" class="rsvp-confirm__heart rsvp-confirm__heart--l" style="opacity:0.35;" alt="" />
                  <img src="../assets/images/mohammad-rawan/main-calendar-heart.svg" class="rsvp-confirm__heart rsvp-confirm__heart--c" style="opacity:0.35;" alt="" />
                  <img src="../assets/images/mohammad-rawan/main-calendar-heart.svg" class="rsvp-confirm__heart rsvp-confirm__heart--r" style="opacity:0.35;" alt="" />
                </div>

                <p class="rsvp-confirm__eyebrow">We heard you</p>

                <h2 class="rsvp-confirm__title sk-moderline">
                  You'll be<br />missed dearly
                </h2>

                <div class="rsvp-confirm__divider"></div>

                <p class="rsvp-confirm__sub">
                  We're sorry you can't make it,<br />
                  but you'll always be in our hearts<br />
                  on this special day. 🤍
                </p>

                <div class="rsvp-confirm__badge">
                  <img src="/favicon.png" class="w-3.5 h-3.5" alt="e-vents" />
                  <span>powered by e-vents</span>
                </div>
              </div>
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

  <!-- ── Intro video overlay ───────────────────── -->
  <!-- <Transition name="intro-fade">
    <div v-if="showIntro" class="intro-overlay">
      <video
        class="intro-video"
        autoplay
        muted
        playsinline
        @ended="showIntro = false"
      >
        <source src="../assets/images/sako-kate/birds-1.mp4" type="video/mp4" />
      </video>
    </div>
  </Transition> -->
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

const showIntro = ref(true);

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
  `https://www.google.com/calendar/render?action=TEMPLATE&text=Sarkis%20%26%20Kate%27s%20Wedding&dates=20260614T160000Z/20260614T230000Z&details=Church%3A%20Vartanants%20Church%2C%20Borj%20Hammoud%0AReception%3A%20Les%20Talus%2C%20Okaibey&location=Les%20Talus%2C%20Okaibey&sf=true&output=xml`
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

  const guestName   = rsvp.value.names          || 'Not provided';
  const guestCount  = String(rsvp.value.numberOfPeople) || '0';
  const isAttending = attendence.value === 'yes' ? '✅ Yes, attending' : '❌ No, not attending';

  const HtmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New RSVP – Sako &amp; Kate</title>
</head>
<body style="margin:0;padding:0;background:#f5f0eb;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0eb;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#8a9a6a 0%,#b0b890 100%);padding:36px 40px 28px;text-align:center;">
              <img src="https://e-vents.me/favicon.png" width="52" height="52" alt="e-vents" style="border-radius:50%;margin-bottom:14px;display:block;margin-left:auto;margin-right:auto;" />
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:normal;letter-spacing:2px;">New RSVP Received</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:1px;">SARKIS &amp; KATE &nbsp;·&nbsp; JUNE 14, 2026</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 20px;">
              <p style="margin:0 0 24px;color:#5a4a3a;font-size:15px;line-height:1.6;">A guest has responded to the wedding invitation. Here are their details:</p>

              <!-- Info table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 16px;background:#f9f6f1;border-radius:10px 10px 0 0;border-bottom:1px solid #e8e0d8;">
                    <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#8a9a6a;">Name(s)</span><br />
                    <span style="font-size:16px;color:#3a3028;font-weight:bold;">${guestName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f9f6f1;border-bottom:1px solid #e8e0d8;">
                    <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#8a9a6a;">Number of Guests</span><br />
                    <span style="font-size:16px;color:#3a3028;font-weight:bold;">${guestCount}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f9f6f1;border-radius:0 0 10px 10px;">
                    <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#8a9a6a;">Attending</span><br />
                    <span style="font-size:16px;color:#3a3028;font-weight:bold;">${isAttending}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #e8e0d8;margin:4px 0 20px;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:0 40px 36px;text-align:center;">
              <p style="margin:0 0 16px;color:#7a6e5a;font-size:13px;line-height:1.6;">This notification was sent automatically via the wedding invitation platform.</p>
              <a href="https://e-vents.me" style="display:inline-flex;align-items:center;gap:6px;background:#f0ece5;border-radius:999px;padding:7px 18px;text-decoration:none;font-size:11px;letter-spacing:0.1em;color:#7a6e5a;font-family:Arial,sans-serif;">
                <img src="https://e-vents.me/favicon.png" width="14" height="14" alt="" style="vertical-align:middle;" />
                powered by e-vents.me
              </a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const TextBody = `New RSVP – Sarkis & Kate\n\nName(s): ${guestName}\nNumber of Guests: ${guestCount}\nAttending: ${attendence.value}\n\npowered by e-vents.me`;

  const info = {
    From: 'sales@e-vents.me',
    To: 'kouyoumdjianmike@gmail.com, Rfnz0803@gmail.com, Sarkismanoufar@gmail.com',
    Subject: `New RSVP – ${guestName} (${isAttending})`,
    HtmlBody,
    TextBody,
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
  background-color: transparent;
}
.sk-input:focus {
  border-color: #8a9a6a;
}

@media (max-width: 380px) {
  .sk-polaroid { width: 115px; }
  .sk-polaroid-inner { width: 99px; height: 120px; }
}

/* ── RSVP confirmation card ────────────────── */
.thankYou {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1.5rem;
}

.rsvp-confirm {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  animation: rsvp-rise 0.7s ease both;
}

@keyframes rsvp-rise {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.rsvp-confirm__hearts {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-bottom: 1.1rem;
}
.rsvp-confirm__heart { opacity: 0.85; }
.rsvp-confirm__heart--l { width: 18px; height: 18px; animation: pulse-heart 2.4s ease-in-out infinite; }
.rsvp-confirm__heart--c { width: 28px; height: 28px; animation: pulse-heart 2.0s ease-in-out infinite; }
.rsvp-confirm__heart--r { width: 18px; height: 18px; animation: pulse-heart 2.6s ease-in-out infinite; }

@keyframes pulse-heart {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.2); }
}

.rsvp-confirm__eyebrow {
  font-family: 'arapey-regular', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8a9a6a;
  margin-bottom: 0.65rem;
}

.rsvp-confirm__title {
  font-size: 2.2rem;
  line-height: 1.25;
  color: #5a4a3a;
  margin-bottom: 1rem;
}

.rsvp-confirm__divider {
  width: 48px;
  height: 1.5px;
  background: #b0b890;
  border-radius: 2px;
  margin-bottom: 0.85rem;
}

.rsvp-confirm__date {
  font-family: 'arapey-regular', sans-serif;
  font-size: 0.9rem;
  color: #7a6e5a;
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
}

.rsvp-confirm__sub {
  font-family: 'arapey-regular', sans-serif;
  font-size: 0.88rem;
  color: #5a4a3a;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  text-align: center;
}

.rsvp-confirm__badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(255,255,255,0.65);
  border-radius: 999px;
  padding: 5px 14px;
  font-family: 'arapey-regular', sans-serif;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #7a6e5a;
}

/* ── Intro video overlay ─────────────────────── */
.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: transparent;
  pointer-events: none;
}

.intro-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
}

.intro-fade-leave-active {
  transition: opacity 0.8s ease;
}
.intro-fade-leave-to {
  opacity: 0;
}

/* ── Desktop blocker ─────────────────────────── */
.desktop-blocker {
  display: none;
}

@media (min-width: 768px) {
  /* Hide the invitation content on desktop */
  .example-three {
    display: none !important;
  }

  /* Show the blocker */
  .desktop-blocker {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f9f6f1;
  }

  .desktop-blocker__card {
    text-align: center;
    padding: 3rem 4rem;
    background: white;
    border-radius: 24px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.10);
    max-width: 420px;
  }

  .desktop-blocker__logo {
    width: 72px;
    height: 72px;
    margin: 0 auto 1.25rem;
    display: block;
  }

  .desktop-blocker__title {
    font-family: 'modernline-bold', sans-serif;
    font-size: 2rem;
    color: #7a6e5a;
    margin-bottom: 0.75rem;
  }

  .desktop-blocker__msg {
    font-family: 'arapey-regular', sans-serif;
    font-size: 1rem;
    color: #5a4a3a;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .desktop-blocker__badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #f0ece5;
    border-radius: 999px;
    padding: 6px 16px;
    font-family: 'arapey-regular', sans-serif;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: #7a6e5a;
  }
}
</style>
