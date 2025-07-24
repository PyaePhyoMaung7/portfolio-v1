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
        <ul class="flex justify-between items-center text-lg">
          <li v-for="(tab, index) in tabs" :key="index">
            <a
              href="#"
              :class="{ 'tab-active': activeTab === index }"
              @click.prevent="changeTab(index)"
            >
              {{ tab }}
            </a>
          </li>
          <li class="px-2 border-2 rounded-full overflow-hidden select-none shadow-inner">
            <button
              @click="setLang('en')"
              :class="[
                'flex-1 cursor-pointer transition-colors duration-300 border-r-2 px-1',
                locale === 'en' ? ' z-10' : 'bg-transparent',
              ]"
              aria-label="Switch to English"
              :style="{ fontFamily: 'patrick', letterSpacing: '3px' }"
            >
              EN
            </button>
            <button
              @click="setLang('ja')"
              :class="[
                'flex-1 cursor-pointer transition-colors duration-300',
                locale === 'ja' ? 'italic  z-10' : 'bg-transparent',
              ]"
              aria-label="Switch to Japanese"
              :style="{ fontFamily: 'mincho', letterSpacing: '0' }"
            >
              日本
            </button>
          </li>
        </ul>
      </nav>
    </section>
  </main>
</template>

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
  padding: 40px;
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

<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
locale.value = 'ja'
const sky = ref<HTMLElement | null>(null)
const tabs = computed(() => [t('nav.home'), t('nav.about'), t('nav.skills'), t('nav.projects')])
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
</script>
