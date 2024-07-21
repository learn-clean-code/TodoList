import type { ReactNode } from "react"
import classes from "./layout.module.css"

interface Props {
  children: ReactNode
}

export default function Layout(props: Props) {
  return <section className={classes.layout}>{props.children}</section>
}
