import gsap, { Linear } from "gsap"
import { CLOUD_ANIMATION, CLOUDS } from "./config"
import "./styles.css"

export default function () {
  CLOUDS.forEach((cloud) => {
    const el = document.getElementById(cloud.id)
    if (!el) return

    const { position } = cloud
    Object.assign(el.style, {
      width: position.width,
      top: position.top,
      right: position.right,
    })

    gsap
      .timeline({ repeat: CLOUD_ANIMATION.repeat, delay: cloud.delay })
      .to(`#${cloud.id}`, {
        duration: cloud.duration,
        x: CLOUD_ANIMATION.x,
        ease: Linear.easeNone,
      })
  })
}
