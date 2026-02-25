import gsap from "gsap"

const ICON_SELECTOR = ".ai-icon"

export default function initAiIcons() {
  const icons = Array.from(
    document.querySelectorAll<HTMLImageElement>(ICON_SELECTOR)
  ).sort(
    (a, b) =>
      a.getBoundingClientRect().top - b.getBoundingClientRect().top
  ) // сначала верхние, потом нижние
  if (!icons.length) return

  icons.forEach((icon, index) => {
    const baseDelay = index * 0.2

    // начальное состояние
    gsap.set(icon, {
      opacity: 0,
      y: -20,
      scale: 0.8,
    })

    const floatDistance = gsap.utils.random(6, 12)
    const floatDuration = gsap.utils.random(3, 5)

    // таймлайн появления + бесконечный floating
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 })

    tl.to(icon, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      delay: baseDelay + gsap.utils.random(0, 0.6),
      ease: "power2.out",
    }).to(
      icon,
      {
        y: `+=${floatDistance}`,
        duration: floatDuration,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      },
      ">-0.2"
    )
  })
}
