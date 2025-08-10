<script setup lang="ts"></script>

<template>
  <main>
    <section ref="sky" class="main-background relative">
      <img src="/images/moon.png" class="moon w-20 absolute top-20 left-[30%] z-10" />
      <img
        src="/images/fuji.png"
        class="fujisan absolute top-0 left-0 w-screen h-screen object-cover object-center"
      />
      <div
        class="d-flex flex-col gap-0 absolute top-25 left-5 z-15 text-4xl text-center text-[#B5B5B5] scroll-message"
        style="font-family: Arial, Helvetica, sans-serif"
      >
        <div class="text">S</div>
        <div class="text">C</div>
        <div class="text">R</div>
        <div class="text">O</div>
        <div class="text">L</div>
        <div class="text">L</div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="mt-3"
        >
          <path d="M1 1L6 6L11 1" stroke-width="2" />
        </svg>
        <svg
          width="50"
          height="50"
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="-mt-5"
        >
          <path d="M1 1L6 6L11 1" stroke-width="2" />
        </svg>
        <svg
          width="50"
          height="50"
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="-mt-5"
        >
          <path d="M1 1L6 6L11 1" stroke-width="2" />
        </svg>
        <svg
          width="50"
          height="50"
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="-mt-5"
        >
          <path d="M1 1L6 6L11 1" stroke-width="2" />
        </svg>
      </div>

      <div class="samurai-container absolute z-10 bottom-[0%] right-[0%]">
        <img
          src="/images/tree.png"
          class="tree absolute top-1 left-0 transform -translate-y-[224.5%] -translate-x-[125%] scale-350"
          style="z-index: -1 !important"
        />
        <img
          src="/images/samurai1.png"
          class="samurai absolute z-10 top-4 left-5 w-20 transform -translate-y-full"
        />
        <img src="/images/cliff.png" class="cliff w-60" />
      </div>
    </section>
    <!-- style="opacity: 0" for main-content -->
    <section
      v-if="showMainContent"
      class="main-content absolute top-0 left-0 z-15 overflow-hidden h-screen w-screen"
    >
      <div class="progress-container absolute top-0 left-0 z-30" style="height: 3px; width: 100%">
        <div class="progress-bar bg-[#9a5c30] h-full" :style="{ width: progress + '%' }"></div>
      </div>
      <nav>
        <ul class="flex justify-between items-center text-lg font-bold">
          <li>
            <a
              href="#"
              :class="['text-2xl', { 'tab-active': activeTab === 'home' }]"
              @click.prevent="changeTab('home')"
            >
              {{ t('nav.home') }}
            </a>
          </li>
          <li>
            <a
              href="#"
              :class="['text-2xl', { 'tab-active': activeTab === 'about' }]"
              @click="changeTab('about')"
            >
              {{ t('nav.about') }}
            </a>
          </li>
          <li>
            <a
              href="#"
              :class="['text-2xl', { 'tab-active': activeTab === 'skills' }]"
              @click.prevent="changeTab('skills')"
            >
              {{ t('nav.skills') }}
            </a>
          </li>
          <li>
            <a
              href="#"
              :class="['text-2xl', { 'tab-active': activeTab === 'experience' }]"
              @click.prevent="changeTab('experience')"
            >
              {{ t('nav.project') }}
            </a>
          </li>
          <li class="overflow-hidden select-none shadow-inner">
            <button
              @click="setLang('en')"
              :class="[
                'rounded-l-full text-center border-2 cursor-pointer px-2',
                locale === 'en'
                  ? 'bg-[#9A5C30] text-[#FCEDD5] border-black z-10'
                  : 'bg-transparent',
              ]"
              aria-label="Switch to English"
              :style="{ fontFamily: 'patrick', letterSpacing: '3px' }"
            >
              EN
            </button>
            <button
              @click="setLang('ja')"
              :class="[
                'rounded-r-full border-2 border-l-0 cursor-pointer px-2',
                locale === 'ja'
                  ? 'bg-[#9A5C30] text-[#FCEDD5] border-black z-10'
                  : 'bg-transparent',
              ]"
              aria-label="Switch to Japanese"
              :style="{ fontFamily: 'mincho', letterSpacing: '0' }"
            >
              日本
            </button>
          </li>
        </ul>
      </nav>
      <div class="scroll-container overflow-auto h-full" ref="scrollContainer">
        <section id="home" class="home h-120 grid grid-cols-2">
          <div class="flex items-center justify-center text-center">
            <div class="">
              <div class="my-5 text-2xl overflow-hidden py-1">
                <div class="intro">
                  <span
                    v-html="formatIntroText(t('home.intro.greeting', { name: 'name' }), 'name')"
                  ></span>
                </div>
              </div>
              <div class="text-2xl my-5 overflow-hidden py-1">
                <div class="intro">
                  <span
                    v-html="formatIntroText(t('home.intro.role', { role: 'role' }), 'role')"
                  ></span>
                </div>
              </div>
              <div class="text-2xl my-5 overflow-hidden py-1">
                <div class="intro">
                  <span
                    v-html="
                      formatIntroText(t('home.intro.closing', { action: 'action' }), 'action')
                    "
                  ></span>
                </div>
              </div>
              <div class="text-xl my-5 overflow-hidden py-1">
                <a href="/Pyae_Phyo_Maung_Resume.docx" download>
                  <button class="cv-button bg-[#9A5C30] text-[#FCEDD5] px-6 py-2 cursor-pointer">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center relative mt-7">
            <svg-icon
              type="mdi"
              :path="mdiXml"
              style="width: 50px; height: 50px"
              class="profile-icon absolute top-15 left-40 text-[#9A5C30]"
            ></svg-icon>
            <svg-icon
              type="mdi"
              :path="mdiServerOutline"
              style="width: 50px; height: 50px"
              class="profile-icon absolute top-45 left-30 text-[#9A5C30]"
            ></svg-icon>
            <svg-icon
              type="mdi"
              :path="mdiDatabaseArrowUpOutline"
              style="width: 50px; height: 50px"
              class="profile-icon absolute top-75 left-40 text-[#9A5C30]"
            ></svg-icon>
            <div class="ml-20" style="width: 200px">
              <img src="/images/profile.png" class="profile-img" />
            </div>
          </div>
        </section>
        <section id="about" class="about h-screen mb-5 flex flex-start items-center">
          <div class="container grid grid-cols-2 gap-10">
            <div class="text-xl">
              <div class="overflow-hidden py-1 mb-7">
                <div class="about-title">
                  <span class="text-[#9A5C30] font-bold text-3xl">
                    {{ t('about.me.title') }}
                  </span>
                </div>
              </div>
              <div class="about-left-para">
                <p
                  class="mb-5"
                  v-html="
                    formatAboutText(t('about.me.text1', { year: t('about.year') }), 'about.year')
                  "
                ></p>
                <p
                  class="mb-5"
                  v-html="
                    formatAboutText(
                      t('about.me.text2', { tech1: 'Vue', tech2: 'Nuxt', tech3: 'Laravel' }),
                      ['about.vue', 'about.nuxt', 'about.laravel'],
                    )
                  "
                ></p>
                <p
                  class="mb-5"
                  v-html="
                    formatAboutText(
                      t('about.me.text3', {
                        value1: t('about.value1'),
                        value2: t('about.value2'),
                        value3: t('about.value3'),
                      }),
                      ['about.value1', 'about.value2', 'about.value3'],
                    )
                  "
                ></p>
                <p
                  class=""
                  v-html="
                    formatAboutText(
                      t('about.me.text4', {
                        habit1: t('about.habit1'),
                        habit2: t('about.habit2'),
                      }),
                      ['about.habit1', 'about.habit2'],
                    )
                  "
                ></p>
              </div>
            </div>
            <div>
              <div class="overflow-hidden py-1 mb-7">
                <div class="about-title">
                  <span class="text-[#9A5C30] font-bold text-3xl">
                    {{ t('about.education.title') }}
                  </span>
                </div>
              </div>
              <ul class="about-right-para">
                <li>
                  <div class="flex items-center gap-5 mb-5 text-xl">
                    <svg-icon
                      type="mdi"
                      :path="mdiBullseyeArrow"
                      style="width: 30px; height: 30px"
                      class="text-[#9A5C30]"
                    ></svg-icon>
                    <p>
                      {{ t('about.education.text1') }}
                    </p>
                  </div>
                  <div class="flex items-center gap-5 mb-5 text-xl">
                    <svg-icon
                      type="mdi"
                      :path="mdiBullseyeArrow"
                      style="width: 30px; height: 30px"
                      class="text-[#9A5C30]"
                    ></svg-icon>
                    <p>
                      {{ t('about.education.text2') }}
                    </p>
                  </div>
                  <div class="flex items-center gap-5 mb-5 text-xl">
                    <svg-icon
                      type="mdi"
                      :path="mdiBullseyeArrow"
                      style="width: 30px; height: 30px"
                      class="text-[#9A5C30]"
                    ></svg-icon>
                    <p>
                      {{ t('about.education.text3') }}
                    </p>
                  </div>
                  <div class="flex items-center gap-5 mb-5 text-xl">
                    <svg-icon
                      type="mdi"
                      :path="mdiBullseyeArrow"
                      style="width: 30px; height: 30px"
                      class="text-[#9A5C30]"
                    ></svg-icon>
                    <p>
                      {{ t('about.education.text4') }}
                    </p>
                  </div>
                  <div class="flex items-center gap-5 mb-5 text-xl">
                    <svg-icon
                      type="mdi"
                      :path="mdiBullseyeArrow"
                      style="width: 30px; height: 30px"
                      class="text-[#9A5C30]"
                    ></svg-icon>
                    <p>
                      {{ t('about.education.text5') }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="skills" class="skills h-130 mt-15" style="border: red">
          <div class="h-full flex flex-col justify-center items-center">
            <div class="flex justify-center items-center gap-25 mb-15 overflow-hidden w-full">
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/HTML5.svg"
                  alt="html icon"
                  style="width: 40px"
                />
                <span class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] z-15"
                  >HTML</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/CSS3.svg"
                  alt="css icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[2px] z-15"
                  >CSS</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/JavaScript.svg"
                  alt="javascript icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-25px] z-15"
                  >JavaScript</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/jQuery.svg"
                  alt="jquery icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-8px] z-15"
                  >jQuery</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/Bootstrap.svg"
                  alt="bootstrap icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-20px] z-15"
                  >Bootstrap</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/TailwindCSS.svg"
                  alt="tailwind css icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-30px] z-15"
                  >TailwindCSS</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/TypeScript.svg"
                  alt="typescript icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-25px] z-15"
                  >TypeScript</span
                >
              </div>
            </div>
            <div class="flex justify-center items-center gap-25 overflow-hidden w-full">
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/VueJs.svg"
                  alt="vue js icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-10px] z-15"
                  >VueJs</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/NuxtJs.svg"
                  alt="nuxt js icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-10px] z-15"
                  >NuxtJs</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/Vuetify.svg"
                  alt="vuetify icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-12px] z-15"
                  >Vuetify</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/PHP.svg"
                  alt="php icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[5px] z-15"
                  >PHP</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/Laravel.svg"
                  alt="laravel icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-15px] z-15"
                  >Laravel</span
                >
              </div>
              <div class="svg-container relative">
                <img
                  class="tech-icon cursor-pointer"
                  src="/icons/MySQL.svg"
                  alt="mysql icon"
                  style="width: 40px"
                />
                <span
                  class="tech-text text-xl font-bold text-[#9a5c30] absolute top-[60px] left-[-10px] z-15"
                  >MySQL</span
                >
              </div>
            </div>
          </div>
        </section>
        <section id="experience" class="experience"></section>
        <section id="contact" class="contact"></section>
      </div>
      <div class="absolute right-17 bottom-5 overflow-hidden pt-5">
        <button
          class="contact-btn bg-[#9A5C30] text-[#FCEDD5] border-2 border-black rounded-full cursor-pointer font-bold"
          style="width: 80px; height: 80px"
        >
          {{ t('nav.contact') }}
        </button>
        <div
          class="contact-btn-shadow left-1/2 bg-[#373737] blur-[2px]"
          style="width: 80px; height: 10px; border-radius: 50%"
        ></div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, ref, computed, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { SplitText } from 'gsap/all'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiXml, mdiServerOutline, mdiDatabaseArrowUpOutline, mdiBullseyeArrow } from '@mdi/js'

