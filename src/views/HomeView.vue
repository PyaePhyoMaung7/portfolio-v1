<script setup lang="ts"></script>

<template>
  <main>
    <section ref="sky" class="main-background relative">
      <img src="/images/moon.png" class="moon w-20 absolute top-20 left-[30%] z-10" />
      <img
        src="/images/fuji.png"
        class="fujisan absolute top-0 left-0 w-screen h-screen object-cover object-center"
      />
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
    <section class="main-content absolute top-0 left-0 z-15">
      <nav>
        <ul class="flex justify-between items-center text-lg font-bold">
          <li v-for="(tab, index) in tabs" :key="index">
            <a
              href="#"
              :class="['text-2xl', { 'tab-active': activeTab === index }]"
              @click.prevent="changeTab(index)"
            >
              {{ tab }}
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
      <section class="home grid grid-cols-2 mt-5">
        <div class="h-120 flex items-center">
          <div>
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
                  v-html="formatIntroText(t('home.intro.closing', { action: 'action' }), 'action')"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center relative">
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
      <section class="about"></section>
      <section class="skills"></section>
      <section class="experience"></section>
      <section class="contact"></section>
    </section>
  </main>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, ref, computed, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { SplitText } from 'gsap/all'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiXml, mdiServerOutline, mdiDatabaseArrowUpOutline } from '@mdi/js'

const { t, locale } = useI18n()
locale.value = 'en'
const sky = ref<HTMLElement | null>(null)
let intro = <gsap.core.Timeline | null>null
let profile = <gsap.core.Timeline | null>null
const tabs = computed(() => [
  t('nav.home'),
  t('nav.about'),
  t('nav.skills'),
  t('nav.experience'),
  t('nav.contact'),
])
const activeTab = ref(0)

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
  runIntroAnimation()
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
  //       gsap.to('.main-content', {
  //         opacity: 1,
  //         duration: 1,
  //         ease: 'sine.inOut',
  //         onComplete() {
  //           isAnimating = false
  //         },
  //       })
  //       current++
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
})

const changeTab = (index) => {
  activeTab.value = index
}
const setLang = (lang) => {
  locale.value = lang
}
const formatIntroText = (text, key) => {
  const animatedWord = t('home.' + key)
  const html = text.replace(
    `${key}`,
    `<span class="jump-text text-[#9A5C30] font-bold text-3xl">${animatedWord}</span>`,
  )
  return html
}
const runIntroAnimation = () => {
  intro = gsap.timeline()
  intro.from('.intro', {
    y: 40,
    duration: 0.4,
    ease: 'power3.out',
    stagger: 0.2,
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
}

watch(locale, async () => {
  intro?.kill()
  intro = null
  profile?.kill()
  profile = null
  await nextTick()
  runIntroAnimation()
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
</style>
