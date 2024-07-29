import Layout from '../components/ui/Layout';
import HeroSection from '@/components/ui/HeroSection';
import About from '@/components/ui/About';
import Services from '@/components/ui/Services';
import Projects from '@/components/ui/Projects';


export default function Home() {
  return (
    <Layout>
      <section className='bg-heroSectionColor h-full mx-auto' id='hero'>
        <HeroSection />
      </section>
      <section className='bg-aboutSectionColor h-full mx-auto' id='about'>
        <About />
      </section>
      <section className='bg-heroSectionColor h-full mx-auto' id='services'>
        <Services />
      </section>
      <section className='bg-[#414355]'>
        <Projects />
      </section>
    </Layout>
  );
}
