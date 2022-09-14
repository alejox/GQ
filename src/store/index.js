import { createStore } from 'vuex'

import auth from './modules/auth'
import interceptors from './modules/interceptors'
import membership from './modules/membership'
import academy from './modules/academy'
import section from './modules/section'
import lesson from './modules/lesson'
import wallet from './modules/wallet'
import signal from './modules/signal'
import chat from './modules/chat'
import stage from './modules/stage'
import cart from './modules/cart'
import user from './modules/user'
import staking from './modules/staking'
import swap from './modules/swap'
import plan from './modules/plan'

import vuexPersistence from '../plugins/vue-persistence'

export default createStore({
  state: {
    appName: 'B7',
  },
  modules: {
    auth,
    interceptors,
    membership,
    academy,
    section,
    lesson,
    wallet,
    signal,
    chat,
    stage,
    cart,
    user,
    staking,
    swap,
    plan
  },
  plugins: [vuexPersistence.plugin]
})
