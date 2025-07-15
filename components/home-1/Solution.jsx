import solutionImageDark from '@/public/images/solution/solution-dark.png'
import solutionImage from '@/public/images/solution/solution.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'
import SolutionAnimation from './SolutionAnimation'

const Solution = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-150 pt-[160px] dark:bg-dark-300 max-lg:pb-150 max-lg:pt-20 lg:pb-15">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
                {/* <Image src={solutionImageDark} alt="vision image" className="hidden dark:inline-block" /> */}
                {/* <SolutionAnimation /> */}
              </div>
            </div>
          </div>
          <div className="max-md:order-1 lg:-mt-15">
            <p className="section-tagline">Benefits</p>
            <h2 className="mb-8 max-lg:mb-4">Built for Scale, Backed by Reliability</h2>
            {/* <p className="mb-11 max-lg:mb-6">
              With robust backend systems and secure cloud integration, RBMIMS ensures every stakeholder has access to
              the right tools—anytime, anywhere.
            </p> */}

            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary " />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  {' '}
                  <p>
                    <strong>Field-Ready & Offline Capable</strong>
                  </p>
                  Designed for usage even in remote locations with intermittent connectivity.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary " />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  <p>
                    <strong>Time-Efficient Data Entry</strong>
                  </p>
                  Pre-filled dropdowns, image attachments, and calculated fields speed up the process.
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary " />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  <p>
                    <strong>Full Traceability</strong>
                  </p>
                  Each record is linked to a road segment, with audit trails and role-based access.
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary " />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  <p>
                    <strong>Customizable & Scalable</strong>
                  </p>
                  PostGIS-powered database ensures robust spatial querying as your network grows.
                </span>
              </li>
            </ul>
            {/* <ul className="mb-8 flex max-lg:mb-6 max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10">
              <li className="relative flex items-center gap-x-2 ">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Multi-tier Security</span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">99.9% Uptime</span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Role-based Authorization</span>
              </li>
            </ul>

            <ul className="mb-14 flex max-lg:mb-6 max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10">
              <li className="relative flex items-center gap-x-2 ">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Fully Responsive</span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Audit Logs</span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FaCheck className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Easy Onboarding</span>
              </li>
            </ul> */}
            {/* <Link href="/contact" className="btn-outline">
              Start Your Journey
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
