import React from "react"
import classes from "./todo-layout.module.css"
import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
}

export default function TodoLayout(props: Props) {
  return (
    <motion.div className={classes["todo-layout"]} whileTap={{ scale: 0.97 }}>
      {props.children}
    </motion.div>
  )
}
