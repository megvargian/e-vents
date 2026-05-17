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
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/1.webp" alt="" aria-hidden="true" />
          <!-- soft overlay so text is always legible -->
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <!-- content -->
          <div class="block px-8 absolute inset-0 z-[2] text-center flex flex-col items-center justify-start pt-12">
            <p class="text-[2.6rem] leading-snug set-moderline-bold mb-4">Dear guests!</p>
            <p class="font-['arapey-regular'] text-[1.2rem] leading-relaxed text-[#3a3228]">
              On this special day,<br />
              it is very important for us to be surrounded<br />
              by the people closest and dearest to our hearts.
            </p>
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

      <!-- ── SLIDE 2 · Invite + Calendar + Names ── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col items-center overflow-hidden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/3.webp" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <!-- content -->
          <div class="relative z-[2] w-full flex flex-col items-center flex-1 pt-6 pb-4 px-6">
            <!-- top: invite text + date -->
            <div class="text-center">
              <p class="font-['arapey-regular'] text-[0.95rem] text-[#3a3228] leading-snug">With great joy we invite you</p>
              <p class="font-['arapey-regular'] text-[0.95rem] font-bold text-[#3a3228]">The 14 of June, 2026</p>
            </div>

            <!-- calendar (reuse same markup as slide 3) -->
            <div class="mx-6 relative w-full" style="height: fit-content;">
              <!-- <h2 class="set-moderline-bold font-bold text-[2.2rem] text-center text-[#7a6e5a] absolute top-[5%] left-[36%]">June</h2> -->
              <img class="w-full h-full" src="../assets/images/sako-kate/calendar.svg" alt="calendar" />
              <!-- <span class="pulse absolute right-[13.5%] bottom-[1%]">
                <img class="w-8 h-8" src="../assets/images/mohammad-rawan/main-calendar-heart.svg" alt="heart" />
              </span> -->
            </div>

            <!-- bottom: names in cursive -->
            <div class="text-center">
              <p class="font-['arapey-regular'] text-[0.9rem] text-[#5a4a3a] mb-7">to the wedding celebration of</p>
              <p class="set-moderline-bold text-[3rem] leading-none">Sarkis</p>
              <p class="font-['arapey-regular'] text-[1.4rem] text-[#7a6e5a] my-0.5">&amp;</p>
              <p class="set-moderline-bold text-[3rem] leading-none">Kate</p>
            </div>
            <div class="flex items-center mt-10 gap-3">
              <span class="text-[#7a6e5a] text-[1.4rem] font-bold set-moderline">5:00 p.m</span>
            </div>
            <div class="mt-5">
              <a target="_blank" rel="noopener" :href="googleCalendar" class="sk-btn">Add to Calendar</a>
            </div>
          </div>
        </div>
      </LazySwiperSlide>

      <!-- ── SLIDE 3 · Date ─────────────────────── -->
      <!-- <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col items-center overflow-hidden">
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/4.webp" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <div class="relative z-[2] w-full flex flex-col items-center justify-start flex-1 pt-8 px-4">
            <p class="text-[1.2rem] tracking-widest mb-4 text-[#7a6e5a]">MARK YOUR CALENDAR</p>
            <div class="mx-10 relative w-full" style="height: fit-content;">
              <h1 class="set-moderline-bold font-bold text-[2.2rem] text-center text-[#7a6e5a] absolute top-[5%] left-[36%]">June</h1>
              <img class="w-full h-full" src="../assets/images/mohammad-rawan/calendar.svg" alt="calendar" />
              <span class="pulse absolute right-[13.5%] bottom-[1%]">
                <img class="w-8 h-8" src="../assets/images/mohammad-rawan/main-calendar-heart.svg" alt="heart" />
              </span>
            </div>
            <div class="flex items-center mt-4 gap-3">
              <img class="w-6" src="../assets/images/mohammad-rawan/seven-oclock.svg" alt="time" />
              <span class="text-[#7a6e5a] text-[1.4rem] font-bold set-moderline">7:00 p.m</span>
            </div>
            <div class="mt-4">
              <a target="_blank" rel="noopener" :href="googleCalendar" class="sk-btn">Add to Calendar</a>
            </div>
          </div>
        </div>
      </LazySwiperSlide> -->

      <!-- ── SLIDE 4 · Location ─────────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col items-center overflow-hidden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/2.webp" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <!-- content -->
          <div class="relative z-[2] w-full flex flex-col flex-1 pt-6 pb-4 px-5 gap-4">

            <!-- ── Church / Ceremony ── -->
            <div class="flex items-center justify-between gap-3">
              <div class="flex-1">
                <div class="flex items-center gap-1 mb-0.5">
                  <span class="text-[#c46e6e] text-[1.2rem]">📍</span>
                  <span class="font-['arapey-regular'] text-[1.2rem] font-bold text-[#5a4a3a]">Vartanants Church</span>
                </div>
                <p class="font-['arapey-regular'] text-[0.75rem] text-[#7a6e5a] mb-1 pl-5">Borj Hammoud</p>
                <p class="sk-title-1 text-[2.4rem] leading-none text-[#5a4a3a]">Church</p>
                <p class="font-['arapey-regular'] text-[1.2rem] text-[#7a6e5a] mt-1">7:00 PM</p>
                <a target="_blank" rel="noopener" href="https://www.google.com/maps?sca_esv=902c31b61ac8c1b2&biw=1707&bih=898&output=search&q=vartanants+church+in+bourj+hammoud&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-QW4YybSII6dXtsWvAIaofKcjC4qmxZMOCagUIH_lLb_gBLeLkvOzcvgCMBL-wubokUVBLrYutNM25jALO_5MRGNq4blmfAEZmOz56etFMCWbvAFuwYvcOtda0jdHQZGD_1ropMY-yu7NLK2eHbpNhgT0OPyg&entry=mc&ved=1t:200715&ictx=111" class="sk-btn mt-2 inline-block" style="font-size:12px;padding:5px 16px;">Church Map</a>
              </div>
              <img class="w-[140px] flex-shrink-0 drop-shadow-sm" src="../assets/images/sako-kate/church.svg" alt="church" />
            </div>

            <!-- divider -->
            <div class="mt-10"></div>

            <!-- ── Reception ── -->
            <div class="flex items-center justify-between gap-3">
              <img class="w-[120px] flex-shrink-0 drop-shadow-sm" src="../assets/images/sako-kate/drinks.svg" alt="reception" />
              <div class="flex-2">
                <div class="flex items-center gap-1 mb-0.5">
                  <span class="text-[#c46e6e] text-[1.2rem]">📍</span>
                  <span class="font-['arapey-regular'] text-[1.2rem] font-bold text-[#5a4a3a]">Les Talus</span>
                </div>
                <p class="font-['arapey-regular'] text-[0.75rem] text-[#7a6e5a] mb-1 pl-5">Okaibey</p>
                <p class="sk-title-1 set-moderline-bold text-[2.4rem] leading-none text-[#5a4a3a]">Welcome Reception</p>
                <p class="font-['arapey-regular'] text-[1.2rem] text-[#7a6e5a] mt-1">7:00 PM</p>
                <a target="_blank" rel="noopener" href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigATIJCAQQIRgKGKABMgcIBRAhGI8CMgcIBhAhGI8CMgcIBxAhGI8C0gEJMTM2MzFqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=lb&sa=X&geocode=Kb3X-vIMRB8VMSkiACYYaf2x&daddr=3M26%2BF5C,+Lebanon,+Okaybeh" class="sk-btn mt-2 inline-block" style="font-size:12px;padding:5px 16px;">Venue Map</a>
              </div>
            </div>

            <div class="flex items-center justify-between gap-3 pt-10">
              <div class="flex-1">
                <div class="flex items-center gap-1 mb-0.5">
                  <span class="text-[#c46e6e] text-[1.2rem]">📍</span>
                  <span class="font-['arapey-regular'] text-[1.2rem] font-bold text-[#5a4a3a]">Les Talus</span>
                </div>
                <p class="font-['arapey-regular'] text-[0.75rem] text-[#7a6e5a] mb-1 pl-5">Okaibey</p>
                <p class="sk-title-1 text-[2.4rem] leading-none text-[#5a4a3a]">Wedding Celebration</p>
                <p class="font-['arapey-regular'] text-[1.2rem] text-[#7a6e5a] mt-1">8:00 PM</p>
                <a target="_blank" rel="noopener" href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigATIJCAQQIRgKGKABMgcIBRAhGI8CMgcIBhAhGI8CMgcIBxAhGI8C0gEJMTM2MzFqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=lb&sa=X&geocode=Kb3X-vIMRB8VMSkiACYYaf2x&daddr=3M26%2BF5C,+Lebanon,+Okaybeh" class="sk-btn mt-2 inline-block" style="font-size:12px;padding:5px 16px;">Venue Map</a>
              </div>
              <img class="w-[120px] flex-shrink-0 drop-shadow-sm" src="../assets/images/sako-kate/cake.svg" alt="reception" />
            </div>

          </div>
        </div>
      </LazySwiperSlide>
      <!-- ── SLIDE 5 · Gift / Bank details ──────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col overflow-hidden">
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/5.webp" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <div class="relative z-[2] flex flex-col flex-1 px-6 pt-8 pb-4">
            <p class="text-center text-[0.8rem] tracking-widest mb-1 text-[#7a6e5a]">WEDDING GIFT</p>
            <h2 class="text-center set-moderline text-[1.8rem] text-[#5a4a3a] mb-1">With Love</h2>
            <p class="text-center text-[0.82rem] text-[#7a6e5a] mb-5 leading-relaxed">
              Your presence is the greatest gift.<br />
              However, if you wish to honor us,<br />
              please find the details below:
            </p>

            <!-- Whish -->
            <div class="gift-row">
              <div class="gift-row__label">
                <span class="gift-row__caption">Within Lebanon</span>
                <img class="w-10" src="../assets/images/mohammad-rawan/whish.png" alt="Whish" />
              </div>
              <div class="gift-row__details">
                <p class="gift-row__text">Whish account number:<br /><strong>30654592-03</strong></p>
                <img v-if="!copiedWhish" @click="copyWhish" class="w-7 cursor-pointer flex-shrink-0" src="../assets/images/mohammad-rawan/copy-to-clipboard.svg" alt="copy" />
                <img v-else class="w-6 flex-shrink-0" src="../assets/images/mohammad-rawan/checkmark.svg" alt="copied" />
              </div>
            </div>

            <div class="gift-divider"></div>

            <!-- Bank IBAN -->
            <div class="gift-row">
              <div class="gift-row__label">
                <span class="gift-row__caption">International transfer</span>
              </div>
              <div class="gift-row__details">
                <p class="gift-row__text">
                  IBAN: <strong>QA53BBME00000000000232359001</strong><br />
                </p>
                <img v-if="!copiedIBAN" @click="copyIBAN" class="w-7 cursor-pointer flex-shrink-0" src="../assets/images/mohammad-rawan/copy-to-clipboard.svg" alt="copy" />
                <img v-else class="w-6 flex-shrink-0" src="../assets/images/mohammad-rawan/checkmark.svg" alt="copied" />
              </div>
            </div>
          </div>
        </div>
      </LazySwiperSlide>

      <!-- ── SLIDE 6 · RSVP Form ────────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex flex-col overflow-hisdden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/6.webp" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <!-- content -->
          <div class="rsvpMain relative z-[2] flex-1 px-4 flex flex-col justify-center">
            <div
              class="w-full"
              :class="[
                alreadySubmited ? 'hidden' : '',
                transition ? ' page-enter-from hidden' : '',
              ]"
            >
              <h3 class="text-center text-[1.4rem] mb-4 mt-2 sk-title-1 text-[#5a4a3a]">
                We kindly ask you <br> to confirm your attendance <br> by the 2 of July 2026
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

                <h2 class="rsvp-confirm__title set-moderline">
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

                <h2 class="rsvp-confirm__title set-moderline">
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

      <!-- ── SLIDE 7 · Thank You ──────────────── -->
      <LazySwiperSlide>
        <div class="page-start h-full w-full relative flex items-center justify-start overflow-hidden">
          <!-- full-cover background -->
          <img class="absolute inset-0 w-full h-full object-cover object-bottom z-0" src="../assets/images/sako-kate/7.webp" alt="" aria-hidden="true" />
          <div class="absolute inset-0 bg-white/40 z-[1]"></div>
          <!-- content -->
          <div class="relative z-[2] pl-8 pt-8">
            <h1 class="w-full text-left text-[2.4rem] leading-snug">
              <p class="mb-2">Let&rsquo;s toast to</p>
              <span class="text-[#7a6e5a] set-moderline inline font-bold">love</span>,
              laughter, <br /> and happily <br /> ever after!
            </h1>
          </div>
          <!-- powered by badge -->
          <div class="absolute bottom-4 w-full flex justify-center z-[2]">
            <div class="flex items-center gap-1.5 bg-white/40 rounded-full px-3 py-1">
              <img src="/favicon.png" class="w-4 h-4" alt="e-vents" />
              <span class="text-[10px] text-[#7a6e5a] tracking-widest">powered by e-vents</span>
            </div>
          </div>
        </div>
      </LazySwiperSlide>

    </Swiper>

  </section>

  <!-- ── Background music ─────────────────────── -->
  <audio ref="audioRef" loop preload="auto">
    <source src="../assets/music/sako-kate/background-opt.mp3" type="audio/mpeg" />
  </audio>

  <!-- Floating music toggle button -->
  <button
    class="music-btn"
    :class="{ 'music-btn--playing': isPlaying }"
    @click="toggleMusic"
    :aria-label="isPlaying ? 'Pause music' : 'Play music'"
  >
    <!-- Musical note icon -->
    <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M9 3v10.55A4 4 0 1 0 11 17V7h4V3H9z"/>
    </svg>
    <!-- Pause bars icon -->
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  </button>

  <!-- ── Cloud curtain opening animation ──────── -->
  <Transition name="cloud-fade" :duration="3000">
    <div v-if="showClouds" class="cloud-curtain" aria-hidden="true">
      <!-- Left cloud half – covers full screen, bumpy right edge at center -->
      <div class="cloud-panel cloud-panel--left">
        <svg class="cloud-shape" viewBox="0 0 400 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0,0 L 200,0
               Q 278,48  200,98
               Q 288,156 200,208
               Q 270,260 200,314
               Q 284,368 200,420
               Q 272,474 200,526
               Q 282,580 200,632
               Q 268,684 200,736
               Q 280,778 200,800
               L 0,800 Z"
            fill="rgba(255,255,255,0.90)"
          />
        </svg>
      </div>
      <!-- Right cloud half – mirrors left -->
      <div class="cloud-panel cloud-panel--right">
        <svg class="cloud-shape" viewBox="0 0 400 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 400,0 L 200,0
               Q 122,48  200,98
               Q 112,156 200,208
               Q 130,260 200,314
               Q 116,368 200,420
               Q 128,474 200,526
               Q 118,580 200,632
               Q 132,684 200,736
               Q 120,778 200,800
               L 400,800 Z"
            fill="rgba(255,255,255,0.90)"
          />
        </svg>
      </div>
    </div>
  </Transition>
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

