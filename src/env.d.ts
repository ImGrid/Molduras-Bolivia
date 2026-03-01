/// <reference path="../.astro/types.d.ts" />

// Tipos globales para GSAP y Lenis
interface Window {
  gsap: typeof import('gsap').gsap;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  lenis: import('lenis').default | null;
}