const { t, locale } = useI18n()
locale.value = 'en'
const sky = ref<HTMLElement | null>(null)
let intro = <gsap.core.Timeline | null>null
let profile = <gsap.core.Timeline | null>null
let about = <gsap.core.Timeline | null>null
const activeTab = ref<string>('home')
const progress = ref<number>(0)
const scrollContainer = ref<HTMLElement | null>(null)
// false for final
const showMainContent = ref<boolean>(true)

const sections = ['home', 'about', 'skills', 'projects']

onMounted(() => {
  gsap.from('.samurai-container', {
    x: 50,
    y: 50,
    duration: 1,
  })

  gsap.from('.moon', {
    y: 70,
    x: 200,
    duration: 2,
    ease: 'power1.out',
  })

  gsap.from('.fujisan', {
    scale: 1.2,
    duration: 1,
    ease: 'power1.out',
  })

  const scrollTimeline = gsap.timeline()
  scrollTimeline
    .from('.scroll-message .text', {
      opacity: 0,
      stagger: 0.2,
      ease: 'sine.inOut',
    })
    .to('.scroll-message svg path', {
      stroke: '#B5B5B5',
      duration: 0.4,
      stagger: 0.3,
      repeat: -1,
      yoyo: false,
      ease: 'sine.inOut',
    })

  const starCount = 170

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div')
    star.classList.add('star')

    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight * 0.6

    const size = Math.random() * 2 + 1
    star.style.width = size + 'px'
    star.style.height = size + 'px'
    star.style.left = x + 'px'
    star.style.top = y + 'px'

    sky?.value.appendChild(star)

    gsap.to(star, {
      scale: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 1 + 0.5,
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 2,
      ease: 'sine.inOut',
    })
  }

  // delete in final
  runIntroAnimation()

  // use in final
  // const samuraiImg = document.querySelector('.samurai')
  // const mainContent = document.querySelector('.main-content')
  // let current = 0
  // let isAnimating = false
  // window.addEventListener('wheel', (e) => {
  //   if (isAnimating) return

  //   if (e.deltaY > 0) {
  //     if (current === 0) {
  //       // samurai reads paper
  //       isAnimating = true
  //       if (samuraiImg) samuraiImg.src = '/images/samurai2.png'
  //       setTimeout(() => {
  //         isAnimating = false
  //       }, 500)
  //       current++
  //     } else if (current === 1) {
  //       // paper shows up
  //       isAnimating = true
  //       showMainContent.value = true
  //       current++
  //       nextTick(() => {
  //         gsap.to('.main-content', {
  //           opacity: 1,
  //           duration: 0.5,
  //           ease: 'sine.inOut',
  //           onComplete() {
  //             isAnimating = false
  //           },
  //         })
  //         runIntroAnimation()
  //       })
  //     }
  //   }

  //   if (e.deltaY < 0) {
  //     if (current === 1) {
  //       // samurai stand again
  //       isAnimating = true
  //       if (samuraiImg) samuraiImg.src = '/images/samurai1.png'
  //       setTimeout(() => {
  //         isAnimating = false
  //       }, 500)
  //       current--
  //     } else if (current === 2) {
  //       // paper hides
  //       isAnimating = true
  //       gsap.to('.main-content', {
  //         opacity: 0,
  //         duration: 1,
  //         ease: 'sine.inOut',
  //         onComplete() {
  //           isAnimating = false
  //         },
  //       })
  //       current--
  //     }
  //   }
  // })
  makeContentArrowScrollable()
  runTechIconAnimation()

  // delete in final
  scrollContainer.value?.addEventListener('scroll', updateProgressAndTab)
})

const changeTab = (tabName) => {
  activeTab.value = tabName
  const target = document.querySelector(`.${tabName}`)
  if (target) {
    const navbarHeight = tabName === 'home' ? 75 : 0
    const scrollY = target.offsetTop - navbarHeight
    scrollContainer.value.scrollTo({
      top: scrollY,
      behavior: 'smooth',
    })
  }
}
const makeContentArrowScrollable = () => {
  const container = document.querySelector('.scroll-container')
  let scrollDirection = 0
  let rafId
  function smoothScroll() {
    container.scrollTop += scrollDirection * 20
    rafId = requestAnimationFrame(smoothScroll)
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      scrollDirection = 1
      if (!rafId) rafId = requestAnimationFrame(smoothScroll)
      event.preventDefault()
    } else if (event.key === 'ArrowUp') {
      scrollDirection = -1
      if (!rafId) rafId = requestAnimationFrame(smoothScroll)
      event.preventDefault()
    }
  })
  document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      scrollDirection = 0
      cancelAnimationFrame(rafId)
      rafId = null
    }
  })
}
const setLang = (lang) => {
  locale.value = lang
}
const formatIntroText = (text, key) => {
  const animatedWord = t('home.' + key)
  const formattedText = text.replace(
    `${key}`,
    `<span class="jump-text text-[#9A5C30] font-bold text-3xl">${animatedWord}</span>`,
  )
  return formattedText
}
const formatAboutText = (text, keys) => {
  if (!Array.isArray(keys)) {
    keys = [keys]
  }
  let formattedText = text
  keys.forEach((key) => {
    const word = t(key)
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(escapedWord, 'g')
    formattedText = formattedText.replace(
      regex,
      `<span class="text-[#9A5C30] font-bold">${word}</span>`,
    )
  })
  return formattedText
}
const updateProgressAndTab = () => {
  if (!scrollContainer.value) return
  const scrollTop = scrollContainer.value.scrollTop
  const scrollHeight = scrollContainer.value.scrollHeight
  const clientHeight = scrollContainer.value.clientHeight
  const scrollableHeight = scrollHeight - clientHeight
  progress.value = Math.min(100, (scrollTop / scrollableHeight) * 100)

  let currentSection = activeTab.value
  for (const sectionName of sections) {
    const el = scrollContainer.value.querySelector(`.${sectionName}`) as HTMLElement
    if (!el) continue
    const containerTop = scrollContainer.value.getBoundingClientRect().top
    const rect = el.getBoundingClientRect()
    if (rect.top - containerTop <= 60 && rect.bottom - containerTop > 60) {
      currentSection = sectionName
      break
    }
  }
  activeTab.value = currentSection
}
const runTechIconAnimation = () => {
  document.querySelectorAll('.svg-container').forEach((container) => {
    const svg = container.querySelector('.tech-icon')
    const text = container.querySelector('.tech-text')
    const tl = gsap.timeline({ paused: true })
    tl.to(svg, {
      duration: 0.2,
      rotationX: 90,
      transformOrigin: '50% 100%',
      ease: 'power2.in',
    }).to(
      text,
      {
        duration: 0.3,
        top: '-5px',
        ease: 'power2.out',
      },
      '>',
    )
    container.addEventListener('mouseenter', () => {
      tl.play()
    })
    container.addEventListener('mouseleave', () => {
      tl.reverse()
    })
  })
}
const runIntroAnimation = () => {
  intro = gsap.timeline({
    scrollTrigger: {
      trigger: '.home',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
  intro.from('.intro', {
    y: 40,
    duration: 0.4,
    ease: 'power3.out',
    stagger: 0.2,
  })
  intro.from('.cv-button', {
    opacity: 0,
    scale: 0.8,
    duration: 0.4,
    ease: 'bounce.out',
  })
  intro.from(
    '.contact-btn',
    {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'ease.out',
    },
    '<',
  )
  intro.from(
    '.contact-btn-shadow',
    {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'ease.out',
    },
    '<',
  )
  intro.add(() => {
    gsap.to('.contact-btn', {
      y: -15,
      duration: 0.8,
      ease: 'ease.inOut',
      repeat: -1,
      yoyo: true,
    })

    gsap.to('.contact-btn-shadow', {
      scaleX: 0.6,
      scaleY: 0.4,
      opacity: 0.5,
      duration: 0.8,
      ease: 'power1.out',
      repeat: -1,
      yoyo: true,
    })
  })
  intro.to({}, { duration: 0.5 })
  intro.add(() => {
    const split = SplitText.create('.jump-text', {
      type: 'words',
      mask: 'lines',
    })
    const jump = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
    split.words.forEach((word) => {
      jump
        .to(word, {
          y: -5,
          duration: 0.2,
        })
        .to(
          word,
          {
            y: 0,
            duration: 0.2,
          },
          '+=0',
        )
        .to({}, { duration: 0.1 })
    })
  })

  profile = gsap.timeline()
  profile
    .from('.profile-img', {
      scale: 0.8,
      duration: 1,
      ease: 'power3.out',
    })
    .from(
      '.profile-icon',
      {
        opacity: 0,
        scale: 0.2,
        duration: 0.2,
        ease: 'bounce.out',
        stagger: 0.2,
      },
      '-=0.8',
    )
    .to('.profile-icon', {
      scale: 1.1,
      duration: 0.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    })

  about = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      scroller: '.scroll-container',
      start: 'top 10%',
    },
  })
  about
    .from('.about-title', {
      y: 60,
      duration: 0.6,
      ease: 'power3.out',
    })
    .from(
      '.about-left-para',
      {
        opacity: 0,
        x: -20,
        duration: 0.4,
        ease: 'power3.out',
      },
      '-=0.2',
    )
    .from(
      '.about-right-para',
      {
        opacity: 0,
        x: 20,
        duration: 0.4,
        ease: 'power3.out',
      },
      '<',
    )

  gsap.from('.tech-icon', {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: 'power3.out',
    stagger: {
      amount: 0.7,
      from: 'start',
    },
    scrollTrigger: {
      trigger: '.skills',
      scroller: '.scroll-container',
      start: 'top 70%',
    },
  })
}

watch(locale, async () => {
  intro?.kill()
  intro = null
  profile?.kill()
  profile = null
  await nextTick()
  runIntroAnimation()
})
watch(scrollContainer, (val) => {
  if (val) {
    scrollContainer.value?.addEventListener('scroll', updateProgressAndTab)
  } else {
    scrollContainer.value?.removeEventListener('scroll', updateProgressAndTab)
  }
})
</script>

<style>
.main-background {
  background: linear-gradient(to bottom, #263044 0%, #3a4a63 40%, #55617b 70%, #7a86a3 100%);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.fujisan {
  z-index: 10 !important;
}
.star {
  z-index: 2 !important;
  position: absolute;
  background: radial-gradient(circle, #ffffff 0%, rgba(255, 255, 255, 0.5) 70%, transparent 100%);
  border-radius: 50%;
  opacity: 0.8;
  pointer-events: none;
}
.main-content {
  background-image: url('/images/paper.png');
  opacity: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  padding: 40px 60px;
  /* opacity: 0; */
}
.tab-active {
  background-image: url('/images/underline.png');
  background-repeat: no-repeat;
  background-size: 100% 50px;
  background-position: left bottom;
  padding-bottom: 30px;
}
.cv-button {
  border: 2px solid transparent;
}
.cv-button:hover {
  transform: scale(1.02) !important;
  border-color: black;
}
.svg-container {
  display: inline-block;
  cursor: pointer;
  perspective: 50px;
}
.tech-text {
  transform-origin: center bottom;
  user-select: none;
}
</style>