// ── Cloud curtain ────────────────────────
const showClouds = ref(true);

// ── Background music ─────────────────────────
const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const toggleMusic = () => {
  const audio = audioRef.value;
  if (!audio) return;
  if (isPlaying.value) {
    audio.pause();
    isPlaying.value = false;
  } else {
    audio.play().then(() => { isPlaying.value = true; }).catch(() => {});
  }
};

// Start music on first user interaction (bypasses autoplay block)
const startMusicOnce = () => {
  const audio = audioRef.value;
  if (!audio || isPlaying.value) return;
  audio.volume = 0.4;
  audio.play().then(() => {
    isPlaying.value = true;
    document.removeEventListener('touchstart', startMusicOnce);
    document.removeEventListener('click', startMusicOnce);
  }).catch(() => {});
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

  // Pre-set volume so it's ready before any play() call
  nextTick(() => {
    const audio = audioRef.value;
    if (!audio) return;
    audio.volume = 0.4;
    // Try autoplay immediately (works on desktop / returning visitors)
    audio.play().then(() => {
      isPlaying.value = true;
    }).catch(() => {
      // Browser blocked autoplay — play on the very first interaction
      document.addEventListener('touchstart', startMusicOnce, { once: true });
      document.addEventListener('click', startMusicOnce, { once: true });
    });
  });

  // Open cloud curtain after a short hold so the user sees it part
  setTimeout(() => { showClouds.value = false; }, 1200);
});

