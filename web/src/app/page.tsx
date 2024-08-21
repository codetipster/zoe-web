import Layout from '../components/ui/Layout';
import HeroSection from '@/components/ui/HeroSection';
import About from '@/components/ui/About';
import Services from '@/components/ui/Services';
import Projects from '@/components/ui/Projects';
import ContactForm from '@/components/ui/ContactForm';


export default function Home() {
  return (
    <Layout >
      <section className='bg-heroSectionColor h-full mx-auto px-4 md:px-8 py-8' id='hero'>
        <HeroSection />
      </section>
      <section className='bg-aboutSectionColor h-full mx-auto px-4 md:px-8 py-8' id='about'>
        <About />
      </section>
      <section className='bg-heroSectionColor h-full mx-auto px-4 md:px-8 py-8' id='services'>
        <Services />
      </section>
      <section className='bg-[#414355] px-4 md:px-8 py-8' id='projects'>
        <Projects />
      </section>
      <section className='bg-heroSectionColor h-full mx-auto  px-4 md:px-8 py-8' id='contactForm'>
        <ContactForm />
      </section>
    </Layout>
  );
}
