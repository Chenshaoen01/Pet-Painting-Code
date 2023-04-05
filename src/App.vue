<template>
  <div class="relative">
    <!-- 頁首選單 -->
    <div class="flex flex-col lg:flex-row py-3 px-4 lg:px-16 lg:py-12 bg-white">
      <div class="flex justify-between">
        <span class="lg:w-auto justify-between items-center cursor-pointer"
        @click="linkActiveToggle(1)"  data-link="/">
          <img src="./assets/images/logo.png" alt="logo" style="width: 119px; height: 40px">
        </span>
        <img src="./assets/images/hamburger-button.png" alt="hamburger-button" style="width:30px; height:30px"
          class="lg:hidden cursor-pointer" @click="linkAreaToggle">
      </div>

      <div id="link-area" class="lg:ml-auto items-start
            hidden lg:block">
        <span class="block lg:inline-block router-link cursor-pointer
               mt-3 lg:mt-0 lg:ml-12 leading-10 text-orange" data-link="/" @click="linkActiveToggle(1)">首頁</span>
        <span class="block lg:inline-block router-link cursor-pointer
               mt-3 lg:mt-0 lg:ml-12 leading-10" data-link="/service-introduction"
          @click="linkActiveToggle(2)">服務介紹</span>
        <span class="block lg:inline-block router-link cursor-pointer
               mt-3 lg:mt-0 lg:ml-12 leading-10" data-link="/painting" @click="linkActiveToggle(3)">設計作品</span>
        <span class="block lg:inline-block router-link cursor-pointer
               mt-3 lg:mt-0 lg:ml-12 leading-10" data-link="/adoption-list" @click="linkActiveToggle(4)">領養專區</span>
        <span class="inline-block router-link cursor-pointer
               mt-3 lg:mt-0 lg:ml-12 btn btn-orange text-base" data-link="/order-form"
          @click="linkActiveToggle(5)">毛孩似顏繪</span>
      </div>
    </div>

    <router-view />

    <!-- 頁尾 -->
    <div>
      <div class="text-center py-12 px-5 lg:flex lg:justify-center border-t-4 border-orange bg-white">
        <div class="mb-12 lg:mb-0 lg:flex lg:me-12 lg:items-center">
          <img src="./assets/images/link01.png" alt="join the team img1" class="mb-7 lg:mb-0 lg:me-4">
          <div class="lg:text-left">
            <p class="mb-5px text-2xl">加入奴才團隊</p>
            <p class="mb-3.5">我也會畫畫，希望能盡一份心力！</p>
            <button type="button" class="btn border border-primary text-lg">聯絡我們</button>
          </div>
        </div>
        <div class="mb-12 lg:mb-0 lg:flex lg:items-center">
          <img src="./assets/images/link02.png" alt="join the team img2" class="mb-7 lg:mb-0 lg:me-4">
          <div class="lg:text-left">
            <p class="mb-5px text-2xl">加入奴才團隊</p>
            <p class="mb-3.5">我也會畫畫，希望能盡一份心力！</p>
            <button type="button" class="btn border border-primary text-lg">領養專區</button>
          </div>
        </div>
      </div>
      <div class="bg-primary py-6">
        <p class="text-white text-center text-sm">Copyright © 2021 撿到寶.All rights reserved.</p>
      </div>
    </div>
    <!-- 畫面右下角連結 -->
    <router-link to="/order-form" class="hidden lg:block fixed bottom-0 end-16 cursor-pointer">
       <div class="bg-white border border-primary text-base font-bold text-center px-3 py-1 mb-2">客製我的毛孩圖</div>
       <img :src="require(`./assets/images/${currentLinkPage}.png`)" alt="">
    </router-link>
  </div>
</template>

<style>
body {
  background-image: url('../public/lightpaperfibers.png');
}
</style>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()

    // 選單展開與收合
    const linkAreaToggle = () => {
      const linkArea = document.getElementById('link-area')
      linkArea.classList.toggle('hidden')
    }

    // 按下選項切換顏色及分頁
    const linkActiveToggle = (num) => {
      // 切換選項顏色
      const linkHTMLCollection = document.getElementsByClassName('router-link')
      const link = [...linkHTMLCollection]

      if (num !== 5) {
        link.forEach((item, i) => {
          if (i + 1 === num) {
            item.classList.add('text-orange')
          } else {
            item.classList.remove('text-orange')
          }
        })
      } else {
        link.forEach((item, i) => {
          item.classList.remove('text-orange')
        })
      }

      // 切換分頁
      link.forEach((item, i) => {
        if (i + 1 === num) {
          router.push(`${item.dataset.link}`)
        }
      })

      // 關閉選單區域
      linkAreaToggle()
    }

    // 右下角連結圖示切換
    const currentLinkPage = ref('btn')
    setInterval(() => {
      setTimeout(() => {
        currentLinkPage.value = 'btn2'
      }, 0)
      setTimeout(() => {
        currentLinkPage.value = 'btn'
      }, 800)
    }, 1600)

    return {
      currentLinkPage,
      linkAreaToggle,
      linkActiveToggle
    }
  }
}
</script>
