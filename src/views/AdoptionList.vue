<template>
  <div class="flex flex-col items-center pb-20">
    <img src="../assets/images/title02.png" class="mx-auto mb-4 lg:mb-6" alt="">
    <!-- 卡片 -->
    <div class="px-2 lg:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <div class="rounded-3xl bg-white" style="box-shadow:0px 4px 8px #00000014;" v-for="(item) in pageDataForEachPage[pageData.currentPage - 1]"
        :key="item.title">
        <img :src="require(`../assets/images/pet-image/${item.painting}.png`)" class="w-full rounded-t-3xl" alt="">
        <div class="px-6 flex flex-col">
          <p class="mt-7 font-bold">等家中 - {{ item.name }}</p>
          <p class="mt-4 mb-6 text-line-clamp-2">{{ item.description }}</p>
          <div class="w-full h-px mt-auto block" style="background-color: #ececec;"></div>
          <div class="text-center my-4">
            <router-link :to="`/adoption-detail/${item.name}`" class="text-base w-auto">MORE</router-link>
          </div>
        </div>
      </div>
    </div>
    <ul class="flex mt-14">
      <li class="me-3 cursor-pointer" v-if="pageData.hasPre"
      @click="changePage(pageData.currentPage - 1)">
        <img src="../assets/images/chevron-left.svg" style="width: 16px; height:28px;" alt="">
      </li>
      <li v-for="(item, i) in pageData.pageNum" :key="item"
      class="page-option cursor-pointer text-kalam text-xl font-bold me-3" @click="changePage(i+1)">{{item}}</li>
      <li class="cursor-pointer" v-if="pageData.hasNext"
       @click="changePage(pageData.currentPage + 1)">
        <img src="../assets/images/chevron-right.svg" style="width: 16px; height:28px;" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    // 取得資訊
    const store = useStore()
    const adoptionDataGetKeys = { ...store.state.adoptionData }
    const keys = Object.keys(adoptionDataGetKeys)

    const data = ref([])
    keys.forEach((item) => {
      data.value.push(adoptionDataGetKeys[item])
    })

    // 頁面資料
    const pageData = ref(
      {
        currentPage: 1,
        pageNum: [],
        hasPre: true,
        hasNext: false
      }
    )

    // 計算總頁數
    const totalPageNum = Math.ceil((data.value.length) / 6)
    for (let i = 1; i <= totalPageNum; i++) {
      pageData.value.pageNum.push(i)
    }

    // 整理各頁資料
    const notProxyPageData = []
    for (let i = 1; i <= totalPageNum; i++) {
      notProxyPageData.push([])
    }
    data.value.forEach((item, i) => {
      const targetPage = Math.ceil((i + 1) / 6)
      notProxyPageData[targetPage - 1].push(item)
    })
    const pageDataForEachPage = ref(notProxyPageData)

    // 換頁
    function changePage (num) {
      pageData.value.currentPage = num
      const pageOptionsHTMLCollection = document.getElementsByClassName('page-option')
      const pageOptions = [...pageOptionsHTMLCollection]
      pageOptions.forEach((item, i) => {
        if ((i + 1) === pageData.value.currentPage) {
          item.classList.add('text-orange')
        } else {
          item.classList.remove('text-orange')
        }
      })

      if (pageData.value.currentPage === 1) {
        pageData.value.hasPre = false
      } else {
        pageData.value.hasPre = true
      }

      if (pageData.value.currentPage === pageData.value.pageNum.length) {
        pageData.value.hasNext = false
      } else {
        pageData.value.hasNext = true
      }
    }

    // 預設為第一頁
    onMounted(() => {
      changePage(1)
    })

    return {
      pageData,
      data,
      pageDataForEachPage,
      changePage
    }
  }
}

</script>
