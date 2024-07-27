import { Variants } from "framer-motion"
import { TRANSITION } from "shared/@common/constants"

export const checkboxAnimation: Variants = {
  checked: {
    backgroundColor: "var(--violet-100)",
    border: "none",
    transition: TRANSITION,
  },
  unChecked: {
    backgroundColor: "#fff",
    border: "1px solid var(--black-100)",
    transition: TRANSITION,
  },
}

export const checkboxSVGAnimation: Variants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      ...TRANSITION,
      delay: 0.2,
    },
  },
  unChecked: {
    pathLength: 0,
    opacity: 0,
    transition: TRANSITION,
  },
}

export const todoContentsAnimatmion: Variants = {
  checked: {
    x: [0, -4, 0],
    textDecorationLine: "line-through",
    color: "var(--black-50)",
    transition: TRANSITION,
  },
  unChecked: {
    x: [0, 4, 0],
    textDecorationLine: "none",
    color: "var(--black-200)",
    transition: TRANSITION,
  },
}
