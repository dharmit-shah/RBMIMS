'use client'
import { fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import imageOnlineValueDark from '@/public/images/about/about2.jpg'
import imageShapeDark from '@/public/images/about/about3.jpg'
import imageShape from '@/public/images/about/about2.jpg'
import imageOnlineValue from '@/public/images/about/about3.jpg'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const CoreValueAnimation = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const ref2 = useRef(null)
  const controlAnimation2 = useWhileInView(ref2)
  return (
    <motion.div
      className="relative flex items-center justify-end max-md:justify-center"
      ref={ref}
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}>
      <img
        src={imageOnlineValue}
        alt="banking image"
        className="max-w-[250px] dark:hidden lg:max-w-[320px] xl:max-w-[420px]"
      />
      <img
        src={imageOnlineValueDark}
        alt="banking image"
        className="hidden max-w-[250px]  dark:inline-block lg:max-w-[320px] xl:max-w-[420px]"
      />
      <motion.div
        className="absolute bottom-8 left-0 right-auto top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px]"
        ref={ref2}
        initial="initial"
        animate={controlAnimation2}
        variants={fadeFromRightAnimation}>
        <img src={imageShape} alt="banking image" className="dark:hidden" />
        <img src={imageShapeDark} alt="banking image" className="hidden dark:inline-block " />
      </motion.div>

      <div className="absolute bottom-8 left-0 right-auto top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px]"></div>
    </motion.div>
  )
}

export default CoreValueAnimation
