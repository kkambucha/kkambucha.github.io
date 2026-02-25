import gsap from "gsap"

const KEYWORDS = [
  "ARPPU",
  "React",
  "ROMI",
  "ROAS",
  "CAC",
  "TDR",
  "NPS",
  "Conversion",
  "EBITDA",
  "CMV",
  "LTV",
  "Profit",
  "Retention Rate",
  "Client-Server",
  "SOLID",
  "CSR, SSR",
  "OKR",
  "KPI",
  "Layout",
  "DOM",
  "CSSOM",
  "HTTP",
  "WEB",
  "HTML",
  "CSS",
  "Render Tree",
  "Javascript",
  "Typescript",
  "Ruby On Rails",
  "PHP",
  "Symfony",
  "Data Flow",
  "TDD",
  "AI-driven",
  "Hydration",
  "FCP",
  "CI/CD",
  "Immutability",
  "FP",
  "OOP",
  "RSC",
  "NextJs",
  "GCP",
  "ChatGPT",
  "Vue",
  "Webpack",
  "Vite",
  "JS",
  "ECMAScript",
  "Jquery",
  "JSON",
  "KISS",
  "DRY",
  "GRASP",
  "Layered Architecture",
  "FSD",
  "State Management",
  "API",
  "UI/UX",
  "Serverless",
]

const container = document.querySelector<HTMLElement>("#keywords-container")
const activeTops: number[] = []

function spawnWord() {
  const word = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)]
  const el = document.createElement("div")
  el.className = "floating-word"
  el.innerText = word

  if (!container) return
  container.appendChild(el)

  // 1. Позиционирование и кучность
  const isLeft = Math.random() > 0.5

  // Ищем свободное место по вертикали (кучно к верху)
  let randomTop: number
  let attempts = 0
  do {
    randomTop = Math.pow(Math.random(), 2) * 75 + 5
    attempts++
    // Проверяем, нет ли рядом другого слова (разрыв минимум 5%)
  } while (activeTops.some((t) => Math.abs(t - randomTop) < 5) && attempts < 10)

  activeTops.push(randomTop)

  // Горизонтальное смещение:
  // часть слов у краёв, часть ближе к центру
  const appearNearEdge = Math.random() > 0.5

  let leftPos: number
  if (appearNearEdge) {
    // ближе к краям
    leftPos = isLeft
      ? gsap.utils.random(0, 12) // слева
      : gsap.utils.random(88, 100) // справа
  } else {
    // ближе к центру
    leftPos = gsap.utils.random(30, 70)
  }

  // 2. Угол поворота
  // Левые: правый угол вверх = отрицательный rotation
  // Правые: левый угол вверх = положительный rotation
  const baseRotation = isLeft
    ? -gsap.utils.random(3, 7)
    : gsap.utils.random(3, 7)

  // 3. Начальное состояние
  gsap.set(el, {
    position: "absolute",
    top: `${randomTop}%`,
    left: `${leftPos}%`,
    xPercent: isLeft ? 0 : -100,
    rotation: baseRotation,
    opacity: 0,
    scale: 0.8,
    transformOrigin: isLeft ? "left center" : "right center",
  })

  // 4. Анимация
  const tl = gsap.timeline({
    onComplete: () => {
      // Удаляем координату из списка занятых перед удалением элемента
      const index = activeTops.indexOf(randomTop)
      if (index > -1) activeTops.splice(index, 1)
      el.remove()
    },
  })

  tl.to(el, {
    opacity: gsap.utils.random(0.7, 1),
    scale: 1,
    duration: 1.2,
    ease: "power2.out",
  })
    .to(
      el,
      {
        y: -15, // Плавный дрейф
        duration: gsap.utils.random(3, 5),
        ease: "none",
      },
      "-=0.5"
    )
    .to(
      el,
      {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.in",
        onStart: () => spawnWord(), // Гарантируем постоянное количество объектов
      },
      "-=1"
    )
}

/**
 * Запуск потока
 * @param {number} count - сколько слов одновременно на экране
 */
export default function (count = 7) {
  for (let i = 0; i < count; i++) {
    // Разносим старт элементов, чтобы они не появлялись толпой
    gsap.delayedCall(i * 0.7, spawnWord)
  }
}
