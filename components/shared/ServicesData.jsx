import solutionImage from '@/public/images/solution/solution.png'
import Image from 'next/image'
import Link from 'next/link'
// import { FaCheck } from 'react-icons/fa'
import MembersCounter from './MembersCounter'

const ServicesData = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-150 pt-[160px] dark:bg-dark-300 max-lg:pb-150 max-lg:pt-20 lg:pb-15">
      <div className="container">
        {/* 1 Interactive Mapping */}
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
              </div>
            </div>
          </div>
          <div className="max-md:order-1 lg:-mt-15">
            <h2 className="mb-8 max-lg:mb-4">Interactive Mapping</h2>
            <p className="mb-6 max-lg:mb-6">
              RBMIMS makes mapping intuitive and efficient with a powerful, interactive GIS interface. Field engineers
              can drop markers directly on the map to define road alignments, draw infrastructure paths, and visualize
              their work in real-time. This map-first approach reduces data entry errors and ensures each asset is
              accurately geo-referenced.
            </p>

            <p>
              With full zoom and pan controls, satellite/hybrid layers, and auto-calculation of chainages, the mapping
              module is ideal for both planning and execution teams. Whether you&apos;re capturing a new road or
              updating an existing route, every action is synced to the backend seamlessly.
            </p>

            <Link href={'/'} className="btn-outline btn-sm mt-6">
              Read More
            </Link>
            {/* <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
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
            </ul> */}
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

        {/* 2 Robust Data Collection */}
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-1 lg:-mt-15">
            <h2 className="mb-8 max-lg:mb-4">Robust Data Collection</h2>
            <p className="mb-6 max-lg:mb-6">
              Our dynamic form engine allows users to record detailed entries for Roads, Culverts, Bridges, Junctions,
              and more. Each infrastructure type has a custom-built form, ensuring relevant data like dimensions,
              material type, GPS location, and inspection photos are all captured in one go.
            </p>

            <p>
              Image and technical drawing uploads are supported right within the form, so field engineers don’t need
              multiple tools. All data is timestamped, geo-tagged, and linked to the road segment for future reference
              and auditing.
            </p>

            <Link href={'/'} className="btn-outline btn-sm mt-6">
              Read More
            </Link>
          </div>

          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Approval Workflow */}
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
              </div>
            </div>
          </div>

          <div className="max-md:order-1 lg:-mt-15">
            <h2 className="mb-8 max-lg:mb-4">Approval Workflow</h2>
            <p className="mb-6 max-lg:mb-6">
              RBMIMS simplifies project governance by introducing a structured, role-based approval workflow. Submitted
              entries can be reviewed by staff or admin users who can verify, approve, or reject them directly from the
              dashboard. Status indicators make it easy to track the approval stage of each record.
            </p>

            <p>
              This ensures only validated, high-quality data gets reflected in reports and visualizations. The
              centralized approval panel also includes filters, quick view, and a summary pane for fast decision-making,
              especially during inspections or deadlines.
            </p>

            <Link href={'/'} className="btn-outline btn-sm mt-6">
              Read More
            </Link>
          </div>
        </div>

        <MembersCounter />

        {/* 4 Smart Search & Navigation */}
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-1 lg:-mt-15">
            <h2 className="mb-8 max-lg:mb-4">Smart Search & Navigation</h2>
            <p className="mb-6 max-lg:mb-6">
              Finding specific data in large projects is effortless with RBMIMS&apos; smart search. Users can search by
              name, ID, location, or type to instantly locate infrastructure elements. Results appear as clickable
              entries that center the map on the selected point.
            </p>

            <p>
              In addition, manual map dragging and marker selection offer an alternative way to explore. Whether on-site
              or in-office, users get immediate context of what&apos;s built, pending, or approved, making planning and
              auditing tasks far more productive.
            </p>

            <Link href={'/'} className="btn-outline btn-sm mt-6">
              Read More
            </Link>
          </div>

          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
              </div>
            </div>
          </div>
        </div>

        {/* 5 PRB Drawings */}
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
              </div>
            </div>
          </div>

          <div className="max-md:order-1 lg:-mt-15">
            <h2 className="mb-8 max-lg:mb-4">PRB Drawings</h2>
            <p className="mb-6 max-lg:mb-6">
              PRB (Preliminary Road Bridge) drawings are an essential part of infrastructure documentation. RBMIMS
              allows engineers to upload multiple PRB drawing files for each road or structure, which can then be
              accessed and downloaded by authorized users.
            </p>

            <p>
              The PRB viewer ensures files are organized and linked to relevant records. This prevents file mismatches
              and gives the entire project team access to the most up-to-date drawings at all times, helping during
              inspections and compliance reviews.
            </p>

            <Link href={'/'} className="btn-outline btn-sm mt-6">
              Read More
            </Link>
          </div>
        </div>

        {/* 6 F1/F2 Reporting */}
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-1 lg:-mt-15">
            <h2 className="mb-8 max-lg:mb-4">F1/F2 Reporting</h2>
            <p className="mb-6 max-lg:mb-6">
              Standardized reporting is a core strength of RBMIMS. The platform supports automated F1 and F2 report
              generation, organizing data based on structure type, location, and approval status. These reports are
              essential during inspections, audits, and handovers.
            </p>

            <p>
              With filters for date range, road segment, or status, users can instantly generate precise reports without
              manual formatting. Export them to PDF or Excel and stay compliant with regulatory formats across
              departments and authorities.
            </p>

            <Link href={'/'} className="btn-outline btn-sm mt-6">
              Read More
            </Link>
          </div>

          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesData
