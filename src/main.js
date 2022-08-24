import { createApp } from 'vue'
import App from './App.vue'
import MainContent from './components/mainConten.vue'
import FooterBottom from'./components/FooterBottom.vue' 
// import CoTrang from './view/PhimCoTrang.vue'
// import HanhDong from './view/PhimHanhDong.vue'
// import HoatHinh from './view/PhimHoatHinh.vue'
// import KinhDi from './view/PhimKinhDi.vue'
// import TinhCam from './view/PhimTinhCam.vue'
// import PhimAll from './view/PhimAll.vue'
// import { createRouter , createWebHistory } from "vue-router"
// const router = createRouter({
//     history: createWebHistory(),

//     routes:[
//         { path: '/CoTrang', component: CoTrang },
//         { path: '/HanhDong', component: HanhDong }, 
//         { path: '/HoatHinh', component: HoatHinh }, 
//         { path: '/KinhDi', component: KinhDi }, 
//         { path: '/TinhCam', component: TinhCam },
//         { path: '/', component: PhimAll },
//     ] 
// })
const app = createApp(App)
app.component('MainContent', MainContent)
app.component('FooterBottom',FooterBottom)

// app.use(router)
app.mount('#app')
