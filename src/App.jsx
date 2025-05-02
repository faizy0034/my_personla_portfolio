import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import Testimonials from './sections/testimonials/Testimonials'
import FAQs from './sections/faqs/FAQS'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import BottomNav from './sections/bottomnav/BottomNav'
import FloatingNav from './sections/floating-nav/FloatingNav'

const App = () => {
  return (
   <main>
    <ThemeSwitcher/>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <FAQs/>
    <Contact/>
    <Footer/>
   <FloatingNav/>
    <BottomNav/>
   </main>
  )
}

export default App