// ── Gift clipboard ────────────────────────
const copiedWhish = ref(false);
const copiedIBAN  = ref(false);

const copyWhish = () => {
  navigator.clipboard.writeText('30654592-03');
  copiedWhish.value = true;
};
const copyIBAN = () => {
  navigator.clipboard.writeText('QA53BBME00000000000232359001');
  copiedIBAN.value = true;
};

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
.set-moderline {
  font-family: 'modernline', sans-serif;
}
.set-moderline-bold {
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
  margin-bottom: 1.2rem;
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

/* ── Music toggle button ─────────────────────── */
.music-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  color: #7a6e5a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.music-btn:active {
  transform: scale(0.92);
}
.music-btn--playing {
  background: rgba(138, 154, 106, 0.85);
  color: #fff;
}

/* Animated equalizer bars shown when playing */
.music-btn__bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 14px;
  margin-left: 4px;
}
.music-btn__bars span {
  display: block;
  width: 3px;
  border-radius: 2px;
  background: #fff;
  animation: eq-bar 0.8s ease-in-out infinite alternate;
}
.music-btn__bars span:nth-child(1) { height: 6px;  animation-delay: 0s; }
.music-btn__bars span:nth-child(2) { height: 14px; animation-delay: 0.2s; }
.music-btn__bars span:nth-child(3) { height: 8px;  animation-delay: 0.4s; }

