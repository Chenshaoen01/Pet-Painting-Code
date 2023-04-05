<template>
    <!-- 服務介紹頁面 頁首圖片 -->
    <div class="mt-6">
        <img src="../assets/images/banner.png" alt="introduction banner" class="hidden md:block">
        <img src="../assets/images/banner_service-sm.png" alt="mobile introduction banner" class="block md:hidden mx-auto">
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 py-14 w-348 lg:w-auto mx-auto max-w-1000">
        <div class="flex flex-row lg:flex-col items-start px-3" v-for="(item) in stepInfo" :key="item.step">
            <img :src="require(`../assets/images/${item.imgUrl}.png`)" :alt="item.step" class="w-full w-100 lg:w-200 me-4 lg:mx-auto">
            <div class="lg:text-center w-full">
                <p class="text-orange text-xl font-bold text-kalam">{{ item.step }}</p>
                <p class="text-black text-xl font-bold">{{ item.title }}</p>
                <p class="text-black">{{ item.text1 }}</p>
                <p class="text-black">{{ item.text2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    // 進入頁面捲動到最上方
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    scrollToTop()

    const stepInfo = ref([
      {
        imgUrl: 'step01',
        step: 'STEP1',
        title: '買似顏繪服務',
        text1: '填寫購買表單',
        text2: '並完成轉帳付款'
      },
      {
        imgUrl: 'step02',
        step: 'STEP2',
        title: '設計師繪製',
        text1: '設計師繪製似顏繪',
        text2: '不提供改稿'
      },
      {
        imgUrl: 'step04',
        step: 'STEP3',
        title: '畫作提供',
        text1: '電子檔案or實體化做寄送',
        text2: '設計師提供作品'
      },
      {
        imgUrl: 'step03',
        step: 'STEP4',
        title: '幫助浪浪',
        text1: '每個月30號我們會將設計費',
        text2: '購買飼料，提供給xxx中途之家'
      }
    ])
    return {
      stepInfo
    }
  }
}
</script>
