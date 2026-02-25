import gsap from "gsap"

const BAR_SELECTOR = ".bars .bar svg"

export default function initBars() {
  const bars = Array.from(
    document.querySelectorAll<SVGSVGElement>(BAR_SELECTOR)
  )
  if (!bars.length) return

  // начальное состояние: схлопнуты снизу и слегка ниже
  gsap.set(bars, {
    transformOrigin: "center bottom",
    scaleY: 0,
    y: 20,
    opacity: 0,
  })

  // последовательное появление от меньшего к большему (по DOM-порядку)
  const tl = gsap.timeline()

  tl.to(bars, {
    scaleY: 1,
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.4)", // более резвый bounce
    stagger: {
      each: 0.08,
      from: "start",
    },
  })

  // лёгкий бесконечный floating для всех столбиков
  bars.forEach((bar, index) => {
    const floatDistance = gsap.utils.random(2, 5)
    const floatDuration = gsap.utils.random(1.5, 2.5)

    gsap.to(bar, {
      y: `-=${floatDistance}`,
      duration: floatDuration,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 0.2 + index * 0.05, // сдвиг оставляем, но делаем короче
    })
  })
}

