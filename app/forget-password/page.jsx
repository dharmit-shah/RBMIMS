import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'

export const metadata = {
  title: 'Forget Password',
}

const ForgetPassword = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <section className="relative mb-150 pt-[200px] max-md:pt-25">
          <div className="absolute left-1/2 top-25 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-30 md:hidden"></div>
          <FadeUpAnimation className="container relative">
            <div className="mx-auto mb-12 max-w-[475px] text-center">
              <p className="section-tagline">Reset Password</p>
              <h2>Provide a new password Password</h2>
            </div>
            <div className="relative z-10 mx-auto max-w-[510px]">
              <div className="absolute left-1/2 top-150 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
                <div className="rounded-full bg-primary-200/30  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full  bg-primary-200/50 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full  bg-primary-200/30 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              </div>
              <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-5 max-md:py-7">
                  <form>
                    <div className="grid grid-cols-12 gap-y-6 ">
                      <div className="col-span-full">
                        <label
                          htmlFor="newpassword"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          New Password
                        </label>
                        <input
                          type="password"
                          name="newpassword"
                          id="newpassword"
                          placeholder="At least 8 character"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                        />
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="confirmpassword"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirmpassword"
                          id="confirmpassword"
                          placeholder="At least 8 character"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                        />
                      </div>
                      <div className="col-span-full ">
                        <button className="btn block w-full">Reset Password</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default ForgetPassword
