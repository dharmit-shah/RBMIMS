import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import FadeUpAnimation from '../../components/animations/FadeUpAnimation'

const DeleteAccount = () => {
  return (
    <>
      <PrimaryNavbar />
      <main className="delete_account_component">
        <section className="hero relative overflow-hidden pb-[30px] pt-[240px] max-lg:pt-150">
          <div className="container">
            <FadeUpAnimation className="mx-auto max-w-[948px] text-center">
              {/* <p className="mb-4 font-medium uppercase">subtitle</p> */}
              <h2 className="mb-10 max-lg:mb-10">Delete Your Account</h2>
              <p className="mx-auto mb-12 max-w-[700px] max-lg:mb-10">
                Follow these simple steps to permanently delete your account
              </p>

              <ol className="list_style">
                <li className="mx-auto w-[600px] p-3 text-left max-lg:mb-10">
                  <span>1</span>Open the mobile app on your device
                </li>
                <li className="mx-auto w-[600px] p-3 text-left max-lg:mb-10">
                  <span>2</span>Navigate to App Settings
                </li>
                <li className="mx-auto w-[600px] p-3 text-left max-lg:mb-10">
                  <span>3</span>Go to the Account section
                </li>
                <li className="mx-auto w-[600px] p-3 text-left max-lg:mb-10">
                  <span>4</span>Click on Delete Account
                </li>
                <li className="mx-auto w-[600px] p-3 text-left max-lg:mb-10">
                  <span>5</span>Follow the confirmation prompts to complete the deletion
                </li>
              </ol>
            </FadeUpAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default DeleteAccount
