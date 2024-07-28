import { Variants } from "framer-motion"
import { TRANSITION } from "shared/@common/constants"

export const modalAnimation: Variants = {
  visible: { opacity: 1, x: "-50%", y: "-50%", transition: TRANSITION },
  hidden: { opacity: 0, x: "-50%", y: "-30%", transition: TRANSITION },
}

export const backdropAnimation: Variants = {
  visible: { opacity: 1, transition: TRANSITION },
  hidden: { opacity: 0, transition: TRANSITION },
}

export const toggleAnimation: Variants = {
  active: { rotate: "-45deg", backgroundColor: "var(--error)", transition: TRANSITION },
  inActive: { rotate: 0, backgroundColor: "var(--violet-100)", transition: TRANSITION },
}
