/**
 * Single source of truth for cloud elements and their animation/layout.
 * Add or remove clouds here; ensure index.html has matching <svg id="cloudN"> for each.
 */
export interface CloudConfig {
  id: string
  duration: number
  delay: number
  position: {
    width: string
    top: string
    right: string
  }
}

export const CLOUDS: CloudConfig[] = [
  {
    id: "cloud1",
    duration: 6,
    delay: 0,
    position: { width: "20vw", top: "5vh", right: "-40vw" },
  },
  {
    id: "cloud2",
    duration: 10,
    delay: 4,
    position: { width: "20vw", top: "26vh", right: "-40vw" },
  },
  {
    id: "cloud3",
    duration: 5,
    delay: -6,
    position: { width: "10vw", top: "21vh", right: "-20vw" },
  },
  {
    id: "cloud4",
    duration: 13,
    delay: -7,
    position: { width: "30vw", top: "30vh", right: "-40vw" },
  },
  {
    id: "cloud5",
    duration: 3,
    delay: 0,
    position: { width: "4vw", top: "15vh", right: "-20vw" },
  },
]

export const CLOUD_ANIMATION = {
  x: "-150vw",
  repeat: -1,
} as const
