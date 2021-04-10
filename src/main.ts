import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@/plugins/fontAwesome'
import firebase from 'firebase/app'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDCwAMKLD0qwBFhN2KMKg6DT7nFWJIh5vo',
  authDomain: 'rasmusgerdin-com.firebaseapp.com',
  projectId: 'rasmusgerdin-com',
  storageBucket: 'rasmusgerdin-com.appspot.com',
  messagingSenderId: '136942491679',
  appId: '1:136942491679:web:2829cd4d5527daec0b9d2a',
  measurementId: 'G-2F66F8XMKY'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
