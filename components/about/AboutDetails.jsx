import Image from 'next/image'

const AboutDetails = () => {
  const AboutImages = [
    {
      id: 1,
      image: '/images/about/about1.jpg',
    },
    {
      id: 2,
      image: '/images/about/about2.jpg',
    },
    {
      id: 3,
      image: '/images/about/about3.jpg',
    },
  ]
  return (
    <section className="relative">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="mb-[160px] grid grid-cols-3 items-center gap-10  max-md:mb-25 max-md:grid-cols-1">
          {AboutImages.map((items) => (
            <div className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200" key={items.id}>
              <Image
                src={items.image}
                alt="about images"
                className="feature_display h-auto w-full rounded"
                width={383}
                height={600}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12">
          <div className="max-md:col-span-full md:col-span-6">
            <div className="max-w-[550px]">
              <p className="section-tagline">Numbers</p>
              <h2>More than 10 years of experience in e-Governance & Infrastructure Systems</h2>
            </div>
          </div>
          <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6">
            <p>
              Our team brings over a decade of experience building solutions for state and central government
              departments. With strong foundations in GIS, cloud systems, and public-sector workflows, RBMIMS is
              designed for real-world implementation, not just theory.
              <br />
              <br />
              With successful deployments across departments and districts, RBMIMS has proven its capability to handle
              complex infrastructure workflows. From road surveys to fund audits, our system adapts to real-time
              needs—ensuring faster decisions, improved transparency, and measurable outcomes for every project phase.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDetails
