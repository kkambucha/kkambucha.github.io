import gsap, { Linear } from "gsap"
// import music from "./assets/music.mp3"
import "./style.css"

// const audio = new Audio(music)

const cloud1 = gsap.timeline({ repeat: -1, delay: 0 })
cloud1
  .to("#cloud1", {
    duration: 6,
    x: "-150vw",
    ease: Linear.easeNone,
  })
  .call(() => {
    // audio.play()
  })

const cloud2 = gsap.timeline({ repeat: -1, delay: 4 })
cloud2.to("#cloud2", { duration: 10, x: "-150vw", ease: Linear.easeNone })

const cloud3 = gsap.timeline({ repeat: -1, delay: -6 })
cloud3.to("#cloud3", {
  duration: 5,
  x: "-150vw",
  ease: Linear.easeNone,
})

const cloud4 = gsap.timeline({ repeat: -1, delay: -7 })
cloud4.to("#cloud4", {
  duration: 13,
  x: "-150vw",
  ease: Linear.easeNone,
})

const cloud5 = gsap.timeline({ repeat: -1, delay: 0 })
cloud5.to("#cloud5", {
  duration: 3,
  x: "-150vw",
  ease: Linear.easeNone,
})
