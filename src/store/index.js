import { createStore } from 'vuex'

export default createStore({
  state: {
    adoptionData: {
      小黑: {
        name: '小黑',
        breeds: '台灣土狗',
        age: '2 歲',
        gender: '公',
        neuter: '已結紮',
        size: '大型',
        vaccine: '已施打',
        img: 'real-black',
        painting: 'painting-black',
        description: '小黑十分親人，特別喜歡和小朋友玩，許多人看到他都被他的熱情感染，如果你希望他成為你家的開心果，小黑很歡迎你成為他的家人'
      },
      花花: {
        name: '花花',
        breeds: '無',
        age: '1 歲',
        gender: '母',
        neuter: '已結紮',
        size: '小型',
        vaccine: '已施打',
        img: 'real-hua',
        painting: 'painting-hua',
        description: '花花兩個月以前被志工發現前腳受傷倒在路邊，就醫後經過志工細心照顧已恢復健康，'
      },
      華仔: {
        name: '華仔',
        breeds: '台灣土狗',
        age: '7 個月',
        gender: '母',
        neuter: '已結紮',
        size: '大型',
        vaccine: '已施打',
        img: 'real-huazie',
        painting: 'painting-huazie',
        description: '目前7個月大的華仔，是個愛笑的貪吃鬼，喜歡吃西瓜還有蓮霧，是一隻吃素的乖狗，每次吃飽便躺下來呼呼大睡，看著她自在的樣子，讓人也不知不覺放鬆下來'
      },
      Smile: {
        name: 'Smile',
        breeds: '拉不拉多',
        age: '2 歲',
        gender: '公',
        neuter: '已結紮',
        size: '小型',
        vaccine: '已施打',
        img: 'real-smile',
        painting: 'painting-smile',
        description: '個性溫和的 Smile 總是笑臉迎人，他的個性活潑，每次到公園總是有活力的四處玩耍'
      },
      Snow: {
        name: 'Snow',
        breeds: '阿拉斯加雪橇犬',
        age: '2 歲',
        gender: '公',
        neuter: '已結紮',
        size: '大型',
        vaccine: '已施打',
        img: 'real-snow',
        painting: 'painting-snow',
        description: '看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出很像貓的叫聲，相當有活力，不適合關籠會發出像獅子的叫聲。 如果照片看起來像你家人，歡迎帶回家一家團圓!'
      },
      小白: {
        name: '小白',
        breeds: '狐狸犬',
        age: '2 歲',
        gender: '公',
        neuter: '已結紮',
        size: '大型',
        vaccine: '已施打',
        img: 'real-white',
        painting: 'painting-white',
        description: '小白是一隻可愛的狐狸犬，雖然一開始有點怕生，但在熟悉環境後便展現活潑的一面，看到他開心的樣子，讓人心情不知不覺得到療育'
      },
      小呆: {
        name: '小呆',
        breeds: '邊境牧羊犬',
        age: '1 歲',
        gender: '母',
        neuter: '已結紮',
        size: '大型',
        vaccine: '已施打',
        img: 'real-di',
        painting: 'painting-di',
        description: '小呆有著圓圓的大眼睛，一歲的他來自台中，原本陪著一位老奶奶生活，上個月奶奶生病住院，於是轉由志工照顧，期待你成為他的下一個家人'
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
