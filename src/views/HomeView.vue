<template>
  <!-- 頁首圖片 -->
  <div>
    <img src="../assets/images/home.png" alt="homepage header image" class="hidden lg:block">
    <img src="../assets/images/home_mobile.png" alt="mobile homepage header image" class="block lg:hidden w-full">
  </div>
  <!-- 簡介 -->
  <div class="flex flex-col lg:flex-row-reverse justify-center items-center px-8 py-20 lg:px-44">
    <div>
      <p class="text-2xl text-orange text-kalam">Service</p>
      <span class="font-bold font-32 text-kalam">您出錢</span>
      <span class="ml-3 font-bold font-32 text-kalam">我出力</span>
      <br class="lg:hidden">
      <span class="md:ml-3 font-bold font-32 text-kalam">一起助浪浪</span>
      <p class="leading-8 max-w-350">我們是一群貓奴才狗奴才， 希望能透過自己小小的力量幫助浪貓浪狗們， 可我們沒什麼錢錢，但我們喜歡畫畫、喜愛貓狗，於是想到個兩全其美的好法子！
        如果您購買我們的寵物似顏繪服務， 我們將會把設計費100%全數捐給浪浪們！ 您出錢，我出力，合作無間讓浪浪有飯吃，讚啦！</p>
    </div>
    <img src="../assets/images/home01.png" alt="" class="mt-8 lg:mt-8 w-full lg:w-6/12 max-w-350 lg:max-w-none lg:me-12">
  </div>
  <!-- 近期作品 -->
  <div class="flex flex-col items-center pb-20">
    <img src="../assets/images/title01.png" class="mx-auto mb-4 lg:mb-10" alt="">
    <div class="px-4 lg:px-0 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
      <div>
        <img src="../assets/images/pet-image/painting-smile.png" class="w-full rounded-3xl lg:rounded-none" alt="">
      </div>
      <div>
        <img src="../assets/images/pet-image/painting-hua.png" class="w-full rounded-3xl lg:rounded-none" alt="">
      </div>
      <div>
        <img src="../assets/images/pet-image/painting-black.png" class="w-full rounded-3xl lg:rounded-none" alt="">
      </div>
      <div>
        <img src="../assets/images/pet-image/painting-white.png" class="w-full rounded-3xl lg:rounded-none" alt="">
      </div>
    </div>
    <div class="my-7 flex flex-col sm:block items-center">
      <router-link to="/painting" class="btn me-0 sm:me-6 mb-6 sm:mb-0 w-full text-center">查看更多作品</router-link>
      <router-link to="/order-form" class="btn btn-orange text-center w-full">客製毛孩似顏繪</router-link>
    </div>
  </div>

  <!-- 領養專區 -->
  <div class="flex flex-col items-center pb-20">
    <img src="../assets/images/title02.png" class="mx-auto mb-4 lg:mb-6" alt="">
    <p class="mb-8 lg:mb-12 px-2">這裡是在還在等家的浪浪們，若您正巧在找個家人，不訪來認識一下唄</p>
    <!-- 卡片 -->
    <div class="px-2 lg:px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
      <!-- 卡片一 -->
      <div class="rounded-3xl bg-white" style="box-shadow:0px 4px 8px #00000014;">
        <img src="../assets/images/pet-image/painting-huazie.png" class="w-full rounded-t-3xl" alt="">
        <div class="px-6">
          <p class="mt-7 font-bold">等家中-華仔</p>
          <p class="mt-4 text-line-clamp-2">目前7個月大的華仔，是個愛笑的貪吃鬼，喜歡吃西瓜還有蓮霧，是一隻吃素的乖狗，每次吃飽便躺下來呼呼大睡，看著她自在的樣子，讓人也不知不覺放鬆下來</p>
          <div class="w-full h-px mt-6" style="background-color: #ececec;"></div>
          <div class="text-center my-4">
            <button type="button" class="text-base w-auto">MORE</button>
          </div>
        </div>
      </div>
      <!-- 卡片二 -->
      <div class="rounded-3xl bg-white" style="box-shadow:0px 4px 8px #00000014;">
        <img src="../assets/images/pet-image/painting-di.png" class="w-full rounded-t-3xl" alt="">
        <div class="px-6">
          <p class="mt-7 font-bold">等家中-小呆</p>
          <p class="mt-4 text-line-clamp-2">小呆有著圓圓的大眼睛，一歲的他來自台中，原本陪著一位老奶奶生活，上個月奶奶生病住院，於是轉由志工照顧，期待你成為他的下一個家人</p>
          <div class="w-full h-px mt-6" style="background-color: #ececec;"></div>
          <div class="text-center my-4">
            <button type="button" class="text-base w-auto">MORE</button>
          </div>
        </div>
      </div>
      <!-- 卡片三 -->
      <div class="rounded-3xl bg-white" style="box-shadow:0px 4px 8px #00000014;">
        <img src="../assets/images/pet-image/painting-snow.png" class="w-full rounded-t-3xl" alt="">
        <div class="px-6">
          <p class="mt-7 font-bold">等家中-Snow</p>
          <p class="mt-4 text-line-clamp-2">看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出很像貓的叫聲，相當有活力，不適合關籠會發出像獅子的叫聲。 如果照片看起來像你家人，歡迎帶回家一家團圓!</p>
          <div class="w-full h-px mt-6" style="background-color: #ececec;"></div>
          <div class="text-center my-4">
            <button type="button" class="text-base w-auto">MORE</button>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/adoption-list" class="btn my-7 whitespace-nowrap">查看更多浪浪</router-link>
  </div>
</template>
