import AboutCoreValue from '@/components/about/AboutCoreValue'
import AboutDetails from '@/components/about/AboutDetails'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
// import Counter from '@/components/shared/Counter'
import Counter from '@/components/shared/Counter'
import PageHero from '@/components/shared/PageHero'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import TeamMembers from '@/components/shared/TeamMembers'
// import TestimonialSlider from '@/components/shared/TestimonialSlider'
import AboutFeature from '@/data/aboutFeaturesData'
import Testimonial from '@/components/shared/Testimonial'

export const metadata = {
  title: 'About',
}
const About = () => {
  const { AboutFeaturesData } = AboutFeature
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero
          subtitle="ABOUT RBMIMS"
          title="The future of infrastructure is being shaped by RBMIMS"
          paragraph="From mapping to management, RBMIMS is redefining how public works and development projects are executed with transparency and precision."
        />
        <AboutDetails />
        <PaymentFeatures
          features={AboutFeaturesData}
          sectionTag={'CORE VALUE'}
          sectionTitle={'Our business is steered by our core values'}
          className={'relative bg-white py-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25'}
        />
        <AboutCoreValue />
        <Testimonial />
        {/* <TestimonialSlider /> */}
        <Counter />
        {/* <Counter /> */}
        <TeamMembers />
        <CallToAction title="Start your digital transformation today!" />
      </main>
      <Footer />
    </>
  )
}

export default About
