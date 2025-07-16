import FadeUpAnimation from '../animations/FadeUpAnimation'

const PageHero = ({ subtitle, title, paragraph }) => {
  return (
    <section className="hero relative overflow-hidden pt-[200px] max-lg:pt-150">
      <div className="container">
        <FadeUpAnimation className="mx-auto max-w-[948px] text-center">
          {subtitle && <p className="mb-4 font-medium uppercase">{subtitle}</p>}
          {title && <h1 className="mb-10 max-lg:mb-10" dangerouslySetInnerHTML={{ __html: title }}></h1>}
          {paragraph && <p className="mx-auto max-w-[700px] max-lg:mb-10">{paragraph}</p>}
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default PageHero
