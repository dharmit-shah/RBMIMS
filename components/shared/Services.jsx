import ServiceBoxes from './ServiceBoxes'

const Services = ({ sectionDetails = true }) => {
  return (
    <section className="pb-100 pt-100 relative bg-white dark:bg-dark-300 sm:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70 sm:hidden"></div>
      <div className="container">
        {sectionDetails && (
          <div className="mb-12">
            <p className="section-tagline max-lg:text-center">What We Offer</p>
            <div className="block max-lg:text-center lg:flex">
              <h2 className=" max-lg:mb-5">End-to-End Digital Infrastructure Data Solutions</h2>
              <p className="max-w-[520px] lg:ml-auto">
                From data collection to approval and real-time map-based tracking — we streamline the entire process for
                you.
              </p>
            </div>
          </div>
        )}
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2  -translate-y-1/2 max-sm:hidden">
            <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px] "></div>
            <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="lg-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
          </div>
          <ServiceBoxes />
        </div>
      </div>
    </section>
  )
}

export default Services
