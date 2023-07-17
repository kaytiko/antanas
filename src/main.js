import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layout/index.scss';
import * as animation from "../src/assets/layout/js/animation.js";

createApp(App).use(router).mount('#app')

document.addEventListener("DOMContentLoaded", () => {
    let str = document.querySelectorAll('p');
    animation.headerAnim();
    animation.scrollCard();
    str.forEach((text) => {
        let t = text.textContent;
        animation.addNbsp(t);
    })
});
