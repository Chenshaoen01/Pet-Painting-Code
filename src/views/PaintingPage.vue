<template>
  <div class="flex flex-col items-center pb-20">
    <img src="../assets/images/title01.png" class="mx-auto mb-4 lg:mb-10" alt="painting page title image">
    <div class="flex flex-col lg:flex-row">
      <div class="mb-8 lg:mb-0 lg:ml-8 lg:me-40">
        <p class="text-2xl text-kalam text-center lg:text-left font-bold mb-4">Designer</p>
        <div class="flex flex-row lg:flex-col justify-center">
          <p class="me-5 lg:mb-4">
            <span class="text-orange text-xl me-3 hidden lg:inline-block" v-if="currentPainter === 'All'">-</span>
            <span class="text-orange text-xl text-kalam cursor-pointer painter-name" @click="changePainter('All')"
              data-name="All">All</span>
          </p>
          <p class="me-5 lg:mb-4">
            <span class="text-orange text-xl me-3 hidden lg:inline-block" v-if="currentPainter === 'Meili'">-</span>
            <span class="text-xl text-kalam cursor-pointer painter-name" @click="changePainter('Meili')"
              data-name="Meili">Meili</span>
          </p>
          <p class="me-5 lg:mb-4">
            <span class="text-orange text-xl me-3 hidden lg:inline-block" v-if="currentPainter === 'Zoe'">-</span>
            <span class="text-xl text-kalam cursor-pointer painter-name" @click="changePainter('Zoe')"
              data-name="Zoe">Zoe</span>
          </p>
          <p class="me-5 lg:mb-4 lg:w-32">
            <span class="text-orange text-xl me-3 hidden lg:inline-block" v-if="currentPainter === 'Michael'">-</span>
            <span class="text-xl text-kalam cursor-pointer painter-name" @click="changePainter('Michael')"
              data-name="Michael">Michael</span>
          </p>
          <p>
            <span class="text-orange text-xl me-3 hidden lg:inline-block" v-if="currentPainter === 'Birdy'">-</span>
            <span class="text-xl text-kalam cursor-pointer painter-name" @click="changePainter('Birdy')"
              data-name="Birdy">Birdy</span>
          </p>
        </div>
      </div>
      <!-- 圖片區域 -->
      <div class="px-4 w-full">
        <div class="lg:px-0 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="(item) in paintingShown" :key="item">
            <img :src="require(`../assets/images/pet-image/${item.img}.png`)" class="w-full rounded-3xl" :alt="`${item.img}`">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

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

    // 設定畫家及圖片資料
    const currentPainter = ref('All')
    const paintingInfo = ref([
      { painter: 'Meili', img: 'painting-smile' },
      { painter: 'Zoe', img: 'painting-hua' },
      { painter: 'Michael', img: 'painting-black' },
      { painter: 'Birdy', img: 'painting-white' },
      { painter: 'Michael', img: 'painting-di' },
      { painter: 'Meili', img: 'painting-snow' },
      { painter: 'Birdy', img: 'painting-huazie' }
    ])
    const paintingShown = ref(paintingInfo.value)
    const changePainter = (name) => {
      currentPainter.value = name
    }

    watch(currentPainter, (value) => {
      // 畫家名稱變動更改設計師名字顏色
      const painterNameHTMLCollection = document.getElementsByClassName('painter-name')
      const painterName = [...painterNameHTMLCollection]
      painterName.forEach((item) => {
        if (item.dataset.name === value) {
          item.classList.add('text-orange')
        } else {
          item.classList.remove('text-orange')
        }
      })

      // 畫家名稱變動更改圖片資料
      if (value === 'All') {
        paintingShown.value = paintingInfo.value
      } else {
        paintingShown.value = paintingInfo.value.filter((item) => {
          return item.painter === value
        })
      }
    })
    return {
      currentPainter,
      paintingShown,
      changePainter,
      paintingInfo
    }
  }
}

</script>
