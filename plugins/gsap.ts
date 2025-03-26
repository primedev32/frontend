import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger);
declare module '#app' {
    interface NuxtApp {
      $gsap: typeof gsap;
    }
  }

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('gsap', gsap)
})