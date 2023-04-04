<template>
    <div class="flex flex-col items-center pb-20 px-20">
        <img src="../assets/images/title02.png" class="mx-auto mb-4 md:mb-6" alt="">
        <div class="flex flex-col md:flex-row  max-w-350 md:max-w-none px-5 items-start">
            <!-- 浪浪資訊 -->
            <div class="rounded-3xl bg-white px-4 pt-8 pb-4 md:me-6 mb-6 md:mb-0 w-fit"
             style="box-shadow:0px 4px 8px #00000014;">
                <p class="font-bold text-2xl mb-6">等家中-{{data.name}}</p>
                <div class="grid grid-cols-2 mb-6">
                    <div>
                        <div>品種｜{{data.breeds}}</div>
                        <div>年紀｜{{data.age}}</div>
                        <div>性別｜{{data.gender}}</div>
                    </div>
                    <div>
                        <div>結紮｜{{data.neuter}}</div>
                        <div>體型｜{{data.size}}</div>
                        <div>狂犬病疫苗｜{{data.vaccine}}</div>
                    </div>
                </div>
                <p class="mb-6 w-full">
                    {{data.description}}
                </p>
                <img :src="require(`../assets/images/pet-image/${data.img}.png`)" alt="pet image" class="rounded-xl w-full">
            </div>
            <!-- 中途之家資訊 -->
            <div class="rounded-3xl bg-white pb-4 w-310 sm:w-350" style="box-shadow:0px 4px 8px #00000014;">
                <img :src="require( `../assets/images/pet-image/${data.painting}.png`)" alt="pet painting" class="w-full rounded-t-3xl mb-7">
                <div class="px-6">
                    <div class="mb-5">
                        <p class="font-bold mb-2">收容所</p>
                        <p class="font-bold">高雄浪流連途之家</p>
                    </div>
                    <div class="mb-5">
                        <p class="font-bold mb-2">電話</p>
                        <p class="font-bold">07-123999</p>
                    </div>
                    <div class="mb-5">
                        <p class="font-bold mb-2">地址</p>
                        <p class="font-bold">高雄市三民區河中三路123號</p>
                    </div>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-orange text-2xl">
                        前往中途之家
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const store = useStore()
    const state = store.state
    console.log(state.adoptionData)

    const currentName = route.params.id
    console.log(currentName)

    const data = ref(state.adoptionData[currentName])

    return {
      data
    }
  }
}

</script>
