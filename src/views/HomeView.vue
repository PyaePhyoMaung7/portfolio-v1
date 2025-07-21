<script setup lang="ts"></script>

<template>
  <main>
    <div ref="sky" class="main-background relative">
      <img src="/images/moon.png" class="moon w-20 absolute top-20 left-[30%] z-10" />
      <img
        src="/images/fuji.png"
        class="fujisan absolute top-0 left-0 w-screen h-screen object-cover object-center"
      />
      <div class="samurai-container absolute z-10 bottom-[0%] right-[0%]">
        <img
          src="/images/tree2.png"
          class="tree absolute top-1 left-0 transform -translate-y-[224.5%] -translate-x-[125%] scale-350"
          style="z-index: -1 !important"
        />
        <img
          src="/images/samurai9.png"
          class="samurai absolute z-10 top-4 left-5 w-20 transform -translate-y-full"
        />
        <img src="/images/cliff5.png" class="cliff w-60" />
      </div>
    </div>
    <div class="main-content">10</div>
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
  background-image: url('/images/paper1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 300vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const sky = ref<HTMLElement | null>(null)

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

  setTimeout(() => {
    const samuraiImg = document.querySelector('.samurai')
    if (samuraiImg) {
      samuraiImg.src = '/images/samurai8.png'
    }
  }, 2000)
})
</script>
