import { cubicBezier } from "framer-motion"

const CUBIC_BEZIER = cubicBezier(0.75, 0.01, 0.3, 0.88)

export const TRANSITION = { ease: "easeInOut", duration: 0.3, easings: CUBIC_BEZIER }
