"use client"

import { motion } from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"
import { SiteMark } from "@/components/site-mark"

/** Placeholder hero visual: the site monogram with a tactile press effect. */
export function SiteMarkHero() {
  const [play] = useSound(metalClickSound)

  return (
    <motion.div
      className="flex w-full touch-manipulation items-center justify-center p-8"
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.94 }}
      onTap={() => play()}
      aria-hidden
    >
      <SiteMark className="h-auto w-full max-w-md text-foreground" />
    </motion.div>
  )
}
