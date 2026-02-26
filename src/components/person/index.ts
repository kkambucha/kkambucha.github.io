import gsap from "gsap"

export default function () {
  gsap.from(".vadim .letter", {
    duration: 0.8, // Длительность анимации каждого элемента
    y: 50, // Выезд снизу (на 50 пикселей)
    opacity: 0, // Старт с прозрачности (фед)
    stagger: 0.15, // Задержка между появлением элементов (поочередность)
    ease: "power2.out", // Плавное замедление в конце
    force3D: true, // Оптимизация для производительности
  })

  gsap.from(".cto-image", {
    duration: 0.6,
    y: -100, // Прилетает сверху
    scale: 3, // Изначально очень большая (эффект приближения к камере)
    opacity: 0, // Из прозрачности
    ease: "power2.in", // Ускорение к финалу для эффекта удара
    onComplete: () => {
      // Дополнительный "трях" при приземлении (опционально)
      gsap.to(".cto-image", { duration: 0.1, y: 2, repeat: 1, yoyo: true })
    },
  })

  gsap.from(".avatar", {
    duration: 1.2,
    scale: 0, // Появление из нулевого размера
    opacity: 0, // Плавное проявление
    transformOrigin: "center center", // Точка роста — центр
    ease: "back.out(1.7)", // Тот самый «баунс» (чем выше число, тем сильнее отскок)
  })
}
