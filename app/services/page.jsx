import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import MembersCounter from '@/components/shared/MembersCounter'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import Pricing from '@/components/shared/Pricing'
import Services from '@/components/shared/Services'
import ServicesData from '@/components/shared/ServicesData'

export const metadata = {
  title: 'Services',
}
export default function ServicePage() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero
          subtitle="OUR SERVICES"
          title="RBMIMS: Your Smart Road <br> Infrastructure Management Platform "
          paragraph="Manage, map, inspect, and monitor roads and infrastructure with unmatched precision."
        />
        {/* <Services sectionDetails={false} /> */}
        <ServicesData />
        
        {/* <Pricing className={'pt-150 max-md:pt-20'} /> */}
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}
