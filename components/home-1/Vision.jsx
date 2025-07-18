import Link from 'next/link'

import { FaCheck } from 'react-icons/fa'
import VisionLine1 from '../icons/VisionLine1'
import VisionLine2 from '../icons/VisionLine2'
import VisionLine3 from '../icons/VisionLine3'
import VisionLine4 from '../icons/VisionLine4'
import VisionAnimation from './VisionAnimation'

const Vision = () => {
  return (
    <section className="relative -mt-24 overflow-hidden bg-gray pb-150 pt-[300px] dark:-mt-24 dark:bg-dark max-md:-mt-60 max-md:pb-20 max-md:pt-[320px] dark:max-md:-mt-60">
      <div className="absolute left-0 top-0 max-w-[1612px] max-md:hidden">
        <VisionLine1 />
      </div>
      <div className="absolute right-0 top-0 max-w-[1612px] max-md:hidden">
        <VisionLine2 />
      </div>
      <div className="absolute left-0 top-0 max-w-[1612px] md:hidden">
        <VisionLine3 />
      </div>
      <div className="absolute right-0 top-0 max-w-[1612px] md:hidden">
        <VisionLine4 />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div>
            <p className="section-tagline">Our Work</p>
            <h2 className="mb-8 max-lg:mb-4">How RBMIMS Works</h2>
            <p className="mb-11 max-lg:mb-5">
              RBMIMS bridges the gap between fieldwork and administration. Track, monitor, and analyze infrastructure
              progress like never before.
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary " />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  {' '}
                  <p>
                    <strong>Dashboard</strong>
                  </p>
                  Access core modules after secure login (User ID or Mobile + OTP).
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary " />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  <p>
                    <strong>Add Alignment</strong>
                  </p>
                  Set markers, fill chainage form, upload images for validation.
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary " />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  <p>
                    <strong>Add Infrastructure</strong>
                  </p>
                  Select point, choose type/subtype, complete form with location and file uploads.
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary " />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  <p>
                    <strong>Submit & Approve</strong>
                  </p>
                  End road to trigger approval; only approved data appears in lists and reports.
                </span>
              </li>
            </ul>
            {/* <Link href="/contact" className="btn">
              Start Your Journey
            </Link> */}
          </div>
          <VisionAnimation />
        </div>
      </div>
    </section>
  )
}

export default Vision
