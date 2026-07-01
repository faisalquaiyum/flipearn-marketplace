import LatestListings from "../components/LatestListings"
import Hero from "../components/Hero"
import Plans from "../components/Plans"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Hero />
      <LatestListings />
      <Plans />
      <CTA />
      <Footer />
    </>
  )
}

export default Home