@keyframes eq-bar {
  from { transform: scaleY(0.4); }
  to   { transform: scaleY(1); }
}

/* ── Gift slide ──────────────────────────────── */
.gift-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 4px;
}
.gift-row__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gift-row__caption {
  font-family: 'arapey-regular', sans-serif;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #8a9a6a;
  font-weight: bold;
}
.gift-row__details {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}
.gift-row__text {
  font-family: 'arapey-regular', sans-serif;
  font-size: 0.82rem;
  color: #5a4a3a;
  line-height: 1.6;
}
.gift-divider {
  width: 100%;
  height: 1px;
  background: #d6cfc5;
  margin: 12px 0;
}

/* ── Cloud curtain ───────────────────────────── */
.cloud-curtain {
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  overflow: hidden;
}

/* Both panels are full-screen, stacked — left exits left, right exits right */
.cloud-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.cloud-panel--left {
  filter: drop-shadow(6px 0 18px rgba(140,140,140,0.28));
}
.cloud-panel--right {
  filter: drop-shadow(-6px 0 18px rgba(140,140,140,0.28));
}

.cloud-shape {
  width: 100%;
  height: 100%;
  display: block;
}

/* Exit: panels slide apart, then curtain fades out */
.cloud-fade-leave-active .cloud-panel--left,
.cloud-fade-leave-active .cloud-panel--right {
  transition: transform 1.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.cloud-fade-leave-active {
  transition: opacity 0.35s ease 1.3s;
}
.cloud-fade-leave-to {
  opacity: 0;
}
.cloud-fade-leave-to .cloud-panel--left  { transform: translateX(-100%); }
.cloud-fade-leave-to .cloud-panel--right { transform: translateX(100%); }
</style>
