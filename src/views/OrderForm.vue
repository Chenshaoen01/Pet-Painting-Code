<template>
    <div class="mt-6">
        <img src="../assets/images/banner.png" alt="introduction banner" class="hidden lg:block">
        <img src="../assets/images/banner_service-sm.png" alt="mobile introduction banner" class="block lg:hidden mx-auto">
    </div>
    <div class="rounded-xl bg-white mx-6 lg:mx-auto lg:max-w-872 mt-6 lg:mt-20 mb-6 lg:mb-20"
        style="box-shadow:0px 4px 8px #00000014;">
        <div class="rounded-xl border-t-4 border-orange"></div>
        <p class="text-2xl font-bold text-center mt-11 mb-18">填寫訂購資訊</p>
        <form class="p-6">
            <div class="grid md:grid-cols-2 md:gap-6">
                <label for="first-name" class="block mb-5">
                    <p class="mb-2">名字</p>
                    <input type="text" name="first-name" v-model="answer.firstName" @change="validation('firstName')" placeholder="請輸入名字">
                    <p class="mt-1 text-red-600 font-bold" v-if="errorMessage.firstName.required.failed">
                        {{ errorMessage.firstName.required.message }}
                    </p>
                    <p class="mt-1 text-red-600 font-bold"
                        v-if="errorMessage.firstName.required.failed === false && errorMessage.firstName.reg.failed">
                        {{ errorMessage.firstName.reg.message }}
                    </p>
                </label>
                <label for="last-name" class="block mb-5">
                    <p class="mb-2">姓氏</p>
                    <input type="text" name="last-name" v-model="answer.lastName" @change="validation('lastName')" placeholder="請輸入姓氏">
                    <p class="mt-1 text-red-600 font-bold" v-if="errorMessage.lastName.required.failed">
                        {{ errorMessage.lastName.required.message }}
                    </p>
                    <p class="mt-1 text-red-600 font-bold"
                        v-if="errorMessage.lastName.required.failed === false && errorMessage.lastName.reg.failed">
                        {{ errorMessage.lastName.reg.message }}
                    </p>
                </label>
            </div>
            <label for="phone" class="block mb-5">
                <p class="mb-2">手機號碼</p>
                <input type="number" name="phone" v-model="answer.phoneNumber" @change="validation('phoneNumber')" placeholder="請輸入手機號碼">
                <p class="mt-1 text-red-600 font-bold" v-if="errorMessage.phoneNumber.required.failed">
                    {{ errorMessage.phoneNumber.required.message }}
                </p>
                <p class="mt-1 text-red-600 font-bold"
                    v-if="errorMessage.phoneNumber.required.failed === false && errorMessage.phoneNumber.reg.failed">
                    {{ errorMessage.phoneNumber.reg.message }}
                </p>
            </label>
            <label for="email" class="block mb-5">
                <p class="mb-2">電子郵件</p>
                <input type="text" name="email" v-model="answer.email" @change="validation('email')" placeholder="請輸入電子郵件">
                <p class="mt-1 text-red-600 font-bold" v-if="errorMessage.email.required.failed">
                    {{ errorMessage.email.required.message }}
                </p>
                <p class="mt-1 text-red-600 font-bold"
                    v-if="errorMessage.email.required.failed === false && errorMessage.email.reg.failed">
                    {{ errorMessage.email.reg.message }}
                </p>
            </label>
            <label for="address" class="block mb-5">
                <p class="mb-2">收件地址</p>
                <div class="grid grid-cols-2 gap-6">
                    <div>
                        <select name="address" id="" class="mb-1" v-model="answer.city">
                            <option value="" selected disabled>請選擇城市</option>
                            <option value="city1">城市1</option>
                            <option value="city2">城市2</option>
                            <option value="city3">城市3</option>
                        </select>
                        <p class="mb-2 text-red-600 font-bold" v-if="errorMessage.city.required.failed">
                            {{ errorMessage.city.required.message }}
                        </p>
                    </div>
                    <div>
                        <select name="address" id="" class="mb-1" v-model="answer.region">
                            <option value="" selected disabled>請選擇區域</option>
                            <option value="region1">區域1</option>
                            <option value="region2">區域2</option>
                            <option value="region3">區域3</option>
                        </select>
                        <p class="mb-1 text-red-600 font-bold" v-if="errorMessage.region.required.failed">
                            {{ errorMessage.region.required.message }}
                        </p>
                    </div>
                </div>
                <input type="text" name="address" placeholder="請輸入收件地址" v-model="answer.address">
                <p class="mt-1 text-red-600 font-bold" v-if="errorMessage.address.required.failed">
                    {{ errorMessage.address.required.message }}
                </p>
            </label>
            <label for="design-style" class="block mb-5">
                <p class="mb-2">選擇設計師風格</p>
                <select name="design-style" id="" class="mb-1" v-model="answer.designStyle">
                    <option value="" selected disabled>請選擇設計師風格</option>
                    <option value="Meili" selected>Meili</option>
                    <option value="Zoe">Zoe</option>
                    <option value="Michael">Michael</option>
                    <option value="Birdy">Birdy</option>
                </select>
                <p class="mt-1 text-red-600 font-bold" v-if="errorMessage.designStyle.required.failed">
                    {{ errorMessage.designStyle.required.message }}
                </p>
            </label>
            <label for="payment" class="block mb-5">
                <p class="mb-2">付款方式</p>
                <select name="payment" id="" class="mb-1" v-model="answer.payment">
                    <option value="" selected disabled>請選擇付款方式</option>
                    <option value="貨到付款" selected>貨到付款</option>
                    <option value="線上支付">線上支付</option>
                </select>
                <p class="mt-1 text-red-600 font-bold" v-if="errorMessage.payment.required.failed">
                    {{ errorMessage.payment.required.message }}
                </p>
            </label>
            <label for="other-service" class="block mb-5">
                <p class="mb-2">加購服務</p>
                <input type="checkbox" name="other-service" class="w-auto me-1" v-model="answer.giftPackage">送禮用包裝+100
                <input type="checkbox" name="other-service" class="w-auto me-1 ms-6"
                    v-model="answer.noFramePainting">無框畫+250
            </label>
            <label for="message">
                <span class="me-2">備註說明</span>
                <textarea name="message" id="" cols="30" rows="5" v-model="answer.message"></textarea>
            </label>
            <p class="text-2xl font-bold text-center mt-10 mb-12">總金額 NT$ 300</p>
            <div class="text-center mb-10">
                <button type="button" class="btn btn-orange text-2xl" @click="validateAll">
                    送出訂購資訊
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const answer = ref({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      city: '',
      region: '',
      address: '',
      designStyle: '',
      payment: '',
      giftPackage: false,
      noFramePainting: false,
      message: ''
    })

    const rule = ref({
      firstName: { required: true, reg: /^[\u4e00-\u9fa5_a-za-z]+$/ },
      lastName: { required: true, reg: /^[\u4e00-\u9fa5_a-za-z]+$/ },
      phoneNumber: { required: true, reg: /^(9)[0-9]{8}$/ },
      email: { required: true, reg: /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/ },
      city: { required: true, reg: '' },
      region: { required: true, reg: '' },
      address: { required: true, reg: '' },
      designStyle: { required: true, reg: '' },
      payment: { required: true, reg: '' },
      giftPackage: { required: false, reg: '' },
      noFramePainting: { required: false, reg: '' },
      message: { required: false, reg: '' }
    })

    const errorMessage = ref({
      firstName:
            {
              required: { failed: false, message: '請填入名字' },
              reg: { failed: false, message: '名字不符合格式' }
            },
      lastName: {
        required: { failed: false, message: '請填入姓氏' },
        reg: { failed: false, message: '姓氏不符合格式' }
      },
      phoneNumber: {
        required: { failed: false, message: '請填入電話號碼' },
        reg: { failed: false, message: '電話號碼不符合格式' }
      },
      email: {
        required: { failed: false, message: '請填入電子信箱' },
        reg: { failed: false, message: '電子信箱不符合格式' }
      },
      city: {
        required: { failed: false, message: '請選擇收件城市' },
        reg: { failed: false, message: '居住城市不符合格式' }
      },
      region: {
        required: { failed: false, message: '請選擇收件區域' },
        reg: { failed: false, message: '居住區域不符合格式' }
      },
      address: {
        required: { failed: false, message: '請填入收件地址' },
        reg: { failed: false, message: '收件地址不符合格式' }
      },
      designStyle: {
        required: { failed: false, message: '請選擇設計師風格' },
        reg: { failed: false, message: '不符合格式' }
      },
      payment: {
        required: { failed: false, message: '請選擇付款方式' },
        reg: { failed: false, message: '不符合格式' }
      },
      giftPackage: {
        required: { failed: false, message: '請選擇是否選用禮盒包裝' },
        reg: { failed: false, message: '選擇不符合格式' }
      },
      noFramePainting: {
        required: { failed: false, message: '請選擇使否選用無框畫' },
        reg: { failed: false, message: '選擇不符合格式' }
      },
      message: {
        required: { failed: false, message: '請填入備註' },
        reg: { failed: false, message: '備註不符合格式' }
      }
    })

    const validation = (target) => {
      if (rule.value[target].required === true) {
        if (answer.value[target] === '') {
          errorMessage.value[target].required.failed = true
        } else {
          errorMessage.value[target].required.failed = false
        }
      }

      if (rule.value[target].reg !== '') {
        const result = rule.value[target].reg.test(answer.value[target])
        if (result !== true) {
          errorMessage.value[target].reg.failed = true
        } else {
          errorMessage.value[target].reg.failed = false
        }
      }
    }

    const validateAll = () => {
      const validationList = ['firstName', 'lastName', 'phoneNumber', 'email', 'city', 'region', 'address', 'designStyle', 'payment']
      validationList.forEach((item) => {
        validation(item)
      })
    }

    return {
      answer,
      rule,
      errorMessage,
      validation,
      validateAll
    }
  }

}

</script>
