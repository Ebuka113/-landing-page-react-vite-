
import './App.css'
import AnimationLogo from './components/AnimationLogo'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SectionFeatures from './components/SectionFeatures'
import SectionMonitor from './components/SectionMonitor'
import SectionNewsletter from './components/SectionNewsletter'
import SectionPricing from './components/SectionPricing'
import SectionPurpose from './components/SectionPurpose'
import SectionSchedule from './components/SectionSchedule'
import SectionService from './components/SectionService'
import SectionTestimonial from './components/SectionTestimonial'

function App() {

  return (
    <main className='relative min-h-screen overflow-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20
      rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden '>
      <Navbar />
      <Hero />
      <AnimationLogo />
      <SectionPurpose />
      <SectionFeatures />
      <SectionSchedule />
      <SectionMonitor />
      <SectionPricing />
      <SectionService />
      <SectionTestimonial />
      <SectionNewsletter />
      <Footer />
      </div>
    </ main>
  )
}

export default App
