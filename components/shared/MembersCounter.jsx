import CounterAnimation from '@/utils/CounterAnimation'

const MembersCounter = ({ border = true }) => {
  return (
    <section className="members_counter_component">
      <div className="container relative">
        <div
          className={`relative grid grid-cols-12 gap-x-5 gap-y-5 py-10 ${
            !border
              ? ''
              : "after:cover before:absolute before:left-1/2 before:top-0 before:h-0.5 before:w-full before:-translate-x-1/2 before:bg-[url('/images/payment/member-border.svg')] before:bg-cover before:bg-center before:bg-no-repeat after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full after:-translate-x-1/2 after:bg-[url('/images/payment/member-border.svg')] after:bg-center after:bg-no-repeat dark:before:bg-[url('/images/payment/member-border-dark.svg')] dark:after:bg-[url('/images/payment/member-border-dark.svg')] max-md:before:hidden"
          }`}>
          <div className="max-lg:col-span-full lg:col-span-6">
            <div className="max-w-[550px]">
              <p className="section-tagline">Numbers</p>
              <h2>Over a Decade of Trusted Infrastructure Management</h2>
            </div>
          </div>
          <div className="py-5 max-md:col-span-full md:col-span-6 lg:col-span-3">
            <div className="flex items-center">
              <div className="mr-6 h-[100px] w-[100px] rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className=" flex h-[80px] w-[80px] items-center justify-center rounded-full border border-dashed border-gray-100 dark:border-borderColor-dark">
                  <h3 className="text-[22px] leading-none text-primary dark:text-primary">
                    <span className="counterTrusted text-[22px] leading-none text-primary dark:text-primary">
                      <CounterAnimation number={98} />
                    </span>
                    %
                  </h3>
                </div>
              </div>
              <h3 className="leading-8 ">Satisfaction Rate</h3>
            </div>
          </div>
          {/* <div className="py-5 max-md:col-span-full md:col-span-6 lg:col-span-3 ">
            <div className="flex items-center">
              <div className="mr-6 h-[100px] w-[100px] rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border border-dashed border-gray-100 dark:border-borderColor-dark">
                  <h3 className="text-[22px] leading-none text-primary dark:text-primary">
                    <span className="counterTrusted text-[22px] leading-none text-primary dark:text-primary">
                      <CounterAnimation number={250} />
                    </span>
                    +
                  </h3>
                </div>
              </div>
              <h3 className="leading-8 ">Site Engineers & Admins</h3>
            </div>
          </div> */}
          <div className="py-5 max-md:col-span-full md:col-span-6 lg:col-span-3 ">
            <div className="flex items-center">
              <div className="mr-6 h-[100px] w-[100px] rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border border-dashed border-gray-100 dark:border-borderColor-dark">
                  <h3 className="text-center text-[22px] leading-none text-primary dark:text-primary">
                    <span className="counterTrusted text-[22px] leading-none text-primary dark:text-primary">
                      <CounterAnimation number={200} />
                    </span>
                    + KM
                  </h3>
                </div>
              </div>
              <h3 className="leading-8 ">Road Networks Mapped</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersCounter
