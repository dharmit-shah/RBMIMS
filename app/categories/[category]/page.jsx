import BlogSearch from '@/components/blogs/BlogSearch'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'

export async function generateMetadata(props) {
  const params = await props.params
  return {
    title: params?.category,
  }
}

export async function generateStaticParams() {
  const careerData = getMarkDownData('content/blogs')
  return careerData.map((item) => ({
    category: item.data.categories,
  }))
}

const CategoryPage = async (props) => {
  const params = await props.params
  const blogs = getMarkDownData('content/blogs')
  const decodedCategory = decodeURIComponent(params.category.replace(/%20/g, ' '))
  const categoryBlog = blogs.filter((blog) => blog.data.categories === decodedCategory)

  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero subtitle="BLOG Category" title="Recent blogs created <br/> by aplio" />
        <section className="relative mb-150">
          <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative">
            <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <BlogSearch blogs={categoryBlog} sidebarBlogs={blogs} setActive={decodedCategory} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CategoryPage
