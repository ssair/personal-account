import { createStore } from 'vuex'
import personal from './modules/items'

export default createStore({
  modules: {
    personal
  }
})